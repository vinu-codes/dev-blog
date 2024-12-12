import React from "react";
import Link from "next/link";
import { Container } from "../../components/Container.styled";

const PostPage = async () => {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  console.log({ data });
  return (
    <Container>
      <main>
        <h1>Posts Page</h1>
      </main>
    </Container>
  );
};

export default PostPage;
