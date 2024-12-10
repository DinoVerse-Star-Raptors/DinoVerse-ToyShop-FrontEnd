const childDevFactors = [{
    id:0,
    imgUrl: 1,
    name: 'Motor Skills',
    description: 'เสริมกล้ามเนื้อมัดเล็ก-ใหญ่ ผ่านการจับ บิด ผลัก หรือปีนป่าย',
  },{
    id:1,
    imgUrl: 2,
    name: 'Imagination',
    description: 'ฝึกคิดสร้างสรรค์และแก้ปัญหาอย่างยืดหยุ่นผ่านบทบาทสมมติ',
  },{
    id:2,
    imgUrl: 3,
    name: 'Language Skills',
    description: 'ส่งเสริมการพูด การฟัง และการเรียนรู้คำศัพท์ใหม่',
  },{
    id:3,
    imgUrl: 4,
    name: 'Emotional & Social Skills',
    description: 'เรียนรู้การแบ่งปัน การรอคอย และการอยู่ร่วมกับผู้อื่น',
  },{
    id:4,
    imgUrl: 5,
    name: 'Musical Skills',
    description: 'ฝึกการฟังจังหวะ ความสัมพันธ์ของเสียง และการควบคุมการเคลื่อนไหว',
  },{
    id:5,
    imgUrl: 6,
    name: 'Fine Motor Skills',
    description: 'พัฒนาความแม่นยำของนิ้วและมือเพื่อกิจกรรมละเอียด',
  },{
    id:6,
    imgUrl: 7,
    name: 'Social Skills',
    description: 'ส่งเสริมการทำงานเป็นทีม การสื่อสาร และการยอมรับความคิดเห็น',
  },{
    id:7,
    imgUrl: 8,
    name: 'Emotional Understanding',
    description: 'เรียนรู้และแยกแยะอารมณ์ของตนเองและผู้อื่น',
  },{
    id:8,
    imgUrl: 9,
    name: 'Cause & Effect',
    description: 'เข้าใจความสัมพันธ์ระหว่างการกระทำและผลลัพธ์',
  },{
    id:9,
    imgUrl: 10,
    name: 'Concentration',
    description: 'ฝึกความตั้งใจ ความอดทน และการทำงานจนสำเร็จ',
  },{
    id:10,
    imgUrl: 11,
    name: 'Coordination',
    description: 'เสริมการใช้มือและสายตาร่วมกันอย่างคล่องแคล่ว',
  },{
    id:11,
    imgUrl: 12,
    name: 'Creative Thinking',
    description: 'กระตุ้นความคิดสร้างเรื่องราวและการแก้ปัญหาอย่างไม่ตายตัว',
  }];
  
  export default function FactorForChild() {
    const childDevFactor = childDevFactors.map(factor =>
      <ul>
        <li key={factor.id} className="bg-pink-200 p-5 rounded-md">
          <div className="flex items-center">
              <p className="font-bold text-2xl bg-pink-300 px-4 py-2 rounded-md">{factor.imgUrl}</p>
              <p className="pl-3 font-bold text-2xl">{factor.name}</p>
          </div>
          <div className="pt-2">
              <p>{factor.description}</p>
          </div>
        </li> 
      </ul>
   ); 
   return(
     <div class="grid grid-cols-3 gap-4 items-center m-10">
       {childDevFactor}
     </div>
   );
  }