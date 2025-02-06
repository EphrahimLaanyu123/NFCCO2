import React, { useState } from 'react';
import axios from 'axios';

const SuggestArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 16 * 1024 * 1024) {
      setImage(file);
    } else {
      setMessage('File is too large. Maximum size is 16MB.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author_name', authorName);

    if (image) {
      formData.append('image_url', image);
    }

    try {
      const response = await axios.post('http://localhost:5000/suggested_articles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage('There was an error submitting the article.');
    }
  };

  return (
    <div className="suggest-article">
      <h2>Suggest an Article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="authorName">Author Name:</label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" onChange={handleFileChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SuggestArticle;
