import styles from "./page.module.css";
import { Container } from "../components/Container.styled";

const Home = () => {
  return (
    <Container>
      <main className={styles.main}>
        <h1>Welcome to my blog</h1>
        <p>
          Explore articles on topics that inspire, inform, and engage. Dive into
          the latest technology notes, insights, and ideas.
        </p>
      </main>
    </Container>
  );
};

export default Home;
