import React from 'react'
import GetBooks from '../Products/FetchProduct'
import ViewBooks from '../Products/ViewProducts'

const Hero = () => {
    return (
        <>
        <div className="hero py-15">
        <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2 dart">
            <h6><em><b>Are you Hungry?</b></em></h6>
            <h1 className="text-3xl md:text-6xl font-bold">Don't wait !</h1>
            <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">Order Now</button>
        </div>
        <div className="w-1/2">

        <img className="w-4/5" src="/pizza.png" alt="pizza" />
        </div>

        </div>

        </div>
        <div className="pb-24">
        <GetBooks />
        </div>
        </>
   
)

}

export default Hero