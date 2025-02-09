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
        // Sort posts by created date (assuming it's a valid date field) and limit to 3
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
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Latest Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div className="card rounded-lg shadow-lg overflow-hidden" key={post.sys.id}>
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
              <p className="text-gray-600 mb-4">
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
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intro;
