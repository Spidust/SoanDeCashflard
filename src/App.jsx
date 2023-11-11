import Navigate from "./components/Navigate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topic from "./pages/Topic";
function App() {
  return (
    <div className="App h-[100%] w-full">
      <Router>
        <Navigate />
        <Routes>
          <Route path="/" exact={true} element={<Topic />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
