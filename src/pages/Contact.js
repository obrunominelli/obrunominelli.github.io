import{ Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import contacts from '../data/contacts';
import jobs from '../data/jobs';
import styles from '../styles/Contact.module.css';

class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <main className={ styles.container }>
          <h1>{'</contato>'}</h1>
          <div className={ styles.container_contact }>
            <article className={ styles.container_contact_row }>
              <section className={ styles.container_contact_col }>
                <h1>Do que você precisa?</h1>
                <div className={ styles.container_job }>
                  {jobs.map((job) => (
                    <p key={ job } className={ styles.job_card }>{job}</p>
                  ))}
                </div>
              </section>
            </article>
            <section className={ styles.container_contact_row }>
              {
                contacts.map((contact) => (
                  <a href={ contact.url } target="_blank" rel="noreferrer" key={ contact.alt } className={ styles.social_link }>
                    <img src={ contact.src } alt={ contact.alt } className={ styles.social_icon}/>
                  </a>
                ))
              }
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Contact;
