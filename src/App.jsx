import Navigate from "./components/Navigate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topic from "./pages/Topic";
import Merge from "./pages/Merge";
import Exams from "./pages/Exams";
import Login from "./components/Exams/Authen/Login";
import Register from "./components/Exams/Authen/Register";

function App() {
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
