import React from "react";
import Link from "next/link";
import { Container } from "../../components/Container.styled";
import {
  PageListGroup,
  PageCard,
} from "../../components/PostList/PostList.styled";

const PostPage = async () => {
  const response = await fetch("http://localhost:3001/blog");
  const data = await response.json();
  console.log(data);
  return (
    <Container>
      <main>
        <h1>Posts Page</h1>
        <PageListGroup>
          {data.map((post) => (
            <PageCard key={post.id}>
              <Link href={`/posts/${post._id}`}>{post.title}</Link>
            </PageCard>
          ))}
        </PageListGroup>
      </main>
    </Container>
  );
};

export default PostPage;
