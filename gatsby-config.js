require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Web Dev Academy',
    author: 'Ruan Carvalho',
    description: 'Artigos e Tutoriais sobre Desenvolvimento Web',
    siteUrl: 'https://webdevacademy.com.br',
    disqus: 'webdevacademycombr',
    menuLinks: [
      {
        name:'Comece Aqui',
        link:'/comece-aqui'
      },
      {
        name:'Tutoriais',
        link:'/tutoriais'
      },
      {
        name:'Artigos',
        link:'/artigos'
      },
    ]
  },
  pathPrefix: '/webdevacademy',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Web Dev Academy`,
    //     short_name: `WDA`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/assets/wda-icon.png`,
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'webdevacademy',
        short_name: 'wda',
        start_url: '/',
        background_color: '#F2F2F2',
        theme_color: '#1D1D1D',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.jpg',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `webdevacademycombr`
      }
    },
  ],
}
