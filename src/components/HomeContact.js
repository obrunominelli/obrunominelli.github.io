import{ Component } from 'react';
import contacts from '../data/contacts';
import { images } from '../data/images';
import styles from '../styles/Home.module.css';

class HomeContact extends Component {
  render() {
    return (
      <article className={ styles.container_contact}>
        <section className={ styles.container_contact_block }>
          <h1>Contato</h1>
          <p>Gostaria de um sistema web ou de um site de uso pessoal ou profissional?</p>
          <p>Eu desenvolvo da forma que desejar.</p>
          <figure>
            <img src={ images.paperAirplanes.src } alt={ images.paperAirplanes.alt } className={ styles.container_image }/>
          </figure>
        </section>
        <section className={ styles.container_contact_block }>
          {contacts.map((contact) => (
            <a href={ contact.url } target="_blank" rel="noreferrer" key={ contact.alt } className={ styles.social_link }>
              <img src={ contact.src } alt={ contact.alt } className={ styles.social_icon } />
            </a>
          ))}
        </section>
      </article>
    );
  }
}

export default HomeContact;
