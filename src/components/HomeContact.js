import{ Component } from 'react';
import { images } from '../data/images';

class HomeContact extends Component {
  render() {
    return (
      <article className="flex-container row background-color-purple">
        <section className="flex-container col">
          <h1 className="content-title-white">Contato</h1>
          <p className="content-text-white">Gostaria de um sistema web ou de um site de uso pessoal ou profissional?</p>
          <p className="content-text-white">Eu desenvolvo da forma que desejar.</p>
          <figure className="flex-container">
            <img src={ images.paperAirplanes.src } alt={ images.paperAirplanes.alt } className="content-image-auto"/>
          </figure>
        </section>
        <section>
            
        </section>
      </article>
    );
  }
}

export default HomeContact;
