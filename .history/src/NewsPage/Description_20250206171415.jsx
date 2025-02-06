import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Description.css';

export default function Description() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://nffco-backend.onrender.com/articles/approved')
      .then(response => {
        setArticles(response.data.approved_articles);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch articles. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="description-container">
      <h1 className="description-title">Approved Articles</h1>
      <section>
        {loading ? (
          <p className="loading-message">Loading articles...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : articles.length > 0 ? (
          <div className="articles-grid">
            {articles.map(article => (
              <div key={article.id} className="article-card">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-content">{article.content.substring(0, 100)}...</p>
                <p className="article-author">By: {article.author_name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-articles-message">No approved articles available.</p>
        )}
      </section>
    </div>
  );
}
