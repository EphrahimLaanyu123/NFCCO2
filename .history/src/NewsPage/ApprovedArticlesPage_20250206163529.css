import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ApprovedArticlesPage.css';

const ApprovedArticlesPage = () => {
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
    <div className="approved-articles-container">
      <h1 className="title">Approved Articles</h1>
      
      {loading ? (
        <p className="loading-message">Loading articles...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : articles.length > 0 ? (
        <div className="articles-grid">
          {articles.map(article => (
            <div key={article.id} className="article-card
