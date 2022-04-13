import { images } from '../data/images';
import styles from '../styles/Home.module.css';

const HomeAbout = () => {
  return (
    <article className={ styles.container_about }>
      <section>
        <h1>Um pouco sobre mim...</h1>
        <p>
          Eu sou uma pessoa apaixonada por jogos e por internet desde a infância e tenho mais de oito anos de experiência com tecnologia.
        </p>
        <p>
          Atualmente sou estudante de Desenvolvimento Web Fullstack na Trybe e desenvolvo projetos front-end com React, JavaScript, HTML e CSS.
        </p>
      </section>
      <figure>
        <img src={ images.cellphone.src } alt={ images.cellphone.alt } className={ styles.container_image } />
      </figure>
    </article>
  );
}

export default HomeAbout;
