// AddSuggestedArticle.jsx
import React, { useState } from 'react';
import './AddSuggestedArticle.css';

const AddSuggestedArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!title || !content || !authorName) {
      setError("Title, content, and author name are required.");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author_name', authorName);
    if (image) {
      formData.append('image_url', image);
    }


    try {
      const response = await fetch('/suggested_articles', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('Suggested article submitted successfully!');
        setTitle('');
        setContent('');
        setAuthorName('');
        setImage(null);
      } else {
        const data = await response.json();
        setError(data.message || 'An error occurred while submitting the article.');
      }
    } catch (err) {
      setError('A network error occurred. Please try again later.');
      console.error("Error submitting article:", err);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="suggested-article-form-container">
      <h2>Suggest an Article</h2>
      <form onSubmit={handleSubmit} className="suggested-article-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="authorName">Author Name:</label>
<input
    type="text"
    id="authorName"
    name="author_name" // Add the name attribute
    value={authorName}
    onChange={(e) => setAuthorName(e.target.value)}
    required
/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image (Optional):</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
          />
          {image && <p className="image-name">{image.name}</p>} {/* Display image name */}
        </div>
        <button type="submit">Submit</button>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AddSuggestedArticle;