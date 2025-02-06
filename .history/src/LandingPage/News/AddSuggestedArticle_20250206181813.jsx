import React, { useState } from 'react';
import axios from 'axios';
import './AddSuggestedArticle.css';

const AddSuggestedArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleAuthorChange = (e) => setAuthorName(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author_name', authorName);
    if (image) formData.append('image_url', image);

    try {
      const response = await axios.post('https://nffco-backend.onrender.com/suggested_articles', formData);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error submitting article:', error);
      setMessage('Error submitting the article');
    }
  };

  return (
    <div className="add-article-container">
      <h1 className="title">Submit a Suggested Article</h1>
      <form className="article-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
            placeholder="Enter article title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
            required
            placeholder="Enter article content"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="authorName">Author Name</label>
          <input
            type="text"
            id="authorName"
            name="author_name"
            value={authorName}
            onChange={handleAuthorChange}
            required
            placeholder="Enter author name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Article Image (Optional)</label>
          <input
            type="file"
            id="image"
            name="image_url"
            onChange={handleImageChange}
            accept="image/png, image/jpg, image/jpeg, image/gif"
          />
        </div>
        <button type="submit" className="submit-button">Submit Article</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddSuggestedArticle;
