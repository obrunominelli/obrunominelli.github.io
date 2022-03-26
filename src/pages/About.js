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
        <main className="flex-container row">
          <article className="flex-container col">
            <h1 className="content-title-purple">Sobre mim</h1>
            { about.map((paragraph) => <p className="content-text-auto">{paragraph}</p>)}
          </article>
          <figure className="flex-container col">
            <img src={images.brunoMinelliPicture.src} alt={images.brunoMinelliPicture.alt} className="content-image-rounded"/>
            <figcaption className="block">
              <p className="content-text-grey">Bruno Minelli | Desenvolvedor Web</p>
            </figcaption>
          </figure>
        </main>
        <Footer />
      </>
    );
  }
}

export default About;
