import { useState } from 'react';
import "./global.css";
import { Header } from './componentes/header.jsx';
import styles from './App.module.css';
import { Sidebar } from './componentes/sidebar.jsx';
import { Post } from './componentes/Post.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          
        </main>
      </div>
    </div>
  )
}

export default App
