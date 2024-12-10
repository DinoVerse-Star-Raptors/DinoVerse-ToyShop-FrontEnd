import React from "react";
import uiStyle from "./About.module.css";
import ZeroToSix from "./assets/0-6M-circle.png";
import SixMonths from "./assets/6M-circle.png";
import TwelveMonths from "./assets/12M-circle.png";
import EighteenMonths from "./assets/18M-circle.png";
import TwoYears from "./assets/2yrs-circle.png";
import FiveYears from "./assets/5yrs-circle.png";
import aboutbanner from "./assets/aboutbanner.png";
import Footer from "../../components/layout/Footer";
import FactorForChild from "../../components/layout/FactorsForChild";

const About = () => {
  return (
    <div>
      <section className={uiStyle.about}>
        <img src={aboutbanner} alt="aboutbanner" />
      </section>
      <h2 className="mt-10 font-bold text-3xl text-center">Choose Your Child Age</h2>
      <section className="flex flex-col gap-10">
        <div className="m-5 grid grid-cols-1 gap-4 sm:grid-cols-6">
          <div className="flex flex-col items-center justify-center">
            <a
              className="flex flex-col items-center justify-center"
              href="#0-6m"
            >
              <img src={ZeroToSix} alt="0-6m" className="" />
              <h3>0-6M</h3>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a
              className="flex flex-col items-center justify-center"
              href="#6m-up"
            >
              <img src={SixMonths} alt="6m" className="" />
              <h3>6M+</h3>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a
              className="flex flex-col items-center justify-center"
              href="#12m-up"
            >
              <img src={TwelveMonths} alt="12m" className="" />
              <h3>12M+</h3>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a
              className="flex flex-col items-center justify-center"
              href="#18m-up"
            >
              <img src={EighteenMonths} alt="18M" className="" />
              <h3>18M+</h3>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a
              className="flex flex-col items-center justify-center"
              href="#2yrs-up"
            >
              <img src={TwoYears} alt="2Y" className="rounded-full" />
              <h3>2Yrs+</h3>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a
              className="flex flex-col items-center justify-center"
              href="#5yrs-up"
            >
              <img src={FiveYears} alt="5Y" className="rounded-full" />
              <h3>5Yrs+</h3>
            </a>
          </div>
        </div>
      </section>
      {/* บทความ */}
      <section className={uiStyle.text}>
        <h2 id="0-6m">1. เด็กแรกเกิดถึง 6 เดือน</h2>
        <ul>
          <li>
            ของเล่นโมบายล์แขวน (Mobiles): กระตุ้นการมองเห็น
            ช่วยพัฒนาการเคลื่อนไหวของดวงตา
          </li>
          <li>กระจกสำหรับเด็ก: ช่วยให้ทารกพัฒนาเรื่องการจดจำตนเองในกระจก</li>
          <li>
            ของเล่นแบบสัมผัส (Textured Toys): ช่วยพัฒนาประสาทสัมผัส
            สัมผัสได้ถึงความนุ่ม หนา และเรียบลื่น
          </li>
        </ul>
        <br />
        <h2 id="6m-up">6 เดือนขึ้นไป</h2>
        <ul>
          <li>
            บล็อกซ้อน (Stacking Blocks): ช่วยพัฒนาการเคลื่อนไหวของมือและสายตา
            ส่งเสริมทักษะการแก้ปัญหา
          </li>
          <li>ของเล่นกัดฟัน (Teething Toys): ช่วยลดอาการคันเหงือกขณะฟันขึ้น</li>
          <li>
            ของเล่นดนตรี (Musical Toys): เช่น กลองเล็ก
            กระตุ้นพัฒนาการด้านการฟังและการเรียนรู้การเล่นเครื่องดนตรี
          </li>
        </ul>
        <br />
        <h2 id="12m-up">12 เดือนขึ้นไป</h2>
        <ul>
          <li>
            รถเข็นสำหรับผลักเดิน (Push Toys): ช่วยในการฝึกเดิน
            เสริมสร้างความมั่นใจในการเคลื่อนไหว
          </li>
          <li>
            บล็อกไม้รูปทรงต่างๆ (Shape Sorters): ช่วยพัฒนาทักษะการสังเกต
            การแก้ปัญหา และการจับคู่
          </li>
        </ul>
        <br />
        <h2 id="18m-up">18 เดือนขึ้นไป</h2>
        <ul>
          <li>
            ดินน้ำมันและแป้งปั้น: ส่งเสริมการใช้กล้ามเนื้อมือเล็ก
            ช่วยฝึกการควบคุมมือ
          </li>
          <li>
            หนังสือภาพ: ส่งเสริมการเรียนรู้เรื่องสีและรูปทรง รวมถึงการพัฒนาภาษา
          </li>
          <li>
            เกมต่อภาพแบบจิ๊กซอว์ง่ายๆ: ช่วยพัฒนาทักษะด้านการจับคู่และการแก้ปัญหา
          </li>
        </ul>
        <br />
        <h2 id="2yrs-up">2 ปีขึ้นไป</h2>
        <ul>
          <li>
            ของเล่นบทบาทสมมติ (Role-Play Toys): เช่น ชุดครัวจำลอง
            ช่วยฝึกการเข้าสังคมและการเลียนแบบพฤติกรรม
          </li>
          <li>
            ลูกบอลเล็กๆ และของเล่นแบบโยนจับ:
            ส่งเสริมทักษะการเคลื่อนไหวกล้ามเนื้อใหญ่
          </li>
          <li>
            สีและกระดาษสำหรับวาดภาพ: ช่วยพัฒนาจินตนาการและความคิดสร้างสรรค์
          </li>
        </ul>
        <br />
        <h2 id="5yrs-up">5 ปีขึ้นไป</h2>
        <ul>
          <li>
            เกมบอร์ดง่ายๆ (Simple Board Games): ช่วยฝึกการรอคอย การใช้เหตุผล
            และการแก้ปัญหา
          </li>
          <li>
            บล็อกสร้างสรรค์หรือชุดเลโก้: ฝึกการวางแผน การสร้างสรรค์
            และเสริมสร้างกล้ามเนื้อมือเล็ก
          </li>
          <li>
            ของเล่นที่มีการตั้งกติกา เช่น ของเล่นกีฬา:
            พัฒนาทักษะด้านการเข้าสังคมและการทำงานร่วมกับผู้อื่น
          </li>
        </ul>
      </section>

       {/* Factors For Child Development */}
      <section>
        <h2 className="mt-10 font-bold text-3xl mx-10">
          Let’s find out more information about the development of children
        </h2>
        <FactorForChild/>
      </section>
    </div>
  );
};

export default About;
