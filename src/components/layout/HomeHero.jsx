import React from 'react'
import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section className="flex">
      <div className="flex flex-col gap-8">
        <h1>Play, Learn Enjoy & Repeat</h1>
        <h3>Find your best toys for your children. <br />We deliver best of age appropriate toys to your door</h3>
        <div className=" bg-blue-500"><Link to="#" className=" bg-white">Get Your Toy</Link></div>
      </div>
    </section>
  )
}

export default HomeHero