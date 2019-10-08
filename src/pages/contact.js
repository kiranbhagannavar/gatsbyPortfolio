import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const contactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact Page</h1>
            <p>My contact number is +91 8095845987</p>
            <p>You can even contact me from my <a href="https://www.facebook.com" target="_blank">facebook account</a></p>
            <Footer />
        </div>
    )
}

export default contactPage