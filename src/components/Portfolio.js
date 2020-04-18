import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import PortfolioItem from './PortfolioItem.js'

function Portfolio() {
    return (
        <div>
            <Header />
            <div class="bbox container">
                <h1>Portfolio</h1>
            </div>
            <PortfolioItem 
                name="fun_game"
                img="assets/fun_game.png"
                p1="A Multiplayer Game Made with Socket.io"
                p2="Uses sockets to keep the same information on all players screens"
                p3="The game starts with a scavenger hunt, and the winning players can dare their friends to do embarrasing things"
                p4="We're not very good at naming things"
                repo="https://github.com/eschwelgin/BCE-Project2"
                live="https://fungame20.herokuapp.com/"
            />
            <PortfolioItem 
                name="Brewery Locator"
                img="assets/brewery.jpg"
                p1="An app that searches for local breweries"
                p2="Default search is GPS based, and allows you to cycle through breweries within 50 miles of your current location, moving from closest to furthest."
                p3="You may also search for breweries in a specific US city"
                repo="https://github.com/eschwelgin/Project-1"
                live="https://eschwelgin.github.io/Project-1/"
            />
            <PortfolioItem 
                name="Player"
                img="assets/player.jpg"
                p1="A client side YouTube clone"
                p2="The is no back end to player, it stores local files in an array, and uses HTML5 video"
                p3="If you wish to test player, you must provide your own video files. No files are provided in the repo"
                p4="Right now it only serves as a video/audio player with basic functionality such as a playlist, random song, next song, and play pause function. You may also click in the playlist on the right to select a song. Other features such as likes and comments are not implemented"
                repo="https://github.com/eschwelgin/player"
            />
            <PortfolioItem 
                name="JezzBall"
                img="assets/jezzball.jpg"
                p1="Remember Windows 95? This is a work in progress of everyone's favorite game"
                p2="Trap bouncing balls in the play area by creating walls and confining the balls to an ever-smaller area"
                p3="Be careful! if a ball hits your wall as it's being created, it will destroy the wall"
                p4="Unreleased"
            />
            <PortfolioItem 
                name="Password Generator"
                img="assets/password.jpg"
                p1="A password genereator made as a proof of concept"
                p2="Create psudo-random passowrds of a specified length, using specified character sets"
                p3="Always remember to keep your passwords on a post-it note near your computer for maximum security!"
                repo="https://github.com/eschwelgin/password-generator"
                live="https://eschwelgin.github.io/password-generator/"
            />
            <PortfolioItem 
                name="Quiz"
                img="assets/quiz1.jpg"
                p1="Javascript based Quiz"
                p2="The quiz uses a timer and records right and wrong answers"
                p3="The final score is a based on a combination of the time taken and number of correct answers"
                repo="https://github.com/eschwelgin/quiz"
                live="https://eschwelgin.github.io/quiz/index.html"
            />
            <PortfolioItem 
                name="Day Planner"
                img="assets/planner.jpg"
                p1="Day Planner"
                p2="The app stores tasks that it receives, persistant through page refreshes or browser shut downs."
                p3="It monitors the time of day, and highlights past, present and future."
                repo="https://github.com/eschwelgin/day-planner"
                live="https://eschwelgin.github.io/day-planner/"
            />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default Portfolio