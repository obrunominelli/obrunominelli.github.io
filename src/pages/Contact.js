import{ Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import contact from '../data/contact';

class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <article className="flex-container">
          <div className="background-color-purple col">
            <section className="flex-container row">
              <div className="block">
                <h1 className="content-title-white">Do que você precisa?</h1>
                <p className="content-text-white">Gostaria de um sistema web ou de um site de uso pessoal ou profissional?</p>
                <p className="content-text-white">Eu desenvolvo da forma que desejar.</p>
              </div>
              <div className="block">
                <h2 className="content-title-white">Serviços</h2>
                <p className="content-text-white">Desenvolvimento Web Frontend</p>
                <p className="content-text-white">Desenvolvimento Web Backend</p>
                <p className="content-text-white">Desenvolvimento Web Fullstack</p>
              </div>
            </section>
            <section className="flex-container">
                <div className="col">
                  <a href={ contact.linkedIn.url } target="_blank" rel="noreferrer" className="row content-text-white link">
                    <img src={ contact.linkedIn.src } alt={ contact.linkedIn.alt } className="contact-icon" />
                    obrunominelli
                  </a>
                  <a href={ contact.github.url } target="_blank" rel="noreferrer" className="row content-text-white link">
                    <img src={ contact.github.src } alt={ contact.github.alt } className="contact-icon" />
                    obrunominelli
                  </a>
                </div>
                <div className="col">
                  <a href={ contact.telegram.url } target="_blank" rel="noreferrer" className="row content-text-white link">
                    <img src={ contact.telegram.src } alt={ contact.telegram.alt } className="contact-icon" />
                    obrunominelli
                  </a>
                  <a href={ contact.email.url } target="_blank" rel="noreferrer" className="row content-text-white link">
                    <img src={ contact.email.src } alt={ contact.email.alt } className="contact-icon" />
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
