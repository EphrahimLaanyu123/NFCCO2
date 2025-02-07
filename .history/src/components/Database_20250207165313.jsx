import React from "react";
import Auth from "./Auth";
import { db } from "../config/firebase";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore"

function Database() {
    const [article, setArticle] = useState([]);
    const articlecollectionRef = collection(db, "articles");

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
        <div>
            <Auth/>
            <div>
                    {article.map((news) => (
        <div key={news.id}>
            <h1>{news.title}</h1>
            <p>{news.content}</p>
            <p>Date: {news.created_at?.toDate().toLocaleDateString()}</p>
            <p>Status: {news.approved ? "Approved" : "Pending"}</p>
        </div>
        ))}

            </div>
        </div>
    )
}

export default Database;