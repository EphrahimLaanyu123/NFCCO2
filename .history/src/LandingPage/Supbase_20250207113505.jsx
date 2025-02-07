import React, { useState, useEffect } from 'react';
import supabase from '../../supabaseClient';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [suggestedArticles, setSuggestedArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: '',
    content: '',
    author_name: '',
    image: null,
  });

  const [formError, setFormError] = useState(null);

  useEffect(() => {
    fetchArticles();
    fetchSuggestedArticles();
  }, []);

  const fetchArticles = async () => {
    const { data, error } = await supabase.from('articles').select('*');
    if (error) console.error("Error fetching articles:", error);
    else setArticles(data);
  };

  const fetchSuggestedArticles = async () => {
    const { data, error } = await supabase.from('suggested_articles').select('*');
    if (error) console.error("Error fetching suggested articles:", error);
    else setSuggestedArticles(data);
  };

  const handleInputChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
    setFormError(null);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setNewArticle({ ...newArticle, image: e.target.files[0] });
    } else {
      setNewArticle({ ...newArticle, image: null });
    }
    setFormError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!newArticle.title || !newArticle.content || !newArticle.author_name) {
      setFormError("Please fill in all fields.");
      return;
    }

    try {
      let imageUrl = null;
      if (newArticle.image) {
        const { data: storageData, error: storageError } = await supabase.storage
          .from('article-images')
          .upload(newArticle.image.name, newArticle.image);

        if (storageError) {
          console.error("Error uploading image:", storageError);
          setFormError("Error uploading image. Please try again.");
          return;
        }
        imageUrl = storageData.path;
      }

      const { error: insertError } = await supabase
        .from('suggested_articles')
        .insert([
          {
            title: newArticle.title,
            content: newArticle.content,
            author_name: newArticle.author_name,
            image_url: imageUrl,
            suggested_at: new Date(),
          },
        ]);

      if (insertError) {
        console.error("Error suggesting article:", insertError);
        setFormError("Error submitting suggestion. Please try again.");
      } else {
        setNewArticle({ title: '', content: '', author_name: '', image: null });
        fetchSuggestedArticles();
        alert("Article suggested successfully!");
      }
    } catch (error) {
      console.error('Error suggesting article:', error);
      setFormError("An unexpected error occurred. Please try again.");
    }
  };

  const handleApproval = async (suggestionId) => {
    try {
      const { data: suggestedArticleData, error: fetchError } = await supabase
        .from('suggested_articles')
        .select('*')
        .eq('id', suggestionId)
        .single();

      if (fetchError) {
        console.error("Error fetching suggested article:", fetchError);
        return;
      }

      const { error: moveError } = await supabase
        .from('articles')
        .insert([
          {
            ...suggestedArticleData,
            approved: true,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ]);

      if (moveError) {
        console.error("Error moving article to approved:", moveError);
        return;
      }

      const { error: deleteError } = await supabase
        .from('suggested_articles')
        .delete()
        .eq('id', suggestionId);

      if (deleteError) {
        console.error("Error deleting suggested article:", deleteError);
        return;
      }

      fetchArticles();
      fetchSuggestedArticles();
    } catch (error) {
      console.error("Error approving article:", error);
    }
  };

  const handleDelete = async (articleId) => {
    try {
      const { error } = await supabase.from('articles').delete().eq('id', articleId);

      if (error) console.error("Error deleting article:", error);
      else fetchArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <div>
      <h2>Suggested Articles</h2>
      <ul>
        {suggestedArticles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <p>By: {article.author_name}</p>
            {article.image_url && (
              <img
                src={`https://YOUR_SUPABASE_BUCKET.supabase.co/storage/v1/object/public/${article.image_url}`} // Correct image URL
                alt={article.title}
                width="200"
              />
            )}
            <button onClick={() => handleApproval(article.id)}>Approve</button>
          </li>
        ))}
      </ul>

      <h2>Suggest New Article</h2>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newArticle.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={newArticle.content}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="author_name"
          placeholder="Author Name"
          value={newArticle.author_name}
          onChange={handleInputChange}
          required
        />
        <input type="file" name="image" onChange={handleImageChange} />
        <button type="submit">Submit Suggestion</button>
      </form>

      <h2>Approved Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <p>By: {article.author_name}</p>
            {article.image_url && (
              <img
                src={`https://YOUR_SUPABASE_BUCKET.supabase.co/storage/v1/object/public/${article.image_url}`} // Correct image URL
                alt={article.title}
                width="200"
              />
            )}
            <button onClick={() => handleDelete(article.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;