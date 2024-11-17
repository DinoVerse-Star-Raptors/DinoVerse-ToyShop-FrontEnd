import React from "react";
import uiStyle from "./ExamHome.module.css";
import AgeTagSection from "./AgeTagSection";
import DevTagSection from "./DevTagSection";

const ExamHome = () => {
  return (
    <div className={`${uiStyle.exam_home} mt-8 flex w-full flex-col`}>
      <DevTagSection />
      <AgeTagSection />
    </div>
  );
};

export default ExamHome;
