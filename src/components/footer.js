import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
    const data =useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer>
            <p className={footerStyles.footerContent}>
                Created by <a href="https://www.github.com/kiranbhagannavar" target="_blank">{data.site.siteMetadata.author}</a> | Powered by <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>
            </p>
        </footer>
    )
}

export default Footer