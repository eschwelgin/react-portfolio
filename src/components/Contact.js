import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

function Contact() {
    return (
        <div>
            <Header />
            <div class="bbox">
                <h1>Contact</h1>
                    <form>
                        Name:<br/>
                        <input type="text" name="name" /><br/>
                        Email:<br/>
                        <input type="text" name="email" /><br/>
                        Message:<br/>
                        <textarea></textarea>
                        <button>Submit</button>
                    </form>
            </div>
            <Footer />
        </div>

    )
}

export default Contact