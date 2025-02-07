import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Description.css';

export default function Description() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://nffco-backend.onrender.com/articles/approved')
      .then(response => {
        setArticles(response.data.approved_articles);
        setFilteredArticles(response.data.approved_articles);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch articles. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.author_name.toLowerCase().includes(query)
    );
    setFilteredArticles(filtered);
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    let sortedArticles = [...filteredArticles];
    if (selectedFilter === 'date') {
      sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (selectedFilter === 'title') {
      sortedArticles.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedFilter === 'author') {
      sortedArticles.sort((a, b) => a.author_name.localeCompare(b.author_name));
    }
    setFilteredArticles(sortedArticles);
  };

  return (
    <div className="blog-page-container">
      <h1 className="blog-page-title">Approved Blog Articles</h1>

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchQuery}
          onChange={handleSearch}
          className="blog-search-input"
        />
        <select
          value={filter}
          onChange={handleFilterChange}
          className="blog-filter-select"
        >
          <option value="">Filter by</option>
          <option value="date">Date</option>
          <option value="title">Title (A-Z)</option>
          <option value="author">Author Name</option>
        </select>
      </div>

      <section>
        {loading ? (
          <p className="blog-loading-message">Loading articles...</p>
        ) : error ? (
          <p className="blog-error-message">{error}</p>
        ) : filteredArticles.length > 0 ? (
          <div className="blog-articles-grid">
            {filteredArticles.map(article => (
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
