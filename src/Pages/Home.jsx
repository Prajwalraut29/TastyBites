import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import Card from '../components/Card'
import ItemsCard from '../components/ItemsCard'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <CategoryMenu/>
      <ItemsCard/>
      <Cart/>
    </div>
  )
}

export default Home
