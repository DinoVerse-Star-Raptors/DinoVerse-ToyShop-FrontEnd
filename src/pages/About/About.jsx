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

const About = () => {
  return (
    <div>
      <section className={uiStyle.about}>
        <img src={aboutbanner} alt="aboutbanner" />
      </section>

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
        <h1>ของเล่นเสริมพัฒนาการตามช่วงวัย</h1>
        <br />
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
        <br />
        <h2>
          ของเล่นเสริมพัฒนาการเด็กแบ่งออกเป็นหลายหมวดหมู่เพื่อสนับสนุนการพัฒนาทักษะต่างๆ
          ของเด็ก <br />
          โดยสามารถจัดได้เป็นหมวดหมู่หลักดังนี้:
        </h2>
        <br />
        <p>
          1. ของเล่นเพื่อพัฒนาการด้านการเคลื่อนไหว (Motor Skill Toys)
          ของเล่นในกลุ่มนี้จะช่วยเสริมพัฒนาการด้านกล้ามเนื้อมัดเล็กและกล้ามเนื้อมัดใหญ่
          เช่น ของเล่นจับคู่บล็อก รถผลักเดิน ดินน้ำมัน และอุปกรณ์ปีนป่าย
        </p>
        <p>
          2. ของเล่นเพื่อเสริมสร้างจินตนาการและความคิดสร้างสรรค์ (Creative and
          Imaginative Play Toys) รวมถึงของเล่นบทบาทสมมติ เช่น ชุดทำครัว,
          ชุดทำสวน, ตุ๊กตา, และชุดเครื่องมือเสริมสร้างจินตนาการ
        </p>
        <p>
          3.ของเล่นเพื่อพัฒนาทักษะด้านภาษาและการสื่อสาร (Language and
          Communication Toys) ของเล่นที่ส่งเสริมการพูดและการฟัง เช่น หนังสือภาพ
          เกมการเล่าเรื่อง และของเล่นที่มีเสียงหรือคำพูดพื้นฐาน
        </p>
        <p>
          4. ของเล่นเพื่อการพัฒนาด้านอารมณ์และสังคม (Emotional and Social
          Development Toys) ของเล่นกลุ่มนี้รวมถึงของเล่นบทบาทสมมติ, เกมกลุ่ม,
          เกมบอร์ดแบบง่ายๆ ที่ช่วยฝึกการแบ่งปันและการรอคอย
          ซึ่งช่วยให้เด็กพัฒนาทักษะการอยู่ร่วมกับผู้อื่น
        </p>
        <p>
          5. ของเล่นด้านดนตรีและจังหวะ (Music and Rhythm Toys)
          รวมถึงของเล่นที่มีเสียงดนตรี เช่น คีย์บอร์ด, ไซโลโฟน, กลองชุดเล็ก,
          หรือของเล่นที่ให้เด็กได้เคาะและเขย่า จะช่วยพัฒนาทักษะด้านการฟัง
          การควบคุมจังหวะ และการเข้าใจความสัมพันธ์ระหว่างเสียงและการเคลื่อนไหว{" "}
        </p>
        <p>
          6. ของเล่นสำหรับพัฒนาทักษะการเคลื่อนไหวที่เฉพาะเจาะจง (Fine Motor
          Skill Toys) ของเล่นที่ต้องใช้ความละเอียดในการใช้นิ้วและมือ เช่น
          การร้อยลูกปัด เล่นดินน้ำมัน การใช้แป้งปั้น ของเล่นดึง-หมุน
          ช่วยพัฒนากล้ามเนื้อมัดเล็กซึ่งเป็นทักษะพื้นฐานสำหรับการเขียนและการทำกิจกรรมที่ใช้การควบคุมกล้ามเนื้อเล็ก
        </p>
        <p>
          7. ของเล่นเพื่อการเข้าสังคมและการสร้างมิตรภาพ (Social Play Toys) เช่น
          ของเล่นที่เน้นการเล่นร่วมกัน เช่น บอร์ดเกม เกมกลุ่มขนาดเล็ก
          และของเล่นที่ต้องทำงานเป็นทีมช่วยส่งเสริมการอยู่ร่วมกันในสังคม
          ฝึกการแบ่งปัน การยอมรับความคิดเห็นของผู้อื่น และทักษะการสื่อสาร
        </p>
        <p>
          8. ของเล่นเพื่อพัฒนาการรับรู้และเข้าใจอารมณ์ (Emotional Recognition
          Toys) รวมถึงตุ๊กตาและของเล่นที่แสดงอารมณ์ในลักษณะต่างๆ เช่น
          ตุ๊กตาหน้ายิ้ม หรือตุ๊กตาแสดงอารมณ์หลากหลาย
          เหมาะสำหรับให้เด็กได้เรียนรู้และเข้าใจอารมณ์ของตนเองและผู้อื่น
        </p>
        <p>
          9. ของเล่นเพื่อการเรียนรู้เรื่องเหตุและผล (Cause and Effect)
          ตัวอย่างของเล่น: ของเล่นแบบกดแล้วมีเสียง, ปุ่มกดที่มีแสง,
          ของเล่นที่ต้องหมุนแล้วมีการเคลื่อนไหว, หนังสือป๊อปอัพ
          หรือของเล่นดึงแล้วเด้งกลับ ลักษณะของการพัฒนา:
          ของเล่นเหล่านี้สอนให้เด็กเรียนรู้ว่าการกระทำของพวกเขานำไปสู่ผลลัพธ์ที่แน่นอน
          ช่วยเสริมสร้างความเข้าใจในความสัมพันธ์ระหว่างการกระทำและผลลัพธ์
          ซึ่งเป็นพื้นฐานสำคัญในการเรียนรู้และแก้ปัญหา
        </p>
        <p>
          10. ของเล่นเพื่อเสริมสร้างสมาธิ (Concentration) ตัวอย่างของเล่น:
          เกมจิ๊กซอว์, เกมจับคู่ภาพ, บล็อกไม้ที่ต้องเรียงให้ได้ตามแบบ,
          เกมการต่อภาพเรียงลำดับ, หรือของเล่นเลโก้ ลักษณะของการพัฒนา:
          ของเล่นที่ต้องใช้ความใส่ใจและการโฟกัสจะช่วยให้เด็กพัฒนาสมาธิและความอดทน
          นอกจากนี้ยังฝึกฝนให้เด็กทำงานจนเสร็จ
          และส่งเสริมความสามารถในการจัดการสิ่งเร้าต่างๆ
          รอบตัวเพื่อให้โฟกัสอยู่กับกิจกรรมที่ทำ
        </p>
        <p>
          11. ของเล่นเพื่อพัฒนาการประสานงาน (Coordination) ตัวอย่างของเล่น:
          ของเล่นที่ต้องใช้มือและตาในการประสานงาน เช่น ลูกบอลโยน-รับ,
          การต่อบล็อกไม้ที่ซับซ้อน, ของเล่นร้อยเชือก, เกมโยนห่วง,
          หรือของเล่นที่ต้องใช้การกดที่ตรงจุด ลักษณะของการพัฒนา:
          ของเล่นเหล่านี้ช่วยฝึกฝนการใช้กล้ามเนื้อมัดเล็กและกล้ามเนื้อมัดใหญ่
          เช่น การใช้มือและนิ้วอย่างคล่องแคล่ว
          รวมถึงพัฒนาทักษะการจับคู่ความเคลื่อนไหวของมือและสายตา
          ซึ่งจำเป็นสำหรับทักษะการเขียนและการใช้เครื่องมืออื่นๆ
        </p>
        <p>
          12. ของเล่นเพื่อเสริมสร้างจินตนาการ (Imagination) ตัวอย่างของเล่น:
          ตุ๊กตา, ชุดครัว, ของเล่นแบบสร้างสถานการณ์, ดินน้ำมัน, บล็อกก่อสร้าง,
          ชุดอุปกรณ์ศิลปะ และเกมแบบสร้างเรื่องราว ลักษณะของการพัฒนา:
          การเล่นที่ใช้จินตนาการช่วยให้เด็กได้พัฒนาทักษะด้านการคิดสร้างสรรค์และการแก้ไขปัญหาอย่างไม่ตายตัว
          การเล่นบทบาทสมมติหรือการสร้างเรื่องราวต่างๆ
          ทำให้เด็กได้สำรวจความคิดใหม่ๆ และสร้างโลกในแบบที่ตนเองจินตนาการ
        </p>
      </section>
    </div>
  );
};

export default About;
