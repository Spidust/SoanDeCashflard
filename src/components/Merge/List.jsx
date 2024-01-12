import React from "react";
import Item from "./Item";

function List(props) {
  console.log(props.data)
  return (
    <div className="list aspect-[3/4] mx-auto mt-4 w-full max-w-[400px] rounded-sm border-[1px] border-solid border-black p-1">
      <Item
        index={1}
        name="Jajjhajsdhfjkhajksdhfkjahsdjlkfhklasjhdfkjhasdfp"
        quantity={20}
      />
    </div>
  );
}

export default List;
