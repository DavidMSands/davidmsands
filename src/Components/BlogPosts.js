import React from 'react'

function BlogPosts({title, image, link, date}) {
  return (
    <div>
        <a href={link}><img src={image}></img></a>
        <h2>{title}</h2>
        <p>{date.substring(0,10)}</p>
    </div>
  )
}

export default BlogPosts