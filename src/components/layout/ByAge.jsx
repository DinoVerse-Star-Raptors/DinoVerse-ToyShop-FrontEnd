import ZeroToSix from "../../pages/About/assets/0-6M-circle.png";
import SixMonths from "../../pages/About/assets/6M-circle.png";
import TwelveMonths from "../../pages/About/assets/12M-circle.png";
import EighteenMonths from "../../pages/About/assets/18M-circle.png";
import TwoYears from "../../pages/About/assets/2yrs-circle.png";
import FiveYears from "../../pages/About/assets/5yrs-circle.png";


import React, { useState } from "react";


const ByAgeList = [{   
        id:0,
        img: "https://res.cloudinary.com/dvacq67nr/image/upload/c_fill,w_300,h_300/v1731819649/age_0-6m_raesjeเร",
        name: '0-6M',
        text: "เด็กแรกเกิดถึง 6 เดือน ของเล่นโมบายล์แขวน (Mobiles): กระตุ้นการมองเห็น ช่วยพัฒนาการเคลื่อนไหวของดวงตา กระจกสำหรับเด็ก: ช่วยให้ทารกพัฒนาเรื่องการจดจำตนเองในกระจกของเล่นแบบสัมผัส (Textured Toys): ช่วยพัฒนาประสาทสัมผัส สัมผัสได้ถึงความนุ่ม หนา และเรียบลื่น"
    },{   
        id:1,
        img: ZeroToSix,
        name: '6M+',
        text: "6 เดือนขึ้นไป บล็อกซ้อน (Stacking Blocks): ช่วยพัฒนาการเคลื่อนไหวของมือและสายตา ส่งเสริมทักษะการแก้ปัญหา ของเล่นกัดฟัน (Teething Toys): ช่วยลดอาการคันเหงือกขณะฟันขึ้น ของเล่นดนตรี (Musical Toys): เช่น กลองเล็ก กระตุ้นพัฒนาการด้านการฟังและการเรียนรู้การเล่นเครื่องดนตรี"
    },{   
        id:2,
        img: ZeroToSix,
        name: '12M+',
        text: "12 เดือนขึ้นไป รถเข็นสำหรับผลักเดิน (Push Toys): ช่วยในการฝึกเดิน เสริมสร้างความมั่นใจในการเคลื่อนไหว บล็อกไม้รูปทรงต่างๆ (Shape Sorters): ช่วยพัฒนาทักษะการสังเกต การแก้ปัญหา และการจับคู่"
    },{   
        id:3,
        img: ZeroToSix,
        name: '18M+',
        text: "18 เดือนขึ้นไป ดินน้ำมันและแป้งปั้น: ส่งเสริมการใช้กล้ามเนื้อมือเล็ก ช่วยฝึกการควบคุมมือ หนังสือภาพ: ส่งเสริมการเรียนรู้เรื่องสีและรูปทรง รวมถึงการพัฒนาภาษา เกมต่อภาพแบบจิ๊กซอว์ง่ายๆ: ช่วยพัฒนาทักษะด้านการจับคู่และการแก้ปัญหา"
    },{   
        id:4,
        img: ZeroToSix,
        name: '2Yrs+',
        text: "2 ปีขึ้นไป ของเล่นบทบาทสมมติ (Role-Play Toys): เช่น ชุดครัวจำลอง ช่วยฝึกการเข้าสังคมและการเลียนแบบพฤติกรรม ลูกบอลเล็กๆ และของเล่นแบบโยนจับ: ส่งเสริมทักษะการเคลื่อนไหวกล้ามเนื้อใหญ่ สีและกระดาษสำหรับวาดภาพ: ช่วยพัฒนาจินตนาการและความคิดสร้างสรรค์"
    },{   
        id:5,
        img: ZeroToSix,
        name: '5Yrs+',
        text: "5 ปีขึ้นไป เกมบอร์ดง่ายๆ (Simple Board Games): ช่วยฝึกการรอคอย การใช้เหตุผล และการแก้ปัญหา บล็อกสร้างสรรค์หรือชุดเลโก้: ฝึกการวางแผน การสร้างสรรค์ และเสริมสร้างกล้ามเนื้อมือเล็ก ของเล่นที่มีการตั้งกติกา เช่น ของเล่นกีฬา: พัฒนาทักษะด้านการเข้าสังคมและการทำงานร่วมกับผู้อื่น"
  }
]

export default function ChooseByAge() {
    const [index, setIndex] = useState(0);

    let ByAge = ByAgeList[index];
    return (
      <>
        <div className="flex mb-10">
          <button onClick={() => setIndex(0)} className="flex flex-col items-center justify-center">
              <img src={ZeroToSix} alt="0-6m"/>
              <h3>0-6M</h3>
          </button>
          <button onClick={() => setIndex(1)} className="flex flex-col items-center justify-center">
              <img src={SixMonths} alt="0-6m"/>
              <h3>6M+</h3>
          </button>
          <button onClick={() => setIndex(2)} className="flex flex-col items-center justify-center">
              <img src={TwelveMonths} alt="0-6m"/>
              <h3>12M+</h3>
          </button>
          <button onClick={() => setIndex(3)} className="flex flex-col items-center justify-center">
              <img src={EighteenMonths} alt="0-6m"/>
              <h3>18M+</h3>
          </button>
          <button onClick={() => setIndex(4)} className="flex flex-col items-center justify-center">
              <img src={TwoYears} alt="0-6m"/>
              <h3>2Yrs+</h3>
          </button>
          <button onClick={() => setIndex(5)} className="flex flex-col items-center justify-center">
              <img src={FiveYears} alt="0-6m"/>
              <h3>5Yrs+</h3>
          </button>
        </div>

        <h2 key={ByAge.index} className="mx-12 text-2xl p-16 rounded-lg bg-gray-50 shadow-md">
          {ByAge.text}
        </h2>
      </>
    );
  }
