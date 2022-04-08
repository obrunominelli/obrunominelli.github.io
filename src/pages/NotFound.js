import{ Component } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../data/images';

class NotFound extends Component {
  render() {
    return (
      <article>
        <h1>{`</ Erro 404 >`}</h1>
        <img src={images.brokenRobot.src} alt={images.brokenRobot.alt}/>
        <p>Eita... acho que esta página não existe!</p>
        <p>Não se preocupe! Você pode voltar ao portfólio <Link to="/">clicando aqui!</Link></p>
      </article>
    );
  }
}

export default NotFound;
