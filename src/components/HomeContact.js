import{ Component } from 'react';
import contact from '../data/contact';
import { images } from '../data/images';

class HomeContact extends Component {
  render() {
    return (
      <article>
        <section>
          <h1>Contato</h1>
          <p>Gostaria de um sistema web ou de um site de uso pessoal ou profissional?</p>
          <p>Eu desenvolvo da forma que desejar.</p>
          <figure>
            <img src={ images.paperAirplanes.src } alt={ images.paperAirplanes.alt }/>
          </figure>
        </section>
        <section>
          <a href={ contact.linkedIn.url } target="_blank" rel="noreferrer">
            <img src={ contact.linkedIn.src } alt={ contact.linkedIn.alt } />
            obrunominelli
          </a>
          <a href={ contact.github.url } target="_blank" rel="noreferrer">
            <img src={ contact.github.src } alt={ contact.github.alt }/>
            obrunominelli
          </a>
          <a href={ contact.telegram.url } target="_blank" rel="noreferrer">
            <img src={ contact.telegram.src } alt={ contact.telegram.alt }/>
            obrunominelli
          </a>
          <a href={ contact.email.url } target="_blank" rel="noreferrer">
            <img src={ contact.email.src } alt={ contact.email.alt }/>
            obrunominelli
          </a>
        </section>
      </article>
    );
  }
}

export default HomeContact;
