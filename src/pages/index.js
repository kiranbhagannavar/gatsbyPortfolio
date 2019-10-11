import React from "react"
import { Link } from 'gatsby'
import Particles from 'react-particles-js';

import Layout from "../components/layout"
import indexStyles from "./scss/index.module.scss"

const IndexPage = () => {
    return (
        // <div className={indexStyles.bgEffect}>
            <Layout>
                <Particles className={indexStyles.particle}
                    params={{
                        "particles": {
                            "number": {
                                "value": 100
                            },
                            "size": {
                                "value": 3
                            },
                            "line_linked": {
                                "shadow": {
                                    "enable": true,
                                    "color": "#00bbff",
                                    "blur": 9 
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} 
                />

                <h2 className={indexStyles.intro}>Hi, I'm <span className={indexStyles.myName}>Kiran Bhagannavar</span> A Full-stack Web Developer from Bengaluru, India. </h2>
            </Layout>
        // </div>
    )
}

export default IndexPage