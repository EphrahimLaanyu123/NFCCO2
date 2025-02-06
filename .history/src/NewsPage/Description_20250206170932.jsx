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
          <div className="articles-list">
            {articles.map(article => (
              <div key={article.id} className="article-entry">
                <div className="article-content-wrapper">
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-content">{article.content.substring(0, 100)}...</p>
                  <p className="article-author">By: {article.author_name}</p>
                  {article.image_data && (
                    <img
                      src={`data:image/jpeg;base64,${article.image_data}`}
                      alt={article.title}
                      className="article-image"
                    />
                  )}
                </div>
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
