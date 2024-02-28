import React, { useEffect } from "react";
import Control from "./../components/Exams/Control";
import List from "./../components/Exams/List/List";
import { useNavigate } from "react-router-dom";
import ExamModal from "../components/Exams/Modal/ExamModal";
import { useDispatch, useSelector } from "react-redux";
import ExamAPI from "../API/Exam";
import ClearToken from "./../utils/LocalStorage/ClearToken";
import { removeExam, setExamList } from "../redux/ExamSlice";
import dayjs from "dayjs";

function Exams() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const exam = useSelector((state) => state.exam.list);

  const [create, setCreate] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [updateItem, setUpdateItem] = React.useState(-1);

  useEffect(() => {
    if (exam.length)
      setUpdateItem(exam[exam.IndexOfObject("id", update)] || -1);
  }, [update]);
  useEffect(() => {
    if (!auth.token) {
      navigate("/soan-de/exam/login");
    }
  }, [auth]);

  useEffect(() => {
    ExamAPI.getAll().then((data) => {
      if (data != 404 || data != 500) {
        if (data == 403) {
          return ClearToken(dispatch);
        }
        dispatch(setExamList(data));
      }
    });
  }, []);
  // if (updateItem) console.log(dayjs(updateItem.start_time));
  return (
    <div className="exams mt-6 h-[calc(100%-46px-1.5rem)] w-full">
      {create && <ExamModal quit={() => setCreate(false)} mode="create" />}
      {update && updateItem != -1 && (
        <ExamModal
          quit={() => setUpdate(false)}
          id={update}
          name={updateItem.name}
          start_time={dayjs(updateItem.start_time)}
          end_time={dayjs(updateItem.end_time)}
          hourLimit={Math.floor(updateItem.second_limit / 3600)}
          minuteLimit={Math.floor((updateItem.second_limit % 3600) / 60)}
          secondLimit={updateItem.second_limit % 60}
          task={JSON.stringify(updateItem.task)}
          mode="update"
        />
      )}
      <Control open={() => setCreate(true)} />
      <List
        data={exam}
        remove={async (id) => {
          if (await ExamAPI.remove(id)) {
            const t = exam.IndexOfObject("id", id);
            if (t > -1) {
              dispatch(removeExam(t));
            }
          }
        }}
        update={(id) => setUpdate(id)}
      />
    </div>
  );
}

export default Exams;
