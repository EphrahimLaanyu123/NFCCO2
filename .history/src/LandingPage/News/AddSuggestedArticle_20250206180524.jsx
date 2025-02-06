import React, { useState } from "react";
import axios from "axios";
import "./AddSuggestedArticle.css"; // Import the CSS file

const AddSuggestedArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author_name", authorName);
    if (image) {
      formData.append("image_url", image);
    }

    try {
      const response = await axios.post("/suggested_articles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(response.data.message);
      // Clear the form after successful submission
      setTitle("");
      setContent("");
      setAuthorName("");
      setImage(null);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred while submitting the article"
      );
    }
  };

  return (
    <div className="form-container">
      <h1>Add Suggested Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author_name">Author Name</label>
          <input
            type="text"
            id="author_name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image_url">Upload Image</label>
          <input
            type="file"
            id="image_url"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddSuggestedArticle;