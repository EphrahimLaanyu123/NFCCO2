import React, { useState, useEffect } from 'react';
import supabase from '../../supabaseClient';

function Articles() {
  // ... (Existing state and useEffect for fetching articles)

  const [newArticle, setNewArticle] = useState({
    title: '',
    content: '',
    author_name: '',
    image: null, // For image file
  });

  const [formError, setFormError] = useState(null); // State for form errors

  // ... (Existing fetch functions)

  const handleInputChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
    setFormError(null); // Clear any previous errors when input changes
  };

  const handleImageChange = (e) => {
    setNewArticle({ ...newArticle, image: e.target.files[0] });
    setFormError(null); // Clear any previous errors when input changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null); // Clear any previous errors before submission

    // Validation
    if (!newArticle.title || !newArticle.content || !newArticle.author_name) {
      setFormError("Please fill in all fields.");
      return; // Stop submission
    }

    try {
      let imageUrl = null;
      if (newArticle.image) {
        const { data: storageData, error: storageError } = await supabase.storage
          .from('article-images')
          .upload(newArticle.image.name, newArticle.image);

        if (storageError) {
          console.error("Error uploading image:", storageError);
          setFormError("Error uploading image. Please try again.");
          return;
        }
        imageUrl = storageData.path;
      }

      const { error: insertError } = await supabase
        .from('suggested_articles')
        .insert([
          {
            title: newArticle.title,
            content: newArticle.content,
            author_name: newArticle.author_name,
            image_url: imageUrl,
            suggested_at: new Date(),
          },
        ]);

      if (insertError) {
        console.error("Error suggesting article:", insertError);
        setFormError("Error submitting suggestion. Please try again.");
      } else {
        setNewArticle({ title: '', content: '', author_name: '', image: null });
        fetchSuggestedArticles();
        alert("Article suggested successfully!"); // Provide user feedback
      }
    } catch (error) {
      console.error('Error suggesting article:', error);
      setFormError("An unexpected error occurred. Please try again.");
    }
  };

  // ... (handleApproval and handleDelete functions)

  return (
    <div>
      {/* ... (Existing JSX for displaying articles) */}

      <h2>Suggest New Article</h2>
      {formError && <p style={{ color: 'red' }}>{formError}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newArticle.title}
          onChange={handleInputChange}
          required // You can keep the HTML5 required attribute
        />
        <textarea
          name="content"
          placeholder="Content"
          value={newArticle.content}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="author_name"
          placeholder="Author Name"
          value={newArticle.author_name}
          onChange={handleInputChange}
          required
        />
        <input type="file" name="image" onChange={handleImageChange} />
        <button type="submit">Submit Suggestion</button>
      </form>

      {/* ... (Existing JSX for displaying suggested articles) */}
    </div>
  );
}

export default Articles;