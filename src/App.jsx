import React from "react";
import blog from "./blog";

import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import ArticleList from "./components/ArticleList.jsx";

function App() {
  return (
    <>
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.posts} />
    </>
  );
}

export default App;