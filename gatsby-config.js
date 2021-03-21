module.exports = {
  siteMetadata: {
    title: `Nick Kress Developer`,
    siteUrl: `https://nkress.dev`,
    description: `Personal site of Nick Kress`,
  },
  //pathPrefix: "/personal-site",
//   proxy: {
//     prefix: "/api",
//     url: "http://examplesite.com/api/",
//   },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'Nick Kress Developer',
          short_name: 'nkress',
          start_url: '/',
          background_color: '#f7f0eb',
          theme_color: '#a2466c',
          display: 'standalone',
          icon: './src/images/logo192.png',      
        }
    },
  ]
};
