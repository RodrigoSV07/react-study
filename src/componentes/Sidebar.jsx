import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';


export function Sidebar(){
  return( 
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://media.istockphoto.com/id/638620962/pt/foto/sifting-through-streams-of-data.jpg?s=1024x1024&w=is&k=20&c=if002cPqxJVqhkhrS0dtXI_2qq6z7x-AhNMSocn0T_w=" 
       />

      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/108432234?v=4" alt="" />

        <strong>Rodrigo Sales</strong>
        <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Edite seu perfil</a>
        </footer>
    </aside>
  );
}