import React from 'react'
import { Link } from 'gatsby'

/**
 * This template is used in a Loop to display content as cards
 * 
 * @param {*} props 
 */
const Content = (props) => {
  const content = props.data
  const thumbnail = content.frontmatter.featured_media || ''
  const url = `${content.frontmatter.path}`
  const category = content.frontmatter.categories[0] || ''

  console.log(props);
  
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
              dangerouslySetInnerHTML={{ __html: content.frontmatter.title }} />
          </h1>
        </header>
        <div className="post-meta clear">
          <Link to={url} rel="bookmark" className="post-date" >
            <i className="fa fa-folder"></i>{category}
          </Link>          
        </div>
      </article>
    </div>
  )
}

export default Content
