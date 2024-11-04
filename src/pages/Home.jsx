import React from 'react'
import Card from './Card'
import Card3 from './Card3'
import CarRental from './CarRental'
import Footer from '../Footer'
import Nav from './Nav'

const Home = () => {
  return (

<div className="h-auto w-full flex flex-col  bg-[#f6f7f9]">
<Nav></Nav>
<Card></Card>
{/* <Card2></Card2> */}
<Card3></Card3>
<CarRental></CarRental>
<Footer></Footer>
    </div>  
  )
}

export default Home