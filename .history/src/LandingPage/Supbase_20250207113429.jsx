import React, { useState, useEffect } from 'react';
import supabase from '../../supabaseClient';

function Articles() {
  // ... (Existing state, useEffect, and fetch functions)

  const [newArticle, setNewArticle] = useState({
    title: '',
    content: '',
    author_name: '',
    image: null,
  });

  const [formError, setFormError] = useState(null);

  // ... (Existing fetch functions)

  const handleInputChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
    setFormError(null);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) { // Check if a file is selected
      setNewArticle({ ...newArticle, image: e.target.files[0] });
    } else {
      setNewArticle({ ...newArticle, image: null }); // Clear if no file selected
    }
    setFormError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!newArticle.title || !newArticle.content || !newArticle.author_name) {
      setFormError("Please fill in all fields.");
      return;
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
        alert("Article suggested successfully!");
      }
    } catch (error) {
      console.error('Error suggesting article:', error);
      setFormError("An unexpected error occurred. Please try again.");
    }
  };


  // ... (handleApproval and handleDelete functions - no changes needed here)

  return (
    <div>
      {/* ... (Existing JSX for displaying articles) */}

      <h2>Suggest New Article</h2>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
      <form onSubmit={handleSubmit}>
        <input  {/* Changed to input for title */}
          type="text"
          name="title"
          placeholder="Title"
          value={newArticle.title}
          onChange={handleInputChange}
          required
        />
        <textarea  {/* Textarea for content */}
          name="content"
          placeholder="Content"
          value={newArticle.content}
          onChange={handleInputChange}
          required
        />
        <input  {/* Input for author name */}
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