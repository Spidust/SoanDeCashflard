import React, { useEffect } from "react";
import Control from "./../components/Exams/Control";
import List from "./../components/Exams/List/List";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Exams() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.token) {
      navigate("/soan-de/exam/login");
    }
  }, [auth]);
  return (
    <div className="exams mt-6 h-[calc(100%-46px-1.5rem)] w-full">
      <Control />
      <List />
    </div>
  );
}

export default Exams;
