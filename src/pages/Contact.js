import{ Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import contact from '../data/contact';

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
                <div className="col">
                  <a href={ contact.linkedIn.url } target="_blank" rel="noreferrer">
                    <img src={ contact.linkedIn.src } alt={ contact.linkedIn.alt }/>
                    obrunominelli
                  </a>
                  <a href={ contact.github.url } target="_blank" rel="noreferrer">
                    <img src={ contact.github.src } alt={ contact.github.alt }/>
                    obrunominelli
                  </a>
                </div>
                <div className="col">
                  <a href={ contact.telegram.url } target="_blank" rel="noreferrer">
                    <img src={ contact.telegram.src } alt={ contact.telegram.alt }/>
                    obrunominelli
                  </a>
                  <a href={ contact.email.url } target="_blank" rel="noreferrer">
                    <img src={ contact.email.src } alt={ contact.email.alt }/>
                    obrunominelli
                  </a>
                </div>
            </section>
          </div>
        </article>
        <Footer />
      </>
    );
  }
}

export default Contact;
