import React from "react";
import Control from "./../components/Exams/Control";
import List from "./../components/Exams/List/List";

function Exams() {
  return (
    <div className="exams absolute bottom-0 top-[46px] w-full">
      <Control />
      <List />
    </div>
  );
}

export default Exams;
