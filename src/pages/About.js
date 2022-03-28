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
        <main className="flex-container col">
          <article className="flex-container col">
            <h1 className="content-title-purple">Sobre mim</h1>
            <figure className="flex-container col">
            <img src={images.brunoMinelliPicture.src} alt={images.brunoMinelliPicture.alt} className="content-image-rounded"/>
            <figcaption className="block">
              <p className="content-text-grey">Bruno Minelli | Desenvolvedor Web</p>
            </figcaption>
          </figure>
            { about.map((paragraph, index) => <p key={`paragraph-${index}`} className="content-text-auto">{paragraph}</p>)}
          </article>
        </main>
        <Footer />
      </>
    );
  }
}

export default About;
