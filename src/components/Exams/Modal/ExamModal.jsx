import React, { useRef } from "react";
import Overlay from "../../Overlay";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import Button from "../../Button";
import WatchFileInput from "../../../utils/WatchFileInput";
import ExamAPI from "../../../API/Exam";
import { useDispatch } from "react-redux";
import { pushExam, replaceExam } from "../../../redux/ExamSlice";
import { FaTimes } from "react-icons/fa";

// name, second limit, start time, end time, task
function ExamModal(props) {
  const [name, setName] = React.useState(props.name || "");
  const [hourLimit, setHourLimit] = React.useState(props.hourLimit || 0);
  const [minuteLimit, setMinuteLimit] = React.useState(props.minuteLimit || 0);
  const [secondLimit, setSecondLimit] = React.useState(props.secondLimit || 0);
  const [startTime, setStartTime] = React.useState(
    dayjs(props.start_time) || dayjs(),
  );
  const [endTime, setEndTime] = React.useState(
    dayjs(props.end_time) || dayjs(),
  );
  const [input, setInput] = React.useState(props.task || "");

  const dispatch = useDispatch();
  const updateObject = useRef({
    name: false,
    limit: false,
    startTime: false,
    endTime: false,
    task: false,
  });

  React.useEffect(() => {
    if (document.getElementById("file-input")) {
      WatchFileInput(setInput);
    }
  }, []);

  const handleCreate = async () => {
    let task;
    try {
      task = Object.entries(JSON.parse(input))[0][1];
      if (!(task instanceof Array)) task = JSON.parse(input);
      if (!(task instanceof Array)) {
        throw "";
      }
      const result = await ExamAPI.create({
        name,
        second_limit: hourLimit * 3600 + minuteLimit * 60 + secondLimit,
        start_time: startTime.toDate(),
        end_time: endTime.toDate(),
        task,
      });

      if (!Number.isInteger(result)) {
        dispatch(pushExam(result));
        props.quit();
      } else {
        alert("Đã có lỗi xảy ra");
      }
    } catch (e) {
      console.log(e);
      alert("Bộ đề không hợp lệ");
    }
  };

  const handleUpdate = async () => {
    let task;
    try {
      task = Object.entries(JSON.parse(input))[0][1];
      if (!(task instanceof Array)) task = JSON.parse(input);
      if (!(task instanceof Array)) {
        throw "";
      }
      console.log([
        updateObject.current.name && ["name", name],
        updateObject.current.limit && [
          "second_limit",
          hourLimit * 3600 + minuteLimit * 60 + secondLimit,
        ],
        updateObject.current.startTime && ["start_time", startTime.toDate()],
        updateObject.current.endTime && ["end_time", endTime.toDate()],
        updateObject.current.task && ["task", task],
      ]);
      const result = await ExamAPI.update({
        id: props.id,
        data: [
          updateObject.current.name && ["name", name],
          updateObject.current.limit && [
            "second_limit",
            hourLimit * 3600 + minuteLimit * 60 + secondLimit,
          ],
          updateObject.current.startTime && ["start_time", startTime.toDate()],
          updateObject.current.endTime && ["end_time", endTime.toDate()],
          updateObject.current.task && ["task", task],
        ],
      });

      if (!Number.isInteger(result)) {
        dispatch(replaceExam({ id: props.id, new: result }));
        props.quit();
      } else {
        alert("Đã có lỗi xảy ra");
      }
    } catch (e) {
      alert("Bộ đề không hợp lệ");
    }
  };
  return (
    <>
      <Overlay />
      <div className="fixed left-[50%] top-[50%] z-10 w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-modal p-10 shadow">
        <FaTimes
          size={25}
          className="absolute right-2 top-2 cursor-pointer"
          onClick={props.quit}
        />
        <p>
          Chú ý: Khi bài kiểm tra đã bắt đầu không thể thay đổi thông tin mà chỉ
          còn xóa
        </p>
        <input
          type="text"
          className="mt-2 w-full rounded-sm p-[10px] focus:outline-none"
          placeholder="Tên"
          onChange={(e) => {
            setName(e.target.value);
            updateObject.current.name = true;
          }}
          value={name}
        />
        <label htmlFor="minute" className="block">
          Thời gian làm bài:
        </label>
        <div className="limit flex">
          <input
            type="number"
            className="w-full rounded-sm p-[10px] focus:outline-none"
            placeholder="Giờ"
            value={`${hourLimit}`}
            onChange={(e) => {
              setHourLimit(parseInt(e.target.value) || 0);
              updateObject.current.limit = true;
            }}
          />
          <input
            type="number"
            className="w-full rounded-sm p-[10px] focus:outline-none"
            placeholder="Phút"
            id="minute"
            value={`${minuteLimit}`}
            onChange={(e) => {
              setMinuteLimit(parseInt(e.target.value) || 0);
              updateObject.current.limit = true;
            }}
          />
          <input
            type="number"
            className="w-full rounded-sm p-[10px] focus:outline-none"
            placeholder="Giây"
            value={`${secondLimit}`}
            onChange={(e) => {
              setSecondLimit(parseInt(e.target.value) || 0);
              updateObject.current.limit = true;
            }}
          />
        </div>
        <p>Giới hạn thời gian: </p>
        <div className="time">
          <DateTimePicker
            ampm={false}
            className="w-full bg-white"
            onChange={(e) => {
              setStartTime(e);
              updateObject.current.startTime = true;
            }}
            value={startTime}
          />
          <p>Đến</p>
          <DateTimePicker
            ampm={false}
            className="w-full bg-white"
            onChange={(e) => {
              setEndTime(e);
              updateObject.current.endTime = true;
            }}
            value={endTime}
          />
        </div>
        <div className="task">
          <p>Đề bài: </p>
          <input
            type="text"
            className="w-full rounded-sm p-[10px] focus:outline-none"
            placeholder="Nội dung"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              updateObject.current.task = true;
            }}
          />

          <input type="file" id="file-input" className="mt-1" />
        </div>

        <Button
          color="bg-secondary"
          onClick={props.mode == "create" ? handleCreate : handleUpdate}
        >
          {props.mode == "create" ? "Tạo bài kiểm tra" : "Lưu bài kiểm tra"}
        </Button>
      </div>
    </>
  );
}

export default ExamModal;
