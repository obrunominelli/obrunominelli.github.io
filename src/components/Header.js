import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <h1>{`</ bruno minelli >`}</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/contact">Contato</Link>
        </nav>
    </header>
  );
}

export default Header;