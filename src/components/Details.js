import React from 'react'

export default function Details() {
    return(
        <div  className='card-details'>
            <div className='card-header'>    
                <div className='personal-details'>
                    <h2>Laura Smith</h2>
                    <h5>Frontend Developer</h5>
                    <p>laurasmith.website</p>
                </div>     
                <div className='button'>
                    <button className='email'><i class="fa-solid fa-envelope"></i>Email</button>
                    <button className='linkedln'><i class="fa-brands fa-linkedin"></i>Linkedln</button>
                </div>
            </div>   
            <div className='about'>
                <h3>About:</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                    I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="Interests">
            <h3>Interests:</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture
                     ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}