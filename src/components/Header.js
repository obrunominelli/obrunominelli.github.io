import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1>{`</bruno minelli>`}</h1>
        <nav className={styles.nav}>
          <Link to="/" className={styles.nav_link}>Home</Link>
          <Link to="/projects" className={styles.nav_link}>Projetos</Link>
          <Link to="/about" className={styles.nav_link}>Sobre</Link>
          <Link to="/contact" className={styles.nav_link}>Contato</Link>
        </nav>
    </header>
  );
}

export default Header;