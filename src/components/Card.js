import React from 'react'
import Info from './Info.js'
import Details from './Details.js'
import Footer from './Footer.js'

export default function Card() {
    return(
        <div className="card">
            <Info />
            <Details />
            <Footer />
        </div>
    )
}