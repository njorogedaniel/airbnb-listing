import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contact from './components/Property'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import data from "./data"
import Property from './components/Property'



export default function App() {
  
  const cards = data.map(item => {
    return (
            
              <Property 
                  key={item.id}
                  item={item}    //Passing data to the Property component by declaring item explicitly or using 
                  //the spread operator ie {...item} or as shown below
                  
                  // img={item.img}
                  // name={item.name}
                  // phone={item.phone}
                  // email={item.email}
                  // openSpots = {item.openSpots}
                  />
                  
    )
  })
  return(
    <div>
        <Navbar/>
        <Hero />
          <div className='properties'>
            {cards}
          </div>
        <Footer />
    </div>
  )
}

  



