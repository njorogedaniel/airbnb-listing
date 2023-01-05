import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import data from "./data"

export default function App() {
  
  const cards = data.map(item => {
    return (
            
              <Contact 
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  phone={item.phone}
                  email={item.email}
                  openSpots = {item.openSpots}
                  />
           
    )
  })
  return(
    <div className='container'>
      <Navbar/>
      <div className='contacts'>
        {cards}
      </div>
        </div>

  )
}

  

 

    
    // 
        
          /* <Contact 
              img="./images/1.jpg"
              name="Mr. Whiskerson"
              phone="(212) 555-1234"
              email="mr.whiskaz@catnap.meow"
            />
          <Contact 
              img="./images/2.jpg"
              name="Fluffykins"
              phone="(212) 555-2345"
              email="fluff@me.com"
          />
          <Contact 
            img="./images/3.jpg"
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
          />
          <Contact 
            img="./images/4.jpg"
            name="Pumpkin"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.com"
            age="23"
          /> */
          
    // </div>

