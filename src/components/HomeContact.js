import{ Component } from 'react';
import contact from '../data/contact';
import { images } from '../data/images';

class HomeContact extends Component {
  render() {
    return (
      <article className="flex-container row background-color-purple">
        <section className="flex-container col">
          <h1 className="content-title-white">Contato</h1>
          <p className="content-text-white">Gostaria de um sistema web ou de um site de uso pessoal ou profissional?</p>
          <p className="content-text-white">Eu desenvolvo da forma que desejar.</p>
          <figure className="flex-container">
            <img src={ images.paperAirplanes.src } alt={ images.paperAirplanes.alt } className="content-image-auto"/>
          </figure>
        </section>
        <section className="flex-container col">
          <a href={ contact.linkedIn.url } target="_blank" rel="noreferrer" className="content-text-white link">
            <img src={ contact.linkedIn.src } alt={ contact.linkedIn.alt } className="contact-icon" />
            obrunominelli
          </a>
          <a href={ contact.github.url } target="_blank" rel="noreferrer" className="content-text-white link">
            <img src={ contact.github.src } alt={ contact.github.alt } className="contact-icon" />
            obrunominelli
          </a>
          <a href={ contact.telegram.url } target="_blank" rel="noreferrer" className="content-text-white link">
            <img src={ contact.telegram.src } alt={ contact.telegram.alt } className="contact-icon" />
            obrunominelli
          </a>
          <a href={ contact.email.url } target="_blank" rel="noreferrer" className="content-text-white link">
            <img src={ contact.email.src } alt={ contact.email.alt } className="contact-icon" />
            obrunominelli
          </a>
        </section>
      </article>
    );
  }
}

export default HomeContact;
