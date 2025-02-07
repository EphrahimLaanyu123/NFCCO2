import React, { useState, useEffect } from 'react';
import supabase from './supabaseClient'; // Import your Supabase client

function Articles() {
  const [articles, setArticles] = useState([]);
  const [suggestedArticles, setSuggestedArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: '',
    content: '',
    author_name: '',
    image: null, // For image file
  });

  useEffect(() => {
    fetchArticles();
    fetchSuggestedArticles();
  }, []);

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from('articles')
      .select('*');

    if (error) console.error("Error fetching articles:", error);
    else setArticles(data);
  };

  const fetchSuggestedArticles = async () => {
    const { data, error } = await supabase
      .from('suggested_articles')
      .select('*');

    if (error) console.error("Error fetching suggested articles:", error);
    else setSuggestedArticles(data);
  };

  const handleInputChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setNewArticle({ ...newArticle, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = null;
      if (newArticle.image) {
        const { data: storageData, error: storageError } = await supabase
          .storage
          .from('article-images') // Your bucket name
          .upload(newArticle.image.name, newArticle.image);

        if (storageError) {
          console.error("Error uploading image:", storageError);
          return; // Stop submission if image upload fails
        }
        imageUrl = storageData.path; // Path to the uploaded image
      }

      const { error: insertError } = await supabase
        .from('suggested_articles')
        .insert([
          {
            title: newArticle.title,
            content: newArticle.content,
            author_name: newArticle.author_name,
            image_url: imageUrl,
            suggested_at: new Date(), // Use JavaScript Date object
          },
        ]);

      if (insertError) console.error("Error suggesting article:", insertError);
      else {
        setNewArticle({ title: '', content: '', author_name: '', image: null });
        fetchSuggestedArticles();
      }

    } catch (error) {
      console.error('Error suggesting article:', error);
    }
  };

  const handleApproval = async (suggestionId) => {
    try {
      const { data: suggestedArticleData, error: fetchError } = await supabase
        .from('suggested_articles')
        .select('*')
        .eq('id', suggestionId)
        .single(); // Get the single suggested article

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
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', articleId);

      if (error) console.error("Error deleting article:", error);
      else fetchArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  // ... (rest of your JSX, similar to previous examples)

}

export default Articles;