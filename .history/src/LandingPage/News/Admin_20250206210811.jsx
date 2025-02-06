import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [suggestedArticles, setSuggestedArticles] = useState([]);
    const [approvedArticles, setApprovedArticles] = useState([]);
    const [error, setError] = useState(null);

    const fetchSuggestedArticles = async () => {
        try {
            const response = await axios.get('https://nffco-backend.onrender.com/suggested_articles');
            setSuggestedArticles(response.data.suggested_articles || []);
        } catch (err) {
            setError('Error fetching suggested articles');
            console.error(err);
        }
    };

    const fetchApprovedArticles = async () => {
        try {
            const response = await axios.get('https://nffco-backend.onrender.com//articles/approved'); 
            setApprovedArticles(response.data.articles || []);
        } catch (err) {
            setError('Error fetching approved articles');
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this article?")) {
            try {
                await axios.delete(`https://nffco-backend.onrender.com/articles/${id}`);
                fetchApprovedArticles();
                alert("Article deleted successfully!");
            } catch (err) {
                setError('Error deleting article');
                console.error(err);
            }
        }
    };

    useEffect(() => {
        fetchSuggestedArticles();
        fetchApprovedArticles();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
            {error && <p className="text-red-500 mb-2">{error}</p>}

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Suggested Articles</h2>
                {suggestedArticles.length === 0 ? (
                    <p className="text-gray-600">No suggested articles to review</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {suggestedArticles.map((article) => (
                            <div key={article.id} className="border rounded-lg p-4 shadow">
                                <h3 className="text-xl font-medium mb-2">{article.title}</h3>
                                <p className="text-gray-700 mb-4">{article.content}</p>
                                <p className="text-gray-600 mb-2"><strong>Author:</strong> {article.author_name}</p>
                                {article.image_data && (
                                    <img
                                        src={`data:image/jpeg;base64,${article.image_data}`}
                                        alt={article.title}
                                        className="w-full h-auto mb-4 rounded-lg"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-2">Approved Articles</h2>
                {approvedArticles.length === 0 ? (
                    <p className="text-gray-600">No approved articles found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {approvedArticles.map((article) => (
                            <div key={article.id} className="border rounded-lg p-4 shadow">
                                <h3 className="text-xl font-medium mb-2">{article.title}</h3>
                                <p className="text-gray-700 mb-4">{article.content}</p>
                                <p className="text-gray-600 mb-2"><strong>Author:</strong> {article.author_name}</p>
                                {article.image_data && (
                                    <img
                                        src={`data:image/jpeg;base64,${article.image_data}`}
                                        alt={article.title}
                                        className="w-full h-auto mb-4 rounded-lg"
                                    />
                                )}
                                <button
                                    onClick={() => handleDelete(article.id)}
                                    className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
