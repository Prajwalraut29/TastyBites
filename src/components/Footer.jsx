import React from 'react'
import fot1 from '../data/delivery-truck.png'
import fot2 from '../data/phone-call.png'

const Footer = () => {
  return (
    <>
    <footer class="bg-white text-black py-4">
  <div class="container mx-auto flex flex-col items-center justify-center">
    <div class="flex flex-col items-center mb-4">
      <p class="text-xl font-bold">Contact Us</p>
      <div class="flex items-center mt-2">
      <img className='w-[3vw]' src={fot2} alt="" />
        <p class="ml-1">99999999</p>
      </div>
      <div class="flex items-center mt-1">
        <img className='w-[5vw]' src={fot1} alt="" />
        <p class="ml-1">tastyBites@gmail.com</p>
      </div>
    </div>
    <div class="mb-4">&copy; 2024 Your Food Order Website. All rights reserved.</div>
  </div>
</footer>

      

    </>
  )
}

export default Footer
