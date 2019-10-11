module.exports = {
  siteMetadata: {
    title: `Bhagannavar`,
    siteUrl: `https://www.github.com/kiranbhagannavar`,
    author: `Kiran Bhagannavar`,
    description: `Personal Blog`,
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options : {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
