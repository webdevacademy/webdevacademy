import React from 'react'
import { Link } from 'gatsby';
const PostsNavigation = (props) => {
  const { prev, next } = props

  if (prev) {
    prev.url = `/${prev.frontmatter.categories[0].slug}/${prev.frontmatter.slug}/`
  }

  if (next) {
    next.url = `/${next.frontmatter.categories[0].slug}/${next.frontmatter.slug}/`
  }

  console.log('---- PostsNavigation', props)

  return (
    <nav className="navigation post-navigation post-content clear" role="navigation">
      <h2 className="screen-reader-text">Navegação de Posts</h2>
      <div className="nav-links">
        {prev && 
          <div className="nav-previous">          
              <Link to={prev.url} rel="prev">
              {prev.frontmatter.title}
            </Link>
          </div>
        }
        {next &&
          <div className="nav-next">
            <Link to={next.url} rel="next">
              {next.frontmatter.title}
            </Link>
          </div>        
        }
      </div>
    </nav>
  )
}

export default PostsNavigation;