import React from "react";
import Overlay from "../../Overlay";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import Button from "../../Button";
import WatchFileInput from "../../../utils/WatchFileInput";
import ExamAPI from "../../../API/Exam";

// name, second limit, start time, end time, task
function CreateModal() {
  const [name, setName] = React.useState("");
  const [hourLimit, setHourLimit] = React.useState(0);
  const [minuteLimit, setMinuteLimit] = React.useState(0);
  const [secondLimit, setSecondLimit] = React.useState(0);
  const [startTime, setStartTime] = React.useState(dayjs());
  const [endTime, setEndTime] = React.useState(dayjs());

  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    if (document.getElementById("file-input")) {
      WatchFileInput(setInput);
    }
  }, []);

  const handleCreate = async () => {
    const task = Object.entries(JSON.parse(input))[0][1];
    console.log(
      await ExamAPI.create({
        name,
        second_limit: hourLimit * 3600 + minuteLimit * 60 + secondLimit,
        start_time: startTime.toDate(),
        end_time: endTime.toDate(),
        task,
      }),
    );
  };
  return (
    <>
      <Overlay />
      <div className="fixed left-[50%] top-[50%] z-10 w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-modal p-10 shadow">
        <p>
          Chú ý: Khi bài kiểm tra đã bắt đầu không thể thay đổi thông tin mà chỉ
          còn xóa
        </p>
        <input
          type="text"
          className="mt-2 w-full rounded-sm p-[10px] focus:outline-none"
          placeholder="Tên"
          onChange={(e) => setName(e.target.value)}
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
            value={hourLimit}
            onChange={(e) => setHourLimit(parseInt(e.target.value || "0"))}
          />
          <input
            type="number"
            className="w-full rounded-sm p-[10px] focus:outline-none"
            placeholder="Phút"
            id="minute"
            value={minuteLimit}
            onChange={(e) => setMinuteLimit(parseInt(e.target.value || "0"))}
          />
          <input
            type="number"
            className="w-full rounded-sm p-[10px] focus:outline-none"
            placeholder="Giây"
            value={secondLimit}
            onChange={(e) => setSecondLimit(parseInt(e.target.value || "0"))}
          />
        </div>
        <p>Giới hạn thời gian: </p>
        <div className="time">
          <DateTimePicker
            ampm={false}
            defaultValue={dayjs()}
            className="w-full bg-white"
            onChange={(e) => setStartTime(e)}
            value={startTime}
          />
          <p>Đến</p>
          <DateTimePicker
            ampm={false}
            defaultValue={dayjs()}
            className="w-full bg-white"
            onChange={(e) => setEndTime(e)}
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
            onChange={(e) => setInput(e.target.value)}
          />

          <input type="file" id="file-input" className="mt-1" />
        </div>

        <Button color="bg-secondary" onClick={handleCreate}>
          Tạo bài kiểm tra
        </Button>
      </div>
    </>
  );
}

export default CreateModal;
