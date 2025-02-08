import React, { useState, useEffect } from 'react';
import './Intro.css';
import './Blog.css';
import newsArray from '../NewsPage/data';
import { Link } from 'react-router-dom';

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
    return <div className="intro__loading">Loading...</div>;
  }

  if (error) {
    return <div className="intro__error">Error: {error}</div>;
  }

  return (
    <div className="app">
      <header className="intro__header">
        <h1 className="intro__header-h1">LATEST NEWS</h1>
      </header>
      <main className="intro__articles-container">
        {articles.length === 0 ? (
          <p>No approved articles found.</p>
        ) : (
          articles.map((article) => (
            <div key={article.id} className="intro__card-article">
              {article.image && (
                <img 
                  src={article.image} 
                  alt={article.title} 
                />
              )}
              <h2>{article.title}</h2>
              <p>{article.preview}</p>
              <p className="intro__author">By {article.author_name}</p>
              <p className="intro__date">Published on: {article.created_at}</p>
            </div>
          ))
        )}
      </main>
      <Link to="/news">
        <button>View All Articles</button>
      </Link>
    </div>
  );
}

export default Intro;
