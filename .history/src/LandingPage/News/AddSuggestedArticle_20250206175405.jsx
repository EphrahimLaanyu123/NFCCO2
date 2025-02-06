import React, { useState } from "react";
import axios from "axios";
import "./AddSuggestedArticle.css";

const AddSuggestedArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author_name", authorName);

    if (imageFile) {
      formData.append("image_url", imageFile);
    }

    try {
      const response = await axios.post(
        "https://nffco-backend.onrender.com/suggested_articles",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccessMessage("Suggested article submitted successfully!");
      setErrorMessage(null);

      setTitle("");
      setContent("");
      setAuthorName("");
      setImageFile(null);
    } catch (error) {
      setErrorMessage("Error submitting the article. Please try again.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="article-container">
      <h2 className="form-title">Add Suggested Article</h2>
      <form onSubmit={handleSubmit} className="article-form">
        <div className="form-group">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            placeholder="Title"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-input"
            placeholder="Content"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="authorName">
            Author Name
          </label>
          <input
            id="authorName"
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="form-input"
            placeholder="Author Name"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="imageFile">
            Upload Image (optional)
          </label>
          <input
            id="imageFile"
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="form-input"
            accept="image/*"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default AddSuggestedArticle;
