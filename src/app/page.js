import styles from "./page.module.css";
import { Container } from "./components/Container";

const Home = () => {
  console.log(posts);
  return (
    <div>
      <main className={styles.main}>
        <h1>Welcome to my blog</h1>
        <Container></Container>
        <p>
          Explore articles on topics that inspire, inform, and engage. Dive into
          the latest technology notes, insights, and ideas.
        </p>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
