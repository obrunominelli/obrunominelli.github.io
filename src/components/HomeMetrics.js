import{ Component } from 'react';
import styles from '../styles/Home.module.css';

class HomeMetrics extends Component {
  render() {
    return (
      <article className={ styles.container_border }>
        <section className={ styles.container_metric }>
          <h1>+15</h1>
          <h2>Projetos concluídos</h2>
        </section>
        <section className={ styles.container_metric }>
          <h1>+8</h1>
          <h2>Anos de experiência</h2>
        </section>
      </article>
    );
  }
}

export default HomeMetrics;
