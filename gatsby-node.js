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
          allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}, sort: {order: ASC, fields: frontmatter___date}) {
            edges {
              node {
                id
                frontmatter {
                  title
                  slug
                  categories
                  tags
                  video
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
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach(({ node }, index) => {
        createPage({
          path: `/${_.toLower(node.frontmatter.categories[0])}/${node.frontmatter.slug}/`,
          component: slash(postTemplate),
          context: {
            id: node.id, 
            slug: node.frontmatter.slug,
            prev: index === 0 ? null : posts[index - 1],
            next: index === result.length - 1 ? null : posts[index + 1],
          },
        })
      })

      const categoryTemplate = path.resolve('src/templates/category.js');
      let categories = [];
      _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.categories')) {    
          categories = categories.concat(edge.node.frontmatter.categories);
        } else {
          categories = categories.concat('Default');
        }
      });

      categories = _.uniq(categories);

      categories.forEach(category => {
        createPage({
          path: `/${_.toLower(category)}/`,
          component: categoryTemplate,
          context: {
            category,
          },
        });
      });
      
      const tagTemplate = path.resolve('src/templates/tag.js');      
      let tags = [];      
      _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
          tags = tags.concat(edge.node.frontmatter.tags);            
        } else {
          tags = tags.concat('Default');      
        }
      });
      
      tags = _.uniq(tags);

      tags.forEach(tag => {
        createPage({
          path: `/tag/${_.toLower(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
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
