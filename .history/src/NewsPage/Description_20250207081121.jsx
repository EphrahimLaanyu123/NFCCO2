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
    <div className="blog-page-container">
      <h1 className="blog-page-title">Approved Blog Articles</h1>
      <section>
        {loading ? (
          <p className="blog-loading-message">Loading articles...</p>
        ) : error ? (
          <p className="blog-error-message">{error}</p>
        ) : articles.length > 0 ? (
          <div className="blog-articles-grid">
            {articles.map(article => (
              <div key={article.id} className="blog-article-card">
                {article.image_data && (
                  <img
                    src={`data:image/jpeg;base64,${article.image_data}`}
                    alt={article.title}
                    className="blog-article-image"
                  />
                )}
                <h2 className="blog-article-title">{article.title}</h2>
                <p className="blog-article-content">{article.content.substring(0, 100)}...</p>
                <p className="blog-article-author">By: {article.author_name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="blog-no-articles-message">No blog articles available.</p>
        )}
      </section>
    </div>
  );
}
