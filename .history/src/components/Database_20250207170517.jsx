import React from "react";
import Auth from "./Auth";
import { db } from "../config/firebase";
import { useState, useEffect, onChange } from "react";
import { getDocs, collection } from "firebase/firestore";

function Database() {
  const [article, setArticle] = useState([]);
  const articlecollectionRef = collection(db, "articles");

  const [newArticleTitle, setNewArticleTitle] = useState("");
  const [newArticleContent, setNewArticleContent] = useState("");
  const [newArticleDate, setNewArticleDate] = useState(0);
  const [isApproved, setIsAprroved] = useState(false);

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
        <input placeholder="title.." onChange={(e) => setNewArticleTitle(e.target.value)} />
        <input placeholder="content.." onChange={(e) => setNewArticleContent9 Number(e.target.value)} />
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
