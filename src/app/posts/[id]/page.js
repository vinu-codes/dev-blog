import { Container } from "../../../components/Container.styled";

const BlogDetails = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`http://localhost:3001/blog/${id}`);
  const post = await response.json();

  return (
    <Container>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <span>author: {post.author}</span>
        <span>date: {post.date}</span>
      </main>
    </Container>
  );
};

export default BlogDetails;
