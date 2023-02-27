import React from 'react'
import './about.css'
export default function About() {
  return (
    <div class="App1">
        
    <div class="contact">
      <div class="c-con">
        <span>
        <h1 class="contact-us">Contact Us</h1>
      </span>
      
    </div>
    </div>

    <div class="contact-flex">
      <div class="contact-det">
        <h1 class="det-fairy">Blog Spot</h1>
        <hr class="contact-hr"></hr>
        <span class="contact-span">
          <i class="ic fa-solid fa-map"></i>India
        </span>
        <br></br>
        <span class="contact-span">
          <i class="ic fa-solid fa-envelope"></i>blogspot@gmail.com
        </span>
        <br></br>
        <span class="contact-span">
          <i class="ic fa-solid fa-phone-flip"></i>+91 9123456789
        </span>
      </div>

        <form class="c-form">
          <h1 class="ask">Ask Your Queries</h1>
          <br></br>
          <input type="text" class="c-email" placeholder="Your Email"></input>
          <br></br>
          <input type="text" class="c-subject" placeholder="Subject"></input>
          <br></br>
          <textarea class="c-msg" placeholder="Message"></textarea>
          <br></br>
          <button class="c-btn">SEND MESSAGE</button>
        </form>
    </div>
  </div>
  )
}
