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
      // {
      //   name:'Comece Aqui',
      //   link:'/comece-aqui'
      // },
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'demo.wp-api.org' or 'www.example-site.com'
         */
        baseUrl: `wda2014cms.wordpress.com`,
        // The protocol. This can be http or https.
        protocol: `https`,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: true,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on WordPress.com
        useACF: false,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/tags",
          "**/taxonomies",
        ],        
      },
    },
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
    'gatsby-plugin-sass',
  ],
}
