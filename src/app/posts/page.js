import React from "react";
import Link from "next/link";
import { Container } from "../../components/Container.styled";
import { Group } from "../../components/PostList/PostList.styled";

const PostPage = async () => {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();
  return (
    <Container>
      <main>
        <h1>Posts Page</h1>
        <Group>
          {data.posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </Group>
      </main>
    </Container>
  );
};

export default PostPage;
