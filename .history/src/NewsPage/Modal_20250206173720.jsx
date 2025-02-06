import React, { useState } from 'react';
import 

const Modal = ({ showModal, closeModal }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !authorName) {
      setMessage("Title, content, and author name are required.");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author_name', authorName);
    if (image) formData.append('image_url', image);

    try {
      const response = await fetch('http://localhost:5000/suggested_articles', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        // Close the modal after success
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        setMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Error submitting article.');
    }
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
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
            <label htmlFor="author_name">Author Name:</label>
            <input
              type="text"
              id="author_name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Image (optional):</label>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg, image/gif"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
