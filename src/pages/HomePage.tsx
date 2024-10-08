import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <section>
        This is the landing pages

        <section className="flex flex-col justify-center items-center mx-auto h-screen w-3/4">
        <div className="py-4">
            <h2 className="font-bold text-2xl">Parking</h2>
        </div>
     <form action="" method="post" className="flex flex-col gap-3 border p-4  shadow-2xl w-[30vw] h-[30vh]">
        <label htmlFor="" className="underline py-3">Location</label>
        <input type="text" name="" id="" placeholder="Enter your location" className="border p-3  "/>
        <button type="button" className="border font-bold bg-orange-700 text-white p-3 ">Submit</button>
      
      </form>
     </section>
      </section>
    </div>
  )
}

export default HomePage
