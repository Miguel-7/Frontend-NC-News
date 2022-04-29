import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Nav from "./components/Nav";
// import ErrorPage from "./components/ErrorPage";
import React from "react";
import Header from "./components/Header";
// import { DefaultUserContext } from "./contexts/DefaultUser";
import "./styling/App.css";
import ArticlesList from "./components/ArticlesList";
import SingleTopicList from "./components/SingleTopicList";
// import useScreenSize from "./hooks/useScreenSize";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path={"/articles"} element={<ArticlesList />} />
          <Route path={"/topics/:topic_slug"} element={<ArticlesList />} />
          {/* <Route path={"*"} element={<ErrorPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
