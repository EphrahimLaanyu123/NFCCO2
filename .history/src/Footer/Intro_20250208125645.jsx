import React, { useState, useEffect } from 'react';
import './Intro.css';
import newsArray from '../NewsPage/data';

function Intro() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Directly set the first 3 articles from newsArray
      const fetchedArticles = newsArray.slice(0, 3); // Get first 3 articles
      setArticles(fetchedArticles);
      setLoading(false);
    } catch (err) {
      setError('Failed to load articles');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="Intro">
      <header>
        <h1>Approved News Articles</h1>
      </header>
      <main className="articles-container">
        {articles.length === 0 ? (
          <p>No approved articles found.</p>
        ) : (
          articles.map((article) => (
            <div key={article.id} className="article-card">
              {article.image && (
                <img 
                  src={article.image} 
                  alt={article.title} 
                />
              )}
              <h2>{article.title}</h2>
              <p>{article.preview}</p>
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
