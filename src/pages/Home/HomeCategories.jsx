import React from 'react'
import Creative from './assets/IconCategories/iconCreative.png'
import Emotion from './assets/IconCategories/iconEmotion.png'
import FineMotor from './assets/IconCategories/iconFineMotor.png'
import GrossMotor from './assets/IconCategories/iconMotor.png'
import Language from './assets/IconCategories/iconCommunication.png'
import Musical from './assets/IconCategories/iconMusical.png'
import Social from './assets/IconCategories/iconSocial.png'

function HomeCategories() {
  return (
    <section className="container mx-auto my-8 ">
        <nav className="text-4xl font-bold mb-4 text-center">Categories</nav>
        <div className="grid grid-cols-1 sm:grid-cols-7 ">
            {/* <!-- Empty category boxes for now --> */}
            <div className="bg-white rounded-md">
              <img src={Creative} alt="creative" />
              <h3 className='text-center'>Creative</h3>
            </div>
            <div className="bg-white rounded-md">
              <img src={Emotion} alt="Emotion" />
              <h3 className='text-center'>Emotion</h3>
            </div>
            <div className="bg-white rounded-md">
              <img src={FineMotor} alt="Finemotor" />
              <h3 className='text-center'>Fine Motor</h3>
            </div>
            <div className="bg-white rounded-md">
              <img src={GrossMotor} alt="Grossmotor" />
              <h3 className='text-center'>Gross Motor</h3>
            </div>
            <div className="bg-white rounded-md">
              <img src={Language} alt="Language" />
              <h3 className='text-center'>Language</h3>
            </div>
            <div className="bg-white  rounded-md">
              <img src={Musical} alt="Musical" />
              <h3 className='text-center'>Musical</h3>
            </div>
            <div className="bg-white  rounded-md">
              <img src={Social} alt="Social" />
              <h3 className='text-center'>Social</h3>
            </div>
        </div>
    </section>
  )
}

export default HomeCategories