import React from "react";
import Auth from "./Auth";
import { db } from "../config/firebase";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";

function Database() {
  const [article, setArticle] = useState([]);
  const articlecollectionRef = collection(db, "articles");

  const [newArticleTitle, setNewArticleTitle] = useState("");
  const [newArticleContent, setNewArticleontent] = useState("");
  const [newArticleTitle, setNewArticleTitle] = useState("");
  const [newArticleTitle, setNewArticleTitle] = useState("");

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

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Auth />
      <div>
        <input placeholder="title.." type="text" />
        <input placeholder="content.." type="text" />
        <input placeholder="date.." type="number" />
        <input type="checkbox" />
        <label>Approved?</label>
        <button>Submit article</button>
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
