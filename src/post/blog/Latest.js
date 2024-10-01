import React, { useEffect, useState } from 'react';
import './blog.css';
import '../../index.css';

function Latest() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          'https://bettingpremier.ewallhost.com/blog/wp-json/custom/v1/posts'
        );
        const jsonresult = await response.json();

        if (response.ok) {
          setPosts(jsonresult); // Update state with fetched posts
          // console.log(jsonresult);
        } else {
          setError('Failed to fetch posts'); // Handle unsuccessful response
          console.log('Error:', jsonresult);
        }
      } catch (err) {
        setError('An error occurred while fetching data'); // Catch and handle network or other errors
        console.error('Error:', err);
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      <div className="container-betting-tools">
        <div className="header-bg-slide">
          <h3 className="text-slide">League News</h3>
        </div>

        <div className="slider-container-card">
          {error && <p className="error-message">{error}</p>}
          <div className="recent-post-second-container">
            <div className="slider-container-blog">
              <div className="slider-blog" id="posts-container">
                {posts.map((post) => {
                  // Safely access category data if available
                  const category =
                    post.categories && post.categories.length > 0
                      ? post.categories[0]
                      : { name: 'Unknown' };
                  const categoryName = category.name;
                  const categoryUrl = category.url;
                  const imageUrl = post.featured_image_url || 'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2020/11/1.jpg';
                  return (
                    <div className="slide-blog" key={post.id}>
                      <div className="recent-post-second-main">
                        <div className="recent-post-second-content">
                        <div className="recent-post-image">
                          <img
                            src={imageUrl}
                            className="recent-blog-image"
                            alt="Blog"
                          />
                          </div>
                          <div className="slider-content">
                            <h5 className="blog-sub-text">
                              <a
                                href={categoryUrl}
                                className="linkcat-btn"
                              >
                                <span className="cat-btn">{categoryName}</span>
                              </a>
                              <span className="slaph"> / </span>{post.date}
                            </h5>
                            <h1 className="second-blog-tile">
                              <a href={post.link} className="linkcat-btn">
                                {post.title}
                              </a>
                            </h1>
                            <p className="para-about">{post.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Latest;
