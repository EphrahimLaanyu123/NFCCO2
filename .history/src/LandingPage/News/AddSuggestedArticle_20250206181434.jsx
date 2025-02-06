import React, { useState } from 'react';
import './AddSuggestedArticle.css';

const AddSuggestedArticle = () => {
  const [articleData, setArticleData] = useState({
    title: '',
    content: '',
    author_name: '',
    image: null,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setArticleData({ ...articleData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const { title, content, author_name, image } = articleData;

    if (!title || !content || !author_name) {
      setError('Title, content, and author name are required.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author_name', author_name);
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
        setArticleData({
          title: '',
          content: '',
          author_name: '',
          image: null,
        });
      } else {
        const data = await response.json();
        setError(data.message || 'An error occurred.');
      }
    } catch (err) {
      setError('A network error occurred.');
      console.error('Error submitting article:', err);
    }
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
            name="title"
            value={articleData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={articleData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="authorName">Author Name:</label>
          <input
            type="text"
            id="authorName"
            name="author_name"
            value={articleData.author_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image (Optional):</label>
          <input
            type="file"
            id="image"
            name="image_url"
            onChange={handleImageChange}
            accept="image/*"
          />
          {articleData.image && <p className="image-name">{articleData.image.name}</p>}
        </div>
        <button type="submit">Submit</button>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AddSuggestedArticle;