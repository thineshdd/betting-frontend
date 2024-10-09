import React, { useEffect, useState } from 'react';
import ConfigUrl from './ConfigUrl';


function LatestBlog() {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(
                        `${ConfigUrl.API_BASE_URL}/blog/wp-json/custom/v2/blog`
                );
                const jsonresult = await response.json();

                if (response.ok) {
                    const limitedPosts = jsonresult.slice(0, 10); // Limit to 4 posts
                    setPosts(limitedPosts); 
                
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
            <div className="match">
                <div className="match-header">

                    <div className="match-tournament"> Recent  Blog</div>
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="Recent-content-main">
                    {posts.map((post) => {
                                  const category =
                                  post.categories && post.categories.length > 0
                                    ? post.categories[0]
                                    : { name: 'Unknown' };
                                const categoryName = category.name;
                                const categoryUrl = category.url;
                                const imageUrl = post.featured_image_url || 'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2020/11/1.jpg';
                                return (
                        <div className="blog-row-main"  key={post.id}>
                            <div className="blog-row">
                                <div className="blog-row-image">
                                    <img     src={imageUrl} className="blog-images-top" />
                                </div>
                                <div className="blog-row-content">

                                    <h3 className="blog-sub-text mb">  <a href={post.link}  target="_blank">  {categoryName} </a>   </h3>
                                    <h2 className="blog-sub-title">  <a href={post.link} className="linkcat-btn"  target="_blank" > 
                                {post.title}
                              </a> </h2>

                                </div>
                            </div>
                        </div>
                          );
                    })}
                  



                </div>
            </div>


        </>
    );
}

export default LatestBlog;