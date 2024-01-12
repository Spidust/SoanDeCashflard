import React, { useState } from "react";
import List from "./../components/Merge/List";
import Control from "./../components/Merge/Control";

function Merge() {
  const [data, setData] = useState([]);
  return (
    <div className="h-[100%]">
      <List data={data} />
      <Control />
    </div>
  );
}

export default Merge;
