import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const aboutPage = () => {
    return (
        <div>
            <Header />
            <h1>this is about me</h1>
            <p>Hey this is kiran. I'm a full stack developer from Bangalore.</p>
            <p>If you need to contact me then head to <Link to="/contact">click here</Link></p>
            <Footer />
        </div>
    )
}

export default aboutPage