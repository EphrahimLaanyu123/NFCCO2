import './Supa.css';
import { useState, useEffect } from 'react';
import supabase from './Supabase-client';
function Supa() {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    created_at: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [articleToEdit, setArticleToEdit] = useState(null);
  const [editInputs, setEditInputs] = useState({ title: '', content: '', created_at: '' });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase
          .from("Articles")
          .select("*")
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setArticles(data || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError("Error loading articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addArticle = async () => {
    const { title, content, created_at } = newArticle;

    if (!title || !content || !created_at) {
      alert("Please fill in all fields.");
      return;
    }

    const newArticleData = {
      title,
      content,
      created_at,
    };

    try {
      const { data, error } = await supabase
        .from("Articles")
        .insert([newArticleData])
        .select('*')
        .single();

      if (error) {
        throw error;
      }

      setArticles((prevArticles) => [data, ...prevArticles]);

      setNewArticle({
        title: "",
        content: "",
        created_at: "",
      });

    } catch (error) {
      console.error("Error adding article:", error);
      alert("Error adding article. Please try again.");
    }
  };

  const deleteArticle = async (id) => {
    try {
      const { error } = await supabase
        .from("Articles")
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }

      setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
    } catch (error) {
      console.error("Error deleting article:", error);
      alert("Error deleting article. Please try again.");
    }
  };

  const startEditing = (article) => {
    setIsEditing(true);
    setArticleToEdit(article);
    setEditInputs({ ...article }); // Initialize edit inputs with article data
  };

  const saveEdit = async () => {
    try {
      const { data, error } = await supabase
        .from('Articles')
        .update(editInputs)
        .eq('id', articleToEdit.id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      setArticles((prevArticles) =>
        prevArticles.map((article) => (article.id === data.id ? data : article))
      );

      setIsEditing(false);
      setArticleToEdit(null);
      setEditInputs({ title: '', content: '', created_at: '' }); // Reset edit inputs

    } catch (error) {
      console.error("Error updating article:", error);
      alert("Error updating article. Please try again.");
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setArticleToEdit(null);
    setEditInputs({ title: '', content: '', created_at: '' });
  };


  return (
    <div className="app-container">
      <h1>Articles</h1>
      <div className="input-area">
        <textarea
          type="text"
          name="title"
          placeholder="Article Title"
          value={newArticle.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Article Content"
          value={newArticle.content}
          onChange={handleInputChange}
        />
        <input
          type="datetime-local"
          name="created_at"
          value={newArticle.created_at}
          onChange={handleInputChange}
        />
        <button onClick={addArticle}>Add Article</button>
      </div>

      {loading ? (
        <p>Loading articles...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="article-list">
          {articles.map((article) => (
            <li key={article?.id || crypto.randomUUID()} className="article-item">
              {isEditing && articleToEdit?.id === article.id ? ( // Edit mode for this article
                <div>
                  <input
                    type="text"
                    name="title"
                    value={editInputs.title}
                    onChange={handleEditInputChange}
                  />
                  <textarea
                    name="content"
                    value={editInputs.content}
                    onChange={handleEditInputChange}
                  />
                  <input
                    type="datetime-local"
                    name="created_at"
                    value={editInputs.created_at}
                    onChange={handleEditInputChange}
                  />
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </div>
              ) : ( // Normal display mode
                <div>
                  <h3>{article?.title || "No Title"}</h3>
                  <p>{article?.content || "No Content"}</p>
                  <small>
                    Created At: {article?.created_at ? new Date(article.created_at).toLocaleString() : "N/A"}
                  </small>
                  <div className="article-actions">
                    <button onClick={() => deleteArticle(article.id)}>Delete</button>
                    <button onClick={() => startEditing(article)}>Edit</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Supa;