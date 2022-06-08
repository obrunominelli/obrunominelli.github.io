import{ Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { about } from '../data/about';
import { images } from '../data/images';
import styles from '../styles/About.module.css';

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <main className={ styles.container_about }>
          <h1>{'</sobre>'}</h1>
          <article className={ styles.container_article }>
            <figure>
                <img src={images.brunoMinelliPicture.src} alt={images.brunoMinelliPicture.alt} className={ styles.img }/>
              <figcaption>
                <p>Bruno Minelli | Desenvolvedor Web</p>
              </figcaption>
            </figure>
            <section>
              { about.map((paragraph, index) => <p key={`paragraph-${index}`}>{paragraph}</p>)}
            </section>
          </article>
        </main>
        <Footer />
      </>
    );
  }
}

export default About;
