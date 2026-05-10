import React from "react";
import Article from "./Article.jsx";

function ArticleList(props) {
  const articleItems = props.posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });

  return <main>{articleItems}</main>;
}

export default ArticleList;