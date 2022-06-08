import { projects } from '../data/projects';
import styles from '../styles/Home.module.css';

const HomeMetrics = () => {
  const currentYear = new Date().getFullYear();
  const begeningYear = 2014;
  return (
    <article className={ styles.container_border }>
      <section className={ styles.container_metric }>
        <h1>{ projects.length }</h1>
        <h2>Projetos concluídos</h2>
      </section>
      <section className={ styles.container_metric }>
        <h1>{ currentYear - begeningYear }</h1>
        <h2>Anos de experiência</h2>
      </section>
    </article>
  );
}

export default HomeMetrics;
