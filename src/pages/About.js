import{ Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { about } from '../data/about';
import { images } from '../data/images';

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <article>
            <h1>Sobre mim</h1>
            <figure>
            <img src={images.brunoMinelliPicture.src} alt={images.brunoMinelliPicture.alt}/>
            <figcaption>
              <p>Bruno Minelli | Desenvolvedor Web</p>
            </figcaption>
          </figure>
            { about.map((paragraph, index) => <p key={`paragraph-${index}`}>{paragraph}</p>)}
          </article>
        </main>
        <Footer />
      </>
    );
  }
}

export default About;
