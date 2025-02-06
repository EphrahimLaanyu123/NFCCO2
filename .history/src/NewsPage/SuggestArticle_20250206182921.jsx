import React, { useState } from 'react';
import axios from 'axios';

const SuggestArticle = () => {
    const [title, setTitle] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [content, setContent] = useState('');
    const [imageData, setImageData] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleAuthorNameChange = (e) => {
      setAuthorName(e.target.value);
    };
  
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImageData(file);
        setImagePreview(URL.createObjectURL(file));
      }
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) {
        setImageData(file);
        setImagePreview(URL.createObjectURL(file));
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission, like sending data to a backend or saving it.
      console.log({ title, authorName, content, imageData });
    };
  
    return (
      <div className="form-container">
        <h2>Submit Content</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
  
          <div>
            <label htmlFor="authorName">Author Name</label>
            <textarea
              id="author_name"
              value={authorName}
              onChange={handleContentChange}
              required
            />
          </div>
  
          <div>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              required
            />
          </div>
  
          <div
            className="image-upload-container"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <label htmlFor="imageData">Upload Image</label>
            <input
              type="file"
              id="imageData"
              onChange={handleImageChange}
              accept="image/*"
            />
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}
            <p>Drag and drop an image or click to choose a file</p>
          </div>
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  

export default SuggestArticle;
