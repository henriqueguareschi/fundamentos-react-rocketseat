import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/81583752?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Henrique Guareschi</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de novembro às 14:00" dateTime="2024-04-11 14:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>Estou estudando React na Rocketseat! 🚀</p>
        <p>
          <a
            href="https://www.linkedin.com/in/henriqueguareschi/"
            target="_blank"
          >
            Meu LinkedIn
          </a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#react</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
