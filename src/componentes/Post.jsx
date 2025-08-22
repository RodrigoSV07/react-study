import styles from './Post.module.css'

export function Post() {
  return(
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
        <img  className={styles.avatar} src="https://avatars.githubusercontent.com/u/108432234?v=4" alt="" />
        <div className={styles.authorInfo}>
          <strong>Rodrigo Sales</strong>
          <span>Web Developer</span>
        </div>
        </div>

        <time datetime="">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      Fala galeraa 👋

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 jane.design/doctorcare</p>

        <p>#novoprojeto #nlw #rocketseat </p>
      </div>
    </article>
  )
}