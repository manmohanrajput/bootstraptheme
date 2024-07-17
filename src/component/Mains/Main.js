import React from 'react'
import Navbar from '../Navbar';
import Landing from '../Landing';
import Categories from '../Categories';
import Subscribe from '../Subscribe';
import Footer from '../Footer';


function Main() {
  return (
    <div>
        <Navbar/>
        <Landing />
        <Categories />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Main