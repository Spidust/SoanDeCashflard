import React from "react";
import Item from "./Item";

function List(props) {
  return (
    <div className="list mx-auto mt-4 h-[calc(100%-64px-1rem)] w-4/5 overflow-auto rounded-md border-[1px] border-[#333] p-1">
      <div className="flex flex-wrap gap-1 ">
        {props.data.length > 0 &&
          props.data.map((i) => (
            <Item
              name={i.name}
              date={{
                start_time: new Date(i.start_time),
                end_time: new Date(i.end_time),
              }}
              quantity={10}
              id={i.id}
              key={i.id}
              remove={props.remove}
              update={props.update}
            />
          ))}
      </div>
    </div>
  );
}

export default List;
