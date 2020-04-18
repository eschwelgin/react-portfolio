import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

function Home() {
    return (
        <div>
            <Header />
            <div className="bbox">
                <h1>About Me</h1>
                <img className="headshot" src="assets/prof.jpg" height="200" width="200" alt='Eric Schwelgin'/>
                <p>As a developer I like to tinker with code. It's not just a job for me, it's a hobby</p>
                <p>I push my own boundries with development. While still in my first web development boot camp, we had a project which required us to call several APIs and build an app around them, this ended up being our Brewery Locator.
                    I discovered early on that one of the APIs we selected didn't have quite the right functionality (Open Brewery Database), so I reached out to the developer on GitHub. He offered to write a new endpoint
                    for us, but I decided to try it myself. Writing a few new lines of code was easy, even though I had never touched Ruby or ROR before. I had good sample code to referance, and google and StackOverflow on hand. 
                    Setting up the development environment took more time than I expected, and the instructions for importing the database failed. It took more hours than I signed up for, but in the end I wrote the by_postal
                    endpoint and pushed the changes into production. We used the endpoint that I had written in our project, which we could now write exactly as we wanted to. </p>
                <p>I love to code because each bit is a new challenge, with a new answer, that pushes you further into the depth of knowledge.</p>
                <a href="https://github.com/eschwelgin"><button>GitHub</button></a>
                <a href="https://www.linkedin.com/in/eric-schwelgin-0356a848/"><button>LinkedIn</button></a>
                <a href="assets/res.pdf"><button>Resume</button></a>
            </div>
            <Footer />
        </div>
    )
}

export default Home