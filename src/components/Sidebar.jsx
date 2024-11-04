import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://tinyurl.com/coverimg" />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/81583752?v=4" />

        <strong>Henrique Guareschi</strong>
        <span>Web Developer</span>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
