import { Link } from 'react-router-dom';
import { images } from '../data/images';
import styles from '../styles/NotFound.module.css';

const NotFound = () => {
  return (
    <article  className={ styles.container }>
      <section className={ styles.not_found }>
        <h1>{`</ Erro 404 >`}</h1>
        <img src={images.brokenRobot.src} alt={images.brokenRobot.alt}/>
        <p>Eita... acho que esta página não existe!</p>
        <p>Não se preocupe! Você pode voltar ao <Link to="/">{`</portfólio>`}</Link></p>
      </section>
    </article>
  );
}

export default NotFound;
