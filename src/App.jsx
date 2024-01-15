import Navigate from "./components/Navigate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topic from "./pages/Topic";
import Merge from "./pages/Merge";
function App() {
  return (
    <div className="App h-[100%] w-full">
      <Router>
        <Navigate />
        <Routes>
          <Route path="/soan-de/" exact element={<Topic />} />
          <Route element={<Merge />} path="/soan-de/merge" exact></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
