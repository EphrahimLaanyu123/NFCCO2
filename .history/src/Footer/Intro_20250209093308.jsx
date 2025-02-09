import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Link } from 'react-router-dom';
import './Blog.css';

function Intro() {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({
    space: 'qunwc6g5m6w5',
    accessToken: 'Azaa182oze0yq57l6c5uN2icH-6AdRo4ivlBp4Fdnd4',
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries();
        const sortedPosts = entries.items
          .filter(post => post.fields.createdDate)
          .sort((a, b) => new Date(b.fields.createdDate) - new Date(a.fields.createdDate))
          .slice(0, 3);
        setBlogPosts(sortedPosts);
      } catch (error) {
        console.log(`Error fetching blog posts: ${error}`);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div className="News">
      <div className="header">
        <h1 className="header-h1">Latest Blog Posts</h1>
      </div>

      <div className="articles-container">
        {blogPosts.map((post) => (
          <div className="card-article" key={post.sys.id}>
            {/* Cover Image */}
            {post.fields.coverImage?.fields?.file?.url && (
              <img
                src={post.fields.coverImage.fields.file.url}
                alt={post.fields.blogTitle || 'Cover Image'}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{post.fields.blogTitle}</h2>
              <p className="date">
                {post.fields.createdDate && new Intl.DateTimeFormat('en-GB', {
                  month: 'long',
                  day: '2-digit',
                  year: 'numeric',
                }).format(new Date(post.fields.createdDate))}
              </p>
              <p className="text-gray-700 mb-4">
                {post.fields.blogSummary?.slice(0, 100)}...
              </p>
              <Link
                to={`/blogDetails/${post.sys.id}`}
                className="blog-button inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="see-all-container mt-4 text-center">
        <Link
          to="/news"
          className="see-all-button inline-block bg-black -500 text-white px-6 py-3 rounded-md hover:bg-green-600"
        >
          See All Posts
        </Link>
      </div>
    </div>
  );
}

export default Intro;
