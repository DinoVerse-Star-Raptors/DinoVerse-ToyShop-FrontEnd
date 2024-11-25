import React from "react";
// import uiStyle from "./About.module.css";
import ZeroToSix from "./assets/0-6M-circle.png"
import SixMonths from "./assets/6M-circle.png"
import TwelveMonths from "./assets/12M-circle.png"
import EighteenMonths from "./assets/18M-circle.png"
import TwoYears from "./assets/2yrs-circle.png"
import FiveYears from "./assets/5yrs-circle.png"
import { Link } from "react-router-dom";
import aboutbanner from "./assets/aboutbanner.jpg"
import AboutStyle from "./About.module.css"
import Footer from "../../components/layout/SimpleFooter"

const About = () => {
  return (
  <div>
        <section className={AboutStyle.About}>
            <img src={aboutbanner} alt="aboutbanner" />
        </section>
    
        <section className="flex flex-col gap-10">
        
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
        {/* บทความ */}
        <section>

        </section>
        <Footer />
  </div>
  );
};

export default About;
