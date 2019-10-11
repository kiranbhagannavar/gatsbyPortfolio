import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import aboutStyles from "./scss/about.module.scss"

export const data = graphql`
    query {
        file(relativePath: { eq: "pages/images/kiran.jpg" }) {
            childImageSharp {
                fixed(width: 300, height: 300) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
    `

const aboutPage = ({ data }) => {

    return (
        <Layout>
            
            <div className={aboutStyles.contentFlex}>
                <div className={aboutStyles.content}>
                    <span className={aboutStyles.contentHeading}>
                        <p>about me</p>
                    </span>
                    <br />
                    <p>
                        Full stack developer focusing on writing clean, elegant and efficient code.
                    </p>
                    <p>
                    Had an oppurtunity to work on projects for <br />
                    <a href="https://www.belagavidistrictpolice.in" target="_blank">Belagavi District Police</a>, <a href="https://www.nadeep.com" target="_blank">Nadeep Metals</a>, <a href="https://www.bharatesh.in" target="_blank">Bharatesh Education Trust</a>.
                    </p>
                </div>
                <div className={aboutStyles.image}>
                    <Img className={aboutStyles.imgpic} fixed={data.file.childImageSharp.fixed} alt="Kiran" />
                </div> 
            </div>
        </Layout>
    )
}

export default aboutPage