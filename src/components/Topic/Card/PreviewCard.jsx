import React, { useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import TextToSpeak from "../../../core/TextToSpeech";
import { HiMiniSpeakerWave } from "react-icons/hi2";

function PreviewCard(props) {
  const sound = useRef();

  useEffect(() => {
    sound.current = new TextToSpeak(props.lang);
  }, []);

  useEffect(() => {
    sound.current.changeContent(props.sentence);
  }, [props.sentence]);
  useEffect(() => {
    sound.current.changeLang(props.lang);
  }, [props.lang]);
  return (
    <div className="card h-full flex max-h-[600px] w-full max-w-[400px] flex-wrap justify-center rounded-xl bg-card p-[15px] text-white">
      <img
        src={props.URL}
        alt="image"
        className="image h-auto max-h-[50%] w-auto max-w-full"
      />
      <div className="question w-full text-center text-[1.2rem]">
        {props.question}
      </div>
      <div className="flex w-full justify-center">
        {!props.type ? (
          <input
            className="card-input-tl inline-block h-[3ch] w-[calc(var(--character)_*_1ch)] border-b-[5px] border-dashed border-[none] bg-transparent text-[2rem] text-[white] outline-none"
            style={{ "--character": props.answer.length }}
          ></input>
        ) : (
          <div className="card-input-tn flex w-full flex-wrap">
            {[0, 1, 2, 3].map((i) => (
              <div
                className={
                  "flex w-1/2 items-center justify-center border-[1px] border-[black] py-4 text-sm" +
                  (props.rightAnswer - 1 == i ? " bg-[#31da3a]" : "")
                }
              >
                {props.answer.split(",")[i] || "*"}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex">
        <FaCheck fontSize={"2rem"} className="cursor-pointer self-end" />
        <HiMiniSpeakerWave
          className="ml-4 cursor-pointer self-end"
          fontSize={"2rem"}
          onClick={() => sound.current.speak(props.sentence)}
        />
      </div>
    </div>
  );
}

export default PreviewCard;
