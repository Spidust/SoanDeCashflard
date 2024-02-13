import React from "react";
import Control from "./../components/Exams/Control";
import List from "./../components/Exams/List/List";

function Exams() {
  return (
    <div classNames="exams w-full h-[100%]">
      <Control />
      <List />
    </div>
  );
}

export default Exams;
