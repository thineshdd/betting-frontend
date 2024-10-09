import React, { useEffect, useState } from 'react';

function HomeBlog() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch('https://bettingpremier.ewallhost.com/blog/wp-json/custom/v3/league/blog');
                const jsonresult = await response.json();

                if (response.ok) {
                    setPosts(jsonresult);
                } else {
                    setError('Failed to fetch posts'); 
                    console.log('Error:', jsonresult);
                }
            } catch (err) {
                setError('An error occurred while fetching data'); 
                console.error('Error:', err);
            }
        };

        fetchPost();
    }, []);

    // Check if posts array has at least 3 items
    const firstPost = posts[0];
    const remainingPosts = posts.slice(1, 3); // Grabbing the next two posts

    return (
        <>
            {error && <p className="error-message">{error}</p>}
            <div className="recent-post-main">
                {/* Display the first blog post */}
                {firstPost && (
                    <div className="recent-post-container" key={firstPost.id}>
                        <div className="recent-post-image-blog">
                            <img src={firstPost.featured_image_url || 'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2020/11/1.jpg'} className="recent-blog-image" alt={firstPost.title} />
                        </div>
                        <div className="recent-post-content-overlay">
                            <div className="recent-post-content">
                                <a href={firstPost.link} className="linkcat-btn" target="_blank" rel="noopener noreferrer">
                                    <h1 className="recent-blog-tile">{firstPost.title}</h1>
                                </a>
                                <p className="recent-blog-para">{firstPost.content}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Display the second and third blog posts */}
                <div className="home-post-container">
                    <div className="home-post-row">
                        {remainingPosts.map((post) => (
                            <div className="home-post-row-list" key={post.id}>
                                <div className="recent-post-second-main">
                                    <div className="recent-home-second-content">
                                        <div className="recent-post-image">
                                            <img src={post.featured_image_url || 'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2020/11/1.jpg'} className="recent-blog-image" alt={post.title} />
                                        </div>
                                        <div className="home-blog-content">
                                            <h1 className="second-blog-tile">
                                                <a href={post.link} className="linkcat-btn" target="_blank" rel="noopener noreferrer">
                                                    {post.title}
                                                </a>
                                            </h1>
                                            <p className="para-about">{post.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeBlog;
