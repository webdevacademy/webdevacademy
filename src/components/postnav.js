import React from 'react'
import { Link } from 'gatsby';
import toLower from "lodash/toLower"

const PostsNavigation = (props) => {
  const { prev, next } = props

  if (prev) {
    prev.url = `/${toLower(prev.frontmatter.categories[0])}/${prev.frontmatter.slug}/`
  }

  if (next) {
    next.url = `/${toLower(next.frontmatter.categories[0])}/${next.frontmatter.slug}/`
  }
  
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