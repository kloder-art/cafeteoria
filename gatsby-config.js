module.exports = {
  pathPrefix: '/cafeteoria',
  siteMetadata: {
    title: 'Cafeteoría',
    description: 'Ya alguien nos había hablado de todo esto',
    author: '@jlopezcur',
    // siteUrl: 'https://www.cafeteoria.es',
  },
  plugins: [
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Abel',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/data/articles/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-embedder'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Cafetoría',
        short_name: 'Cafetoría',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0c80a5',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'UA-47318809-3',
    //     head: false,
    //     anonymize: true,
    //     respectDNT: true,
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: 'cafeteoria.es',
    //   },
    // },
  ],
};
