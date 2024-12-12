import { Container } from "../../../components/Container.styled";

const BlogDetails = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await response.json();

  return (
    <Container>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </Container>
  );
};

export default BlogDetails;
