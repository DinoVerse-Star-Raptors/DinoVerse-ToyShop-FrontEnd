import React from 'react'
import ShopByAge from './assets/images/Shopbyagepic.jpg'
import ZeroToSix from './assets/images/0-6M-circle.png'
import SixMonths from './assets/images/6M-circle.png'
import TwelveMonths from './assets/images/12M-circle.png'
import EighteenMonths from './assets/images/18M-circle.png'
import TwoYears from './assets/images/2yrs-circle.png'
import FiveYears from './assets/images/5yrs-circle.png'

function HomeShopbyage() {
  return (
    <section className="flex flex-col gap-10">
        <div className="">
            <img src={ShopByAge} alt="Kids Image" className="rounded-md shadow-lg"/>
        </div>
        <h2 className="text-4xl font-bold  text-center">Shop by Age</h2>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 m-5">
            <div className="flex flex-col justify-center items-center">
              <img src={ZeroToSix} alt="0-6m" className=''/>
              <h3>0-6M</h3>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <img src={SixMonths} alt="6m" className='' />
              <h3>6M+</h3>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <img src={TwelveMonths} alt="12m" className='' />
              <h3>12M+</h3>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <img src={EighteenMonths} alt="18M" className='' />
              <h3>18M+</h3>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <img src={TwoYears} alt="2Y" className=' rounded-full' />
              <h3>2Yrs+</h3>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <img src={FiveYears} alt="5Y" className='rounded-full'/>
              <h3>5Yrs+</h3>
            </div>
        </div>
    </section>
  )
}

export default HomeShopbyage