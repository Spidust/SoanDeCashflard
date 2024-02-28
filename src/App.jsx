import Navigate from "./components/Navigate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topic from "./pages/Topic";
import Merge from "./pages/Merge";
import Exams from "./pages/Exams";
import Login from "./components/Exams/Authen/Login";
import Register from "./components/Exams/Authen/Register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import SaveToken from "./utils/LocalStorage/SaveToken";
import LoadToken from "./utils/LocalStorage/LoadToken";
import ClearToken from "./utils/LocalStorage/ClearToken";

import UserAPI from "./API/User";
import { setUser } from "./redux/UserSlice";

function App() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    LoadToken(dispatch);
  }, []);

  useEffect(() => {
    SaveToken(auth.token);
    if (auth.token) {
      UserAPI.get().then((result) => {
        if (Number.isInteger(result)) {
          return ClearToken(dispatch);
        }
        dispatch(setUser(result));
      });
    }
  }, [auth]);

  return (
    <div className="App relative h-[100%] w-full">
      <Router>
        <Navigate />
        <Routes>
          <Route path="/soan-de/" exact element={<Topic />} />
          <Route element={<Merge />} path="/soan-de/merge" />
          <Route element={<Exams />} path="/soan-de/exam" />
          <Route element={<Login />} path="/soan-de/exam/login" />
          <Route element={<Register />} path="/soan-de/exam/register" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
