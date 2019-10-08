module.exports = {
  siteMetadata: {
    title: `My Blog`,
    siteUrl: `https://www.github.com/kiranbhagannavar`,
    author: `Kiran Bhagannavar`,
    description: `Hello from Kiran.`,
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options : {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
