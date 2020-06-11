import React from 'react'
import { Link } from 'gatsby'

/**
 * This template is used in a Loop to display content as cards
 * 
 * @param {*} props 
 */
const Content = (props) => {
  const content = props.data

  const thumbnail = content.jetpack_featured_media_url || 'https://res.cloudinary.com/webdevacademy/image/upload/v1556582305/featured/wda-placeholder.jpg'
  const category = content.categories[0] || { name: '', slug: '' }
  const url = `/${category.slug}/${content.slug}`
  
  return (
    <div className="post-container post-loaded fade-in">
      <article className="post has-post-thumbnail hentry clear">
        <div className="featured-media">
          <Link to={url} rel="bookmark">
            <img src={thumbnail} alt={content.title} />
          </Link>
        </div>
        <header className="post-header">
          <h1 className="post-title entry-title">
            <Link to={url} rel="bookmark"
              dangerouslySetInnerHTML={{ __html: content.title }} />
          </h1>
        </header>
        <div className="post-meta clear">
          <Link to={`/${category.slug}`} rel="bookmark" className="post-date" >
            <i className="fa fa-folder"></i>{category.name}
          </Link>          
        </div>
      </article>
    </div>
  )
}

export default Content
