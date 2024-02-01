import React from "react";

function FormSound(props) {
  return (
    <div className="sound">
      <h3 className="font-bold">Âm thanh</h3>
      <label htmlFor="sentence">Câu nói: </label>
      <input
        type="text"
        className="sentence border-[2px] border-black"
        id="sentence"
        value={props.sentence}
        onChange={(e) => props.setSentence(e.target.value)}
      />

      <label htmlFor="language" className="ml-[3px]">
        Ngôn ngữ:{" "}
      </label>
      <select
        id="language"
        onChange={(e) => props.setLang(e.target.value)}
        value={props.lang}
      >
        <option value="en-GB">Tiếng Anh</option>
        <option value="ja-JP">Tiếng Nhật</option>
      </select>
    </div>
  );
}

export default FormSound;
