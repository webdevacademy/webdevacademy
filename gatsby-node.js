const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {

    graphql(`{
      allWordpressPost {
        edges {
          node {
            id
            title
            slug
            categories {
              slug
            }
            tags {
              slug
            }
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            name
            slug
          }
        }
      }
      allWordpressTag {
        edges {
          node {
            name
            slug
          }
        }
      }
    }`).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      /**
       * Create all Posts
       */
      const postTemplate = path.resolve("./src/templates/single.js")
      const posts = result.data.allWordpressPost.edges

      posts.forEach(({ node }, index) => {
        createPage({
          path: `/${_.toLower(node.categories[0].slug)}/${node.slug}/`,
          component: slash(postTemplate),
          context: {
            id: node.id,
            slug: node.slug,
            prev: index === 0 ? null : posts[index - 1],
            next: index === result.length - 1 ? null : posts[index + 1],
          },
        })
      })

      /**
       * Create Categories Pages
       */
      const categoryTemplate = path.resolve('src/templates/category.js');
      const categories = result.data.allWordpressCategory.edges;

      categories.forEach(({ node }, index) => {
        createPage({
          path: `/${node.slug}/`,
          component: slash(categoryTemplate),
          context: {
            category: node.name,
            slug: node.slug,
          },
        })
      })

      /**
       * Create Tags Pages
       */
      const tagTemplate = path.resolve('src/templates/tag.js');
      const tags = result.data.allWordpressTag.edges;

      tags.forEach(({ node }, index) => {
        createPage({
          path: `/tag/${node.slug}/`,
          component: slash(tagTemplate),
          context: {
            tag: node.name,
            slug: node.slug,
          },
        })
      })

    }) // end Posts query
    .then(() => {

      graphql(`{
        allWordpressPage {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }`)
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pageTemplate = path.resolve("./src/templates/page.js")

        _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })

        resolve()
      }) // end allWordpressPage for Pages
    
    }) 
    
  }) // end Promise  
} // end createPages
