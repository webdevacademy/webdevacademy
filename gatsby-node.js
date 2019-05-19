const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
            edges {
              node {
                id
                frontmatter {
                  slug
                  categories {
                    slug
                  }
                }
              }
            }
          }
        }
      `
    )
    .then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      const postTemplate = path.resolve("./src/templates/single.js")
      
      _.each(result.data.allMarkdownRemark.edges, edge => {
        createPage({
          path: `/${edge.node.frontmatter.categories[0].slug}/${edge.node.frontmatter.slug}/`,
          component: slash(postTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })

      const posts = result.data.allMarkdownRemark.edges;
      
      const tagTemplate = path.resolve("src/templates/tag.js");      
      let tags = [];      
      _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
          _.each(edge.node.frontmatter.tags, tag => {
            tags = tags.concat(tag.slug);            
          });
        }
      });
      
      tags = _.uniq(tags);

      tags.forEach(tag => {
        createPage({
          path: `/tag/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
            title: tag,
          },
        });
      });
    }) // end allMarkdownRemark for Posts

    .then(() => {
      graphql(
        `
        {
          allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/"}}) {
            edges {
              node {
                id
                frontmatter {
                  slug
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const pageTemplate = path.resolve("./src/templates/page.js")

        _.each(result.data.allMarkdownRemark.edges, edge => {        
          createPage({
            path: `/${edge.node.frontmatter.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })

        resolve()
      })
    }) // end allMarkdownRemark for Pages
  })
}
