import React from "react";
import Header from "./components/Header";
import { DefaultUserContext } from "./contexts/DefaultUser";
import "./styling/App.css";
import ArticlesList from "./components/ArticlesList";
// import useScreenSize from "./hooks/useScreenSize";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ArticlesList />
    </div>
  );
};

export default App;
