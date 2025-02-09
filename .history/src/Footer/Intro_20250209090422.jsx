import React, { useEffect, useState } from 'react';
import { createClient } from "contentful";
import { Link } from 'react-router-dom';import './Blog.css';
import newsArray from '../NewsPage/data';




function Intro() {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({
    space: "qunwc6g5m6w5",
    accessToken: "Azaa182oze0yq57l6c5uN2icH-6AdRo4ivlBp4Fdnd4"
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries();
        setBlogPosts(entries.items); // Setting the posts to the state
        console.log(entries.items);   // Logging the fetched posts to the console
      } catch (error) {
        console.log(`Error fetching blog posts: ${error}`);
      }
    };
    getAllEntries();
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <h1 className="content-subhead">Web Dev Blog</h1>

            {blogPosts?.map((post) => (
  <section className="post" key={post.sys.id}>
    <header className="post-header">
      {/* Cover Image Rendering */}
      {post.fields.coverImage?.fields?.file?.url && (
        <img
          src={post.fields.coverImage.fields.file.url}
          alt={post.fields.blogTitle || "Cover Image"}
          title={post.fields.blogTitle || ""}
          width="578"
          height="291"
        />
      )}

      {/* Blog Image Rendering */}
      {post.fields.blogImage?.[0]?.fields?.file?.url && (
        <img
          src={post.fields.blogImage[0].fields.file.url}
          alt={post.fields.blogTitle || "Blog Image"}
          title={post.fields.blogTitle || ""}
          width="578"
          height="291"
          className="mt-3"
        />
      )}

      <h2 className="post-title pt-3">{post.fields.blogTitle}</h2>
      <p className="post-meta">
        By <span className="post-author">{post.fields.blogAuthor}</span>
        <small>
          {post.fields.createdDate && new Intl.DateTimeFormat('en-GB', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
          }).format(new Date(post.fields.createdDate))}
        </small>
      </p>
    </header>
    
    <div className="post-description">
      <p>{post.fields.blogSummary}</p>
      <p>{post.fields.blogContent}</p>
      <Link
        to={`/blogDetails/${post.sys.id}`}
        className="button button1"
      >
        Read More
      </Link>
    </div>
  </section>
))}

          </div>

          <div className="footer">
            <div className="pure-menu pure-menu-horizontal">
              <div className="pure-menu-item">
                <a href="http://twitter.com/thecodeangle" className="pure-menu-link">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Intro;
