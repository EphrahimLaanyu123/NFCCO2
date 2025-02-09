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

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

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
    <div className="news-main h-screen overflow-hidden relative" ref={container}>
      <motion.div style={{ y }} className="relative h-full">
        <div className="about-us-page">

          {/* Latest Article Section */}
          {latestArticle && (
            <section className="latest-article my-10 md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Latest Article</h2>
              <div className="article-card">
                {latestArticle.fields.coverImage?.fields?.file?.url && (
                  <img
                    src={latestArticle.fields.coverImage.fields.file.url}
                    alt={latestArticle.fields.blogTitle || 'Cover Image'}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-bold">{latestArticle.fields.blogTitle}</h3>
                  <p className="text-sm text-gray-700">{new Date(latestArticle.fields.createdDate).toLocaleDateString()}</p>
                  <p>{latestArticle.fields.blogSummary?.slice(0, 150)}...</p>
                </div>
              </div>
            </section>
          )}

          {/* Other Latest Articles Section */}
          {otherArticles.length > 0 && (
            <section className="other-articles my-10 md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Other Latest Articles</h2>
              <div className="flex flex-wrap gap-6">
                {otherArticles.map((article) => (
                  <div key={article.sys.id} className="article-card w-full md:w-1/3">
                    {article.fields.coverImage?.fields?.file?.url && (
                      <img
                        src={article.fields.coverImage.fields.file.url}
                        alt={article.fields.blogTitle || 'Cover Image'}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="text-xl font-bold">{article.fields.blogTitle}</h3>
                      <p className="text-sm text-gray-700">{new Date(article.fields.createdDate).toLocaleDateString()}</p>
                      <p>{article.fields.blogSummary?.slice(0, 100)}...</p>
                    </div>
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
