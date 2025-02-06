import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [suggestedArticles, setSuggestedArticles] = useState([]);
    const [approvedArticles, setApprovedArticles] = useState([]);
    const [error, setError] = useState(null);

    // Fetch Suggested Articles (Pending Approval)
    const fetchSuggestedArticles = async () => {
        try {
            const response = await axios.get('https://nffco-backend.onrender.com/suggested_articles');
            setSuggestedArticles(response.data.suggested_articles);
        } catch (err) {
            setError('Error fetching suggested articles');
            console.error(err);
        }
    };

    // Fetch Approved Articles
    const fetchApprovedArticles = async () => {
        try {
            const response = await axios.get('https://nffco-backend.onrender.com/admin/approved_articles');
            setApprovedArticles(response.data.approved_articles);
        } catch (err) {
            setError('Error fetching approved articles');
            console.error(err);
        }
    };

    // Handle Article Approval/Reject Action
    const handleApproval = async (id, action) => {
        try {
            const response = await axios.post(`https://nffco-backend.onrender.com/admin/approval/${id}`, {
                action: action,
            });
            alert(response.data.message);
            fetchSuggestedArticles(); // Refresh the suggested articles
            fetchApprovedArticles(); // Refresh the approved articles
        } catch (err) {
            setError('Error processing approval');
            console.error(err);
        }
    };

    // Handle Article Deletion
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`https://nffco-backend.onrender.com/admin/approved_articles/${id}`);
            alert(response.data.message);
            fetchApprovedArticles(); // Refresh the list after deletion
        } catch (err) {
            setError('Error deleting article');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchSuggestedArticles(); // Fetch suggested articles on load
        fetchApprovedArticles(); // Fetch approved articles on load
    }, []);

    return (
        <div>
            <h1>Admin Panel</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Suggested Articles Section */}
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

            {/* Approved Articles Section */}
            <h2>Approved Articles</h2>
            <div>
                {approvedArticles.length === 0 ? (
                    <p>No approved articles to display</p>
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

                            <div>
                                <button
                                    onClick={() => handleDelete(article.id)}
                                    style={{ backgroundColor: 'red', color: 'white' }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Admin;
