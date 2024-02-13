import React from "react";
import Control from "./../components/Exams/Control";
import List from "./../components/Exams/List/List";

function Exams() {
  return (
    <div className="exams mt-6 h-[calc(100%-46px-1.5rem)] w-full">
      <Control />
      <List />
    </div>
  );
}

export default Exams;
