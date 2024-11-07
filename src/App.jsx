import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/81583752?v=4",
      name: "Henrique Guareschi",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Boa tarde!" },
      { type: "paragraph", content: "Continuo estudando na Rocketseat!" },
      {
        type: "link",
        content: "https://www.linkedin.com/in/henriqueguareschi/",
      },
    ],
    publishedAt: new Date("2024-11-06 14:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/81583752?v=4",
      name: "Henrique Guareschi",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      { type: "paragraph", content: "Estou estudando React na Rocketseat! 🚀" },
      {
        type: "link",
        content: "https://www.linkedin.com/in/henriqueguareschi/",
      },
    ],
    publishedAt: new Date("2024-11-03 16:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar>sidebar</Sidebar>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
