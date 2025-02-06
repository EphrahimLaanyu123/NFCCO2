import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [suggestedArticles, setSuggestedArticles] = useState([]);
    const [error, setError] = useState(null);

    const fetchSuggestedArticles = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/suggested_articles');
            setSuggestedArticles(response.data.suggested_articles);
        } catch (err) {
            setError('Error fetching suggested articles');
            console.error(err);
        }
    };

    const handleApproval = async (id, action) => {
        try {
            const response = await axios.post(`http://127.0.0.1:5000/admin/approval/${id}`, {
                action: action,
            });
            alert(response.data.message);
            fetchSuggestedArticles();
        } catch (err) {
            setError('Error processing approval');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchSuggestedArticles();
    }, []);

    return (
        <div>
            <h1>Admin Panel</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
        </div>
    );
};

export default Admin;