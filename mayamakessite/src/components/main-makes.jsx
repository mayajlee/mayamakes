import React from "react";

function MainMakes() {
  return (
    <>
        <h2>WHAT I MAKE</h2>
        <div className='make-boxes'>
          <div className='box'>
            <h3>SWE PROJECTS/WEBSITES</h3>
            <p>A place to showcase my learning and how I combine my interests with my love of code</p>
            <button className="swe">View My Work</button>
          </div>
          <div class="vl"></div>
          <div className='box'>
            <h3>FIBER ARTS</h3>
            <p>Come appriciate my art and eventual have the oppurtuniy to buy!</p>
            <button className="fa">View My Work</button>
          </div>
          <div class="vl"></div>
          <div className='box'>
            <h3>LITERATURE AND BLOGS</h3>
            <p>Where I'll soon immortalize my opinions, my journey and my aspirations</p>
            <button className="lit">View My Work</button>
          </div>
          </div>
    </>
  );
}

export default MainMakes;