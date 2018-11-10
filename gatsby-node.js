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
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
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

      // Create Page pages.
      const pageTemplate = path.resolve("./src/templates/page.js")
      // We want to create a detailed page for each
      // page node. We'll just use the WordPress Slug for the slug.
      // The Page ID is prefixed with 'PAGE_'
      _.each(result.data.allWordpressPage.edges, edge => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/${edge.node.slug}/`,
          component: slash(pageTemplate),
          context: {
            id: edge.node.id,
          },
        })
      })
    }) // end allWordpressPage

    .then(() => {
      graphql(
        `
          {
            allWordpressPost {
              edges {
                node {
                  id
                  slug
                  status
                  template
                  format
                  categories {
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
        const postTemplate = path.resolve("./src/templates/single.js")
        // We want to create a detailed page for each
        // post node. We'll just use the WordPress Slug for the slug.
        // The Post ID is prefixed with 'POST_'
        _.each(result.data.allWordpressPost.edges, edge => {
          createPage({
            path: `/${edge.node.categories[0].slug}/${edge.node.slug}/`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
        resolve()
      })
    }) // end allWordpressPost
  })
}
