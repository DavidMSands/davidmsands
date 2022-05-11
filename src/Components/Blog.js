import React, {useEffect, useState} from 'react'
import BlogPosts from './BlogPosts'

function Blog() {
const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@davidmaxsands')
        .then(res => res.json())
        .then(blogs => setBlogs(blogs.items.slice(0,4)))
    }, [])
    
  return (
    <div id='blogs-container'>
        <h3>Recent Blog Posts</h3>
        <div id='blog-posts'>
            {blogs.map(blog => (
                <BlogPosts
                   title={blog.title}
                   description={blog.description}
                   image={blog.thumbnail}
                   date={blog.pubDate}
                   link={blog.link}
                />
            ))}
        </div>
    </div>
  )
}

export default Blog