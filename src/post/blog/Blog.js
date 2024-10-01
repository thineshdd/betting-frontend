import React, { useEffect, useState } from 'react';
// import '../../index.css';
import  LatestBlog from './LatestBlog';

import './blog.css';


function Blog() {


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
                    const limitedPosts = jsonresult.slice(0, 3); // Limit to 4 posts
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

            <div className="container-more-blog" id="more-blog-section">
                <div className="container-score">

                    <div className="column-score large">
                        <div className="blog-container">
                            <div className="header-bg-slide" id="morenews-bottom">
                                <div className="header-flex-home">
                                    <h3 className="text-slide">More News</h3>

                                </div>
                            </div>

                            <div className="moreblog-container">

                                {error && <p className="error-message">{error}</p>}

                                <ul className="mvp-main-blog-wrap">



                                    {posts.map((post) => {
                                        const category =
                                            post.categories && post.categories.length > 0
                                                ? post.categories[0]
                                                : { name: 'Unknown' };
                                        const categoryName = category.name;
                                        const categoryUrl = category.url;
                                        const imageUrl = post.featured_image_url || 'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2020/11/1.jpg';
                                        return (

                                            <li className="mvp-blog-story-wrap" key={post.id}>
                                                <div className="mvp-blog-story-row">

                                                    <div className="mvp-blog-story-image">

                                                        <div className="blog-story-img">
                                                            <img src={imageUrl} />
                                                        </div>

                                                    </div>

                                                    <div className=" mvp-blog-story-text ">

                                                        <div className="mvp-post-info-top">
                                                            <h5 className="blog-sub-text"> <span className="cat-heading">   <a
                                                                href={categoryUrl}
                                                                className="linkcat-btn"
                                                            >  {categoryName} </a></span>   <span className="slaph"> / </span>{post.date}</h5>
                                                        </div>
                                                        <div className="mvp-blog-story-info">
                                                            <div>
                                                                <a href={post.link} className="linkcat-btn" target="_blank" >
                                                                    <h2 className="blog-title-more">
                                                                        {post.title}</h2>   </a>
                                                            </div>
                                                            <div>
                                                                <p className="blog-para"> {post.content}</p>
                                                            </div>


                                                        </div>
                                                        <div className="blog-btn"><a href={post.link} className="linkbutton" target="_blank" >READ MORE</a></div>
                                                    </div>
                                                </div>
                                            </li>

                                        );
                                    })}



                                </ul>
                                <div className="blog-more-btn">
                                    <a href="/blog/">
                                        <button className="betnowbhn">
                                            Show More News <span className="svgspan"></span>
                                        </button>
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column-score small">

                        <div className="container-slide-main">
                            <div className="container-slide">

                                 
                              <LatestBlog/>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}

export default Blog