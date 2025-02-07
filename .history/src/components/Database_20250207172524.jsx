import React, { useState, useEffect } from "react";
import Auth from "./Auth";
import { db } from "../config/firebase";
import { getDocs, collection, addDoc, deleteDoc } from "firebase/firestore";

function Database() {
  const [article, setArticle] = useState([]);
  const articlecollectionRef = collection(db, "articles");

  const [newArticleTitle, setNewArticleTitle] = useState("");
  const [newArticleContent, setNewArticleContent] = useState("");
  const [newArticleDate, setNewArticleDate] = useState("");
  const [isApproved, setIsApproved] = useState(false);

  const getArticle = async () => {
    try {
      const data = await getDocs(articlecollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setArticle(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  const onSubmitArticle = async () => {
    if (!newArticleTitle || !newArticleContent || !newArticleDate) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    
    try {
      await addDoc(articlecollectionRef, {
        title: newArticleTitle,
        content: newArticleContent,
        created_at: new Date(newArticleDate),
        approved: isApproved,
      });

      // Reset form values after submission
      setNewArticleTitle("");
      setNewArticleContent("");
      setNewArticleDate("");
      setIsApproved(false);

      getArticle();
    } catch (err) {
      console.error(err);
    }
  };

  const deletearticle = async (id) => {
    const articleDoc = doc(db, "articles", id);
    await deleteDoc(movieDoc);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Auth />
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={newArticleTitle}
          onChange={(e) => setNewArticleTitle(e.target.value)}
          style={{ display: "block", margin: "8px 0", padding: "8px" }}
        />
        <textarea
          placeholder="Content"
          value={newArticleContent}
          onChange={(e) => setNewArticleContent(e.target.value)}
          rows={3}
          style={{ display: "block", margin: "8px 0", padding: "8px" }}
        />
        <input
          type="date"
          value={newArticleDate}
          onChange={(e) => setNewArticleDate(e.target.value)}
          style={{ display: "block", margin: "8px 0", padding: "8px" }}
        />
        <label>
          <input
            type="checkbox"
            checked={isApproved}
            onChange={(e) => setIsApproved(e.target.checked)}
            style={{ marginRight: "8px" }}
          />
          Approved?
        </label>
        <button onClick={onSubmitArticle} style={{ marginTop: "12px", padding: "10px 16px" }}>
          Submit Article
        </button>
      </div>
      <div style={{ width: "100%", maxWidth: "800px" }}>
        {article.map((news) => (
          <div
            key={news.id}
            style={{
              borderBottom: "1px solid #ddd",
              padding: "16px",
              textAlign: "left",
            }}
          >
            <h1>{news.title}</h1>
            <p>{news.content}</p>
            <p>Date: {news.created_at?.toDate().toLocaleDateString()}</p>
            <p style={{ color: news.approved ? "green" : "red" }}>
              Status: {news.approved ? "Approved" : "Pending"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Database;
