import { genericImages } from "../data/images";

const ArticleBanner = () => {
  return (
    <article className="article article-banner">
      <section className="article-block">
        <h1>Olá,</h1>
        <h1>eu sou <strong className="article-highlight">Bruno Minelli</strong></h1>
        <p className="article-medium-content">Frontend Web Developer</p>
        <div className="button-container">
          <button className="button button-white">Contato</button>
          <button className="button button-purple">Projetos</button>
        </div>
      </section>
      <figure className="article-block">
        <img src={ genericImages[0].src } alt={ genericImages[0].alt } className="article-image" />
      </figure>
    </article>
  );
}

export default ArticleBanner;
