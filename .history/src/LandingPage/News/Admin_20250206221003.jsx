import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [suggestedArticles, setSuggestedArticles] = useState([]);
    const [approvedArticles, setApprovedArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loadingSuggested, setLoadingSuggested] = useState(true);
    const [loadingApproved, setLoadingApproved] = useState(true);


    const fetchSuggestedArticles = async () => {
        setLoadingSuggested(true); // Set loading to true before fetching
        try {
            const response = await axios.get('https://nffco-backend.onrender.com/suggested_articles');
            setSuggestedArticles(response.data.suggested_articles);
            setError(null); // Clear any previous errors
        } catch (err) {
            setError('Error fetching suggested articles');
            console.error(err);
             if (err.response) {
                console.error("Response data:", err.response.data);
                console.error("Response status:", err.response.status);
                console.error("Response headers:", err.response.headers);
                setError(err.response.data.message || 'Error fetching suggested articles');
            } else if (err.request) {
                console.error("Request:", err.request);
                setError('No response received from the server');
            } else {
                console.error("Error message:", err.message);
                setError('Error setting up the request');
            }
        } finally {
            setLoadingSuggested(false); // Set loading to false after fetch, regardless of success/failure
        }
    };

    const fetchApprovedArticles = async () => {
        setLoadingApproved(true);
        try {
            const response = await axios.get('https://nffco-backend.onrender.com/articles/approved');
            setApprovedArticles(response.data.approved_articles);
            setError(null);
        } catch (err) {
            setError('Error fetching approved articles');
            console.error(err);
            if (err.response) {
                console.error("Response data:", err.response.data);
                console.error("Response status:", err.response.status);
                console.error("Response headers:", err.response.headers);
                setError(err.response.data.message || 'Error fetching approved articles');
            } else if (err.request) {
                console.error("Request:", err.request);
                setError('No response received from the server');
            } else {
                console.error("Error message:", err.message);
                setError('Error setting up the request');
            }
        } finally {
            setLoadingApproved(false);
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
            setError(null);
        } catch (err) {
            setError('Error processing approval');
            console.error(err);
            if (err.response) {
                console.error("Response data:", err.response.data);
                console.error("Response status:", err.response.status);
                console.error("Response headers:", err.response.headers);
                setError(err.response.data.message || 'Error processing approval');
            } else if (err.request) {
                console.error("Request:", err.request);
                setError('No response received from the server');
            } else {
                console.error("Error message:", err.message);
                setError('Error setting up the request');
            }
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`https://nffco-backend.onrender.com/articles/${id}`);
            if (response.status === 204) {
                alert("Article deleted successfully");
                fetchApprovedArticles();
                setError(null);
            } else {
                setError(`Unexpected response status: ${response.status}`);
            }
        } catch (err) {
            setError('Error deleting article');
            console.error(err);
            if (err.response) {
                console.error("Response data:", err.response.data);
                console.error("Response status:", err.response.status);
                console.error("Response headers:", err.response.headers);
                setError(err.response.data.message || 'Error deleting article');
            } else if (err.request) {
                console.error("Request:", err.request);
                setError('No response received from the server');
            } else {
                console.error("Error message:", err.message);
                setError('Error setting up the request');
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
                {loadingSuggested ? (
                    <p>Loading suggested articles...</p>
                ) : suggestedArticles.length === 0 ? (
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
            </section>

            {/* Approved Articles Section */}
            <section>
                <h2>Approved Articles</h2>
                {loadingApproved ? (
                    <p>Loading approved articles...</p>
                ) : approvedArticles.length === 0 ? (
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
                            <div>
                                <button onClick={() => handleDelete(article.id)} style={{ color: 'red' }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </section>
        </div>
    );
};

export default Admin;