import { Container } from "../../../components/Container.styled";
import { convertDateFn } from "../../../utils/convertDate";

const BlogDetails = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`http://localhost:3001/blog/${id}`);
  const post = await response.json();

  return (
    <Container>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <span>author: {post.author}</span>
          <span>{convertDateFn(post.date)}</span>
        </div>
      </main>
    </Container>
  );
};

export default BlogDetails;
