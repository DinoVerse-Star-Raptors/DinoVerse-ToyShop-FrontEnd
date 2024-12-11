import ZeroToSix from "../../pages/About/assets/0-6M-circle.png";
import SixMonths from "../../pages/About/assets/6M-circle.png";
import React, { useState } from "react";

// import TwelveMonths from "./assets/12M-circle.png";
// import EighteenMonths from "./assets/18M-circle.png";
// import TwoYears from "./assets/2yrs-circle.png";
// import FiveYears from "./assets/5yrs-circle.png";

const ByAgeList = [{   
        id:0,
        img: "https://res.cloudinary.com/dvacq67nr/image/upload/c_fill,w_300,h_300/v1731819649/age_0-6m_raesjeเร",
        name: '0-6M',
        text: "1. เด็กแรกเกิดถึง 6 เดือน ของเล่นโมบายล์แขวน (Mobiles): กระตุ้นการมองเห็น ช่วยพัฒนาการเคลื่อนไหวของดวงตา กระจกสำหรับเด็ก: ช่วยให้ทารกพัฒนาเรื่องการจดจำตนเองในกระจกของเล่นแบบสัมผัส (Textured Toys): ช่วยพัฒนาประสาทสัมผัส สัมผัสได้ถึงความนุ่ม หนา และเรียบลื่น"
    },{   
        id:2,
        img: ZeroToSix,
        name: '6M',
        text: "กระตุ้นการมองเห็น ช่วยพัฒนาการเคลื่อนไหวของดวงตา กระจกสำหรับเด็ก: ช่วยให้ทารกพัฒนาเรื่องการจดจำตนเองในกระจกของเล่นแบบสัมผัส (Textured Toys): ช่วยพัฒนาประสาทสัมผัส สัมผัสได้ถึงความนุ่ม หนา และเรียบลื่น"
    }
]

export default function ChooseByAge() {
    const [index, setIndex] = useState(0);

    let ByAge = ByAgeList[index];
    return (
      <>
        <button onClick={() => setIndex(0)} className="flex flex-col items-center justify-center">
            <img src={ZeroToSix} alt="0-6m"/>
            <h3>0-6M</h3>
        </button>
        <button onClick={() => setIndex(1)} className="flex flex-col items-center justify-center">
            <img src={SixMonths} alt="0-6m"/>
            <h3>6M</h3>
        </button>

        <h2 key={ByAge.index}>
          {ByAge.text}
        </h2>
      </>
    );
  }