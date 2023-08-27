import React from 'react'
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
        <div className='about'>
            <h2>Ignite Education</h2>
           </div>
        <div className= 'What-we-do'>
          <div className='box'>
            <h3>STEM Education</h3>
              <p> Immerse yourself in STEM fields with opportunities through our programs</p>
              <a href="Programs Page"> Read More </a>
          </div>

          <div className = 'box'>
            <h3>Humanities</h3>
              <p>Learn, create, and express yourself through Ignite's Debate and English Programs</p>
              <a href="Programs Page"> Read More </a>
          </div>
        
          <div className = 'box'>
            <h3>Seminars</h3>
              <p>Get advice from field professionals and explore your potential interests</p>
              <a href="Programs Page"> Read More </a>
          </div>

          <div className = 'box'>
            <h3>Seminars</h3>
              <p>Volunteer or become part of a passionate team of highschool organizations</p>
              <a href="Programs Page"> Read More </a>  
          </div>
            
            
      
        </div>
        </div>
  )
}

export default Home

