import Navigate from "./components/Navigate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App w-full">
      <Router>
        <Navigate />
        <Routes>
          <Route path="/" exact={true} element={<p>Abc</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
