import{ Component } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../data/images';

class HomeIntro extends Component {
  render() {
    return (
      <article className="flex-container">
        <div className="flex-container background-color-auto">
          <section className="block">
            <div className="flex-container col">
              <h1 className="content-title-auto">
                Olá,<br />eu sou <strong className="content-text-highlight">Bruno Minelli</strong>
              </h1>
              <h2 className="content-subtitle-auto">Desenvolvedor Web</h2>
            </div>
            <nav className="flex-container">
              <Link to="/contact" className="button-auto button-white">Contato</Link>
              <Link to="/projects" className="button-auto button-purple">Projetos</Link>
            </nav>
          </section>
          <figure className="block">
            <img src={ images.laptop.src } alt={ images.laptop.alt } className="content-image-auto"/>
          </figure>
        </div>
      </article>
    );
  }
}

export default HomeIntro;
