import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import React from "react";
import Header from "./components/Header";
import "./App.css";
import ArticlesList from "./components/ArticlesList";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path={"/"} element={<ArticlesList />} />
            <Route path={"/topics/:topic_slug"} element={<ArticlesList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
