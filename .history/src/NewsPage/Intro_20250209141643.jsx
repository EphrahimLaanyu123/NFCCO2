import React, { useEffect, useState, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { createClient } from 'contentful'; 
import Background from '../assets/AboutPage/_KGP6014.JPG';
import "./Intro.css";

export default function Intro() {
  const [latestArticle, setLatestArticle] = useState(null);
  const [otherArticles, setOtherArticles] = useState([]);

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['vh', '150vh']);

  // Fetch articles using Contentful API
  useEffect(() => {
    const client = createClient({
      space: 'qunwc6g5m6w5',
      accessToken: 'Azaa182oze0yq57l6c5uN2icH-6AdRo4ivlBp4Fdnd4',
    });

    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries();
        const sortedPosts = entries.items
          .filter(post => post.fields.createdDate)
          .sort((a, b) => new Date(b.fields.createdDate) - new Date(a.fields.createdDate));

        // Set latest article and other articles
        setLatestArticle(sortedPosts[0]);
        setOtherArticles(sortedPosts.slice(1, 4)); // Get next 3 articles
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div className="h-screen overflow-hidden relative" ref={container}>
      <motion.div style={{ y }} className="custom-motion-container full-height relative-container">
        <div className="custom-about-us-container">

          {/* Latest Article Section */}
          {latestArticle && (
            <section className="custom-latest-article article-section">
              <h2 className="custom-section-title-latest">Latest Article</h2>
              <div className="custom-article-card-latest">
                <div className="custom-article-content article-content">
                  <h3 className="custom-article-title-latest">{latestArticle.fields.blogTitle}</h3>
                  <p className="custom-article-date">{new Date(latestArticle.fields.createdDate).toLocaleDateString()}</p>
                  <p className="custom-article-summary">{latestArticle.fields.blogSummary?.slice(0, 150)}...</p>
                </div>
                {latestArticle.fields.coverImage?.fields?.file?.url && (
                  <img
                    src={latestArticle.fields.coverImage.fields.file.url}
                    alt={latestArticle.fields.blogTitle || 'Cover Image'}
                    className="custom-article-img-latest article-img"
                  />
                )}
              </div>
            </section>
          )}

          {/* Other Latest Articles Section */}
          {otherArticles.length > 0 && (
            <section className="custom-other-articles article-section">
              <h2 className="custom-section-title">Other Latest Articles</h2>
              <div className="custom-articles-container">
                {otherArticles.map((article) => (
                  <div key={article.sys.id} className="custom-article-card-other">
                    <div className="custom-article-content article-content">
                      <h3 className="custom-article-title">{article.fields.blogTitle}</h3>
                      <p className="custom-article-date">{new Date(article.fields.createdDate).toLocaleDateString()}</p>
                      <p className="custom-article-summary">{article.fields.blogSummary?.slice(0, 100)}...</p>
                    </div>
                    {article.fields.coverImage?.fields?.file?.url && (
                      <img
                        src={article.fields.coverImage.fields.file.url}
                        alt={article.fields.blogTitle || 'Cover Image'}
                        className="custom-article-img-other article-img"
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </motion.div>
    </div>
  );
}
