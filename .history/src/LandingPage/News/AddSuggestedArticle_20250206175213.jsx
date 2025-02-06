import React, { useState } from "react";
import axios from "axios";
import "./AddSuggestedArticle.jsx"

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
      const response = await axios.post("https://nffco-backend.onrender.com/suggested_articles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", response.data);
      setSuccessMessage("Suggested article submitted successfully!");
      setErrorMessage(null);

      setTitle("");
      setContent("");
      setAuthorName("");
      setImageFile(null);

    } catch (error) {
      console.error("There was an error!", error);
      setErrorMessage("Error submitting the article. Please try again.");
      setSuccessMessage(null);

      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        if (error.response.data && error.response.data.message) {
          setErrorMessage(error.response.data.message);
        }
      } else if (error.request) {
        console.error("Request:", error.request);
        setErrorMessage("No response received from the server.");
      } else {
        console.error("Error message:", error.message);
        setErrorMessage("An error occurred while setting up the request.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <input
        type="text"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        placeholder="Author Name"
        required
      />
      <input
        type="file"
        onChange={(e) => setImageFile(e.target.files[0])}
        accept="image/*"
      />
      <button type="submit">Submit</button>

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

    </form>
  );
};

export default AddSuggestedArticle;