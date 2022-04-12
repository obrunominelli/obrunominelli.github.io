import{ Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import contacts from '../data/contacts';

class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <article>
          <div>
            <section>
              <div>
                <h1>Do que você precisa?</h1>
                <p>Gostaria de um sistema web ou de um site de uso pessoal ou profissional?</p>
                <p>Eu desenvolvo da forma que desejar.</p>
              </div>
              <div>
                <h2>Serviços</h2>
                <p>Desenvolvimento Web Frontend</p>
                <p>Desenvolvimento Web Backend</p>
                <p>Desenvolvimento Web Fullstack</p>
              </div>
            </section>
            <section>
              {
                contacts.map((contact) => (
                  <a href={ contact.url } target="_blank" rel="noreferrer">
                    <img src={ contact.src } alt={ contact.alt }/>
                    obrunominelli
                  </a>
                ))
              }
            </section>
          </div>
        </article>
        <Footer />
      </>
    );
  }
}

export default Contact;
