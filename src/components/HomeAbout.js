import{ Component } from 'react';
import { images } from '../data/images';

class HomeAbout extends Component {
  render() {
    return (
      <article className="row background-color-purple">
        <div className="flex-container">
          <section className="flex-container col">
            <h1 className="content-title-white">Sobre mim...</h1>
            <p className="content-text-white">
              Eu sou uma pessoa apaixonada por jogos e por internet desde a infância e tenho mais de sete anos de experiência com tecnologia desde a concepção e desenvolvimento de um sistema online até o gerenciamento de infraestrutura de redes de computadores.
            </p>
            <p className="content-text-white">
              Eu já realizei a correção de um banco de dados de um sistema de gestão de eventos da área de medicina em tempo real enquanto estagiário e gerenciei uma rede de mais de cem computadores enquanto servidor público federal.
            </p>
            <p className="content-text-white">
              Atualmente sou estudante de Desenvolvimento Web Fullstack na Trybe e desenvolvo projetos front-end com React, JavaScript, HTML e CSS.
            </p>
          </section>
          <figure className="flex-container">
            <img src={ images.cellphone.src } alt={ images.cellphone.alt } className="content-image-auto"/>
          </figure>
        </div>
      </article>
    );
  }
}

export default HomeAbout;
