import css from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <main className={css.main}>
      <div className={css.hero}>
        <h1 className={css.title}>Welcome to NoteHub</h1>
        <p className={css.subtitle}>
          Organize your notes effortlessly and stay productive.
        </p>

      <div className={css.intro}>
        <p className={css.introText}>
          NoteHub helps you keep everything in one place. Start organizing your thoughts today!
        </p>
          <Link href="/notes/filter/All">
              <button className={css.actionButton}>Get Started</button>
          </Link>
      </div>
      </div>


    </main>
  );
};

export default Home;
