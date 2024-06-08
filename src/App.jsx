import React, { useEffect } from "react"

import Navigate from "./components/Navigate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topic from "./pages/Topic";
import Merge from "./pages/Merge";
import Library from "./pages/Library";

import LoadCategories from "./utils/State/LoadCategories";
import LoadTopics from "./utils/State/LoadTopics";

import { useDispatch, useSelector } from "react-redux";

import SaveCards from "./utils/LocalStorage/SaveCards";
import SaveTopics from "./utils/LocalStorage/SaveTopics";
import SaveCategorie from "./utils/LocalStorage/SaveCategories";
import LoadCards from "./utils/State/LoadCards";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    LoadCategories(dispatch);
    LoadTopics(dispatch);
    LoadCards(dispatch);
  }, []);

  useEffect(() => {
		SaveCards(state.card);
	}, [state.card]);

	useEffect(() => {
		SaveCategorie(state.categorie.value);
	}, [state.categorie.value]);

	useEffect(() => {
		SaveTopics(state.topic);
	}, [state.topic]);
  return (
    <div className="App relative h-[100%] w-full">
      <Router>
        <Navigate />
        <Routes>
          <Route path="/soan-de/" exact element={<Topic />} />
          <Route element={<Merge />} path="/soan-de/merge" />
          <Route element={<Library />} path="/soan-de/library" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
