import contacts from '../data/contacts';
import { images } from '../data/images';
import styles from '../styles/Home.module.css';

const HomeContact = () => {
  return (
    <article className={ styles.container_contact}>
        <section className={ styles.container_block }>
          <h1>Contato</h1>
          <div className={styles.container_social}>
            {contacts.map((contact) => (
              <a href={ contact.url } target="_blank" rel="noreferrer" key={ contact.alt } className={ styles.social_link }>
                <img src={ contact.src } alt={ contact.alt } className={ styles.social_icon } />
              </a>
            ))}
          </div>
        </section>
        <figure className={ styles.container_block }>
          <img src={ images.paperAirplanes.src } alt={ images.paperAirplanes.alt } className={ styles.container_image }/>
        </figure>
    </article>
  );
};

export default HomeContact;
