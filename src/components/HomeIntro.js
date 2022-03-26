import{ Component } from 'react';
import { images } from '../data/images';

class HomeIntro extends Component {
  render() {
    return (
      <article className="flex-container">
        <div className="row background-color-auto">
          <section className="flex-contaier col">
            <div className="flex-container col">
              <h1 className="content-title-auto">
                Olá,<br />eu sou <strong className="content-text-highlight">Bruno Minelli</strong>
              </h1>
              <h2 className="content-subtitle-auto">Desenvolvedor Web</h2>
            </div>
            <nav className="flex-container row">
              <button type="button" className="button-auto button-white">Contato</button>
              <button type="button" className="button-auto button-purple">Projetos</button>
            </nav>
          </section>
          <figure className="flex-container">
            <img src={ images.laptop.src } alt={ images.laptop.alt } className="content-image-auto"/>
          </figure>
        </div>
      </article>
    );
  }
}

export default HomeIntro;
