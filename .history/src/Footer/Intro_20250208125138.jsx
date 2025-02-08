import React, { useState, useEffect } from 'react';
import './Blog.css';
import newsArray from '../NewsPage/data';

function Intro() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="App">
      <header>
        <h1>Approved News Articles</h1>
      </header>
      <main className="articles-container">
        {articles.length === 0 ? (
          <p>No approved articles found.</p>
        ) : (
          articles.map((article) => (
            <div key={article.id} className="article-card">
              {article.image_data && (
  <img 
  src={`data:image/jpeg;base64,${article.image_data}`} 
  alt={article.title} 
/>              )}
              <h2>{article.title}</h2>
              <p>{article.content}</p>
              <p className="author">By {article.author_name}</p>
              <p className="date">Published on: {article.created_at}</p>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default Intro;