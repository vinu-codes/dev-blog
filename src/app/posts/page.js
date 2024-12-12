import React from "react";
import Link from "next/link";

const PostPage = async () => {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  console.log({ data });
  return (
    <main>
      <h1>Posts Page</h1>
    </main>
  );
};

export default PostPage;
