import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [suggestedArticles, setSuggestedArticles] = useState([]);
    const [approvedArticles, setApprovedArticles] = useState([]);
    const [error, setError] = useState(null);

    const fetchSuggestedArticles = async () => {
        try {
            const response = await axios.get('https://nffco-backend.onrender.com/suggested_articles');
            setSuggestedArticles(response.data.suggested_articles);
        } catch (err) {
            setError('Error fetching suggested articles');
            console.error(err);
        }
    };

    const fetchApprovedArticles = async () => {
        try {
            const response = await axios.get('https://nffco-backend.onrender.com/articles'); // Your approved articles endpoint
            setApprovedArticles(response.data.articles); // Adjust if your API response structure is different
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
            fetchSuggestedArticles(); // Refresh suggested articles after approval/rejection
            fetchApprovedArticles(); // Refresh approved articles
        } catch (err) {
            setError('Error processing approval');
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this article?")) {
            try {
                await axios.delete(`https://nffco-backend.onrender.com/articles/${id}`);
                fetchApprovedArticles(); // Refresh the approved articles list
                alert("Article deleted successfully!");
            } catch (err) {
                setError('Error deleting article');
                console.error(err);
            }
        }
    };

    useEffect(() => {
        fetchSuggestedArticles();
        fetchApprovedArticles(); // Fetch approved articles on mount
    }, []);

    return (
        <div>
            <h1>Admin Panel</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <h2>Suggested Articles</h2>
            <div> {/* Suggested Articles Section */}
                {suggestedArticles.length === 0 ? (
                    <p>No suggested articles to review</p>
                ) : (
                    // ... (Your existing suggested articles mapping code)
                    suggestedArticles.map((article) => (
                        <div key={article.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                            <p><strong>Author:</strong> {article.author_name}</p>

                            {article.image_data && (
                                <div>
                                    <img
                                        src={`data:image/jpeg;base64,${article.image_data}`} // Corrected line
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


            <h2>Approved Articles</h2>
            <div> {/* Approved Articles Section */}
                {approvedArticles.length === 0 ? (
                    <p>No approved articles found.</p>
                ) : (
                    approvedArticles.map((article) => (
                        <div key={article.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                            <p><strong>Author:</strong> {article.author_name}</p>
                             {article.image_data && (
                                <div>
                                    <img
                                        src={`data:image/jpeg;base64,${article.image_data}`} // Corrected line
                                        alt={article.title}
                                        style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                                    />
                                </div>
                            )}
                            <button onClick={() => handleDelete(article.id)} style={{ backgroundColor: 'red', color: 'white' }}>
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Admin;