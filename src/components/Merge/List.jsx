import React, { useState } from "react";
import Item from "./Item";

import SelectModal from "./Modal/SelectModal";
import DeleteModal from "./Modal/DeleteModal";

function List(props) {
  const [selecting, select] = useState(-1);
  const [deleteState, setDeleteState] = useState(false);

  return (
    <div className="list relative mx-auto mt-4 aspect-[3/4] w-full max-w-[400px] overflow-y-auto rounded-sm border-[1px] border-solid border-black p-1">
      <div className="header flex w-full bg-primary p-5">
        <span className="w-[10%] text-center">TT</span>
        <span className="w-[70%] truncate text-center">Tên bộ thẻ</span>
        <span className="w-[20%] text-center">Số lượng</span>
      </div>

      {props.data &&
        props.data.map((i, index) => (
          <Item
            index={index}
            name={i[0]}
            quantity={i[1].length}
            select={(index) => {
              if (selecting > -1) return;
              select(index);
            }}
            selecting={selecting}
          />
        ))}

      {selecting > -1 && (
        <SelectModal
          quit={() => select(-1)}
          delete={() => setDeleteState(true)}
        />
      )}
      {deleteState && (
        <DeleteModal
          name={props.data[selecting][0]}
          quit={() => setDeleteState(false)}
          remove={() => {
            select(-1);
            props.remove(selecting);
          }}
        />
      )}
    </div>
  );
}

export default List;
