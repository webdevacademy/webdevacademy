import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import toLower from "lodash/toLower"

export const SearchWidget = (props) => (
  <div className="widget widget_search">
    <div className="widget-content clear">
      {props.title &&
        <h3 className="widget-title">{ props.title }</h3>
      }
      <form role="search" method="get" className="search-form" action="">
        <label>
          <span className="screen-reader-text">Pesquisar por:</span>
          <input type="search" className="search-field" name="s" />
        </label>
        <input type="submit" className="search-submit" value="Pesquisar" />
      </form>
    </div>
  </div>
)

export const TagCloudWidget = (props) => (
  <StaticQuery
    query={graphql`
      query TagCloudQuery {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/posts/"}}
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <div className="widget widget_tag_cloud">
        <div className="widget-content clear">
          {props.title &&
            <h3 className="widget-title">{props.title}</h3>
          }
          <div className="tagcloud">
            {data.allMarkdownRemark.group.map(tag => (
              <Link to={`/tag/${toLower(tag.fieldValue)}`} className="tag-cloud-link" key={tag.fieldValue}>
                {tag.fieldValue}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )}
  />
)

export const TextWidget = (props) => (
  <div className="widget">
    <div className="widget-content clear">
      {props.title &&
        <h3 className="widget-title">{props.title}</h3>
      }
      <div className="textwidget">
        { props.children }
      </div>
    </div>
  </div>
)