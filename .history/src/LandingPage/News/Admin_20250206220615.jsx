import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [suggestedArticles, setSuggestedArticles] = useState([]);
    const [approvedArticles, setApprovedArticles] = useState([]);
    const [error, setError] = useState(null);

    // Fetch suggested articles
    const fetchSuggestedArticles = async () => {
        try {
            const response = await axios.get('https://nffco-backend.onrender.com/suggested_articles');
            setSuggestedArticles(response.data.suggested_articles);
        } catch (err) {
            setError('Error fetching suggested articles');
            console.error(err);
        }
    };

    // Fetch approved articles
    const fetchApprovedArticles = async () => {
        try {
            const response = await axios.get('https://nffco-backend.onrender.com/articles/approved');
            setApprovedArticles(response.data.approved_articles);
        } catch (err) {
            setError('Error fetching approved articles');
            console.error(err);
        }
    };

    const handleApproval = async (id, action) => {
        try {
            const response = await axios.post(`https://nffco-backend.onrender.com/admin/approval/${id}`, {
                action: action,
            });
            alert(response.data.message);
            fetchSuggestedArticles();
            fetchApprovedArticles();
        } catch (err) {
            setError('Error processing approval');
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this article?")) {
            try {
                await axios.delete(`https://nffco-backend.onrender.com/articles/approved/${id}`);
                alert('Article successfully deleted');
                fetchApprovedArticles();
            } catch (err) {
                setError('Error deleting approved article');
                console.error(err);
            }
        }
    };

    useEffect(() => {
        fetchSuggestedArticles();
        fetchApprovedArticles();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Admin Panel</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Suggested Articles Section */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Suggested Articles</h2>
                <div>
                    {suggestedArticles.length === 0 ? (
                        <p>No suggested articles to review</p>
                    ) : (
                        suggestedArticles.map((article) => (
                            <div key={article.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
                                <h3>{article.title}</h3>
                                <p>{article.content}</p>
                                <p><strong>Author:</strong> {article.author_name}</p>

                                {article.image_data && (
                                    <div>
                                        <img
                                            src={`data:image/jpeg;base64,${article.image_data}`}
                                            alt={article.title}
                                            style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                                        />
                                    </div>
                                )}

                                <div>
                                    <button
                                        onClick={() => handleApproval(article.id, 'approve')}
                                        style={{ marginRight: '10px' }}
                                    >
                                        Approve
                                    </button>
                                    <button onClick={() => handleApproval(article.id, 'reject')}>Reject</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {/* Approved Articles Section */}
            <section>
                <h2>Approved Articles</h2>
                <div>
                    {approvedArticles.length === 0 ? (
                        <p>No approved articles available</p>
                    ) : (
                        approvedArticles.map((article) => (
                            <div key={article.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
                                <h3>{article.title}</h3>
                                <p>{article.content}</p>
                                <p><strong>Author:</strong> {article.author_name}</p>

                                {article.image_data && (
                                    <div>
                                        <img
                                            src={`data:image/jpeg;base64,${article.image_data}`}
                                            alt={article.title}
                                            style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                                        />
                                    </div>
                                )}
                                <p><strong>Created At:</strong> {article.created_at}</p>
                                <button onClick={() => handleDelete(article.id)} style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
                                    Delete
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};

export default Admin;
