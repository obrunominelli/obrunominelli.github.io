import{ Component } from 'react';

class HomeMetrics extends Component {
  render() {
    return (
      <article className="row">
        <div className="flex-container container">
          <section className="block">
            <h1 className="content-title-auto">+15</h1>
            <h2 className="content-text-grey">Projetos concluídos</h2>
          </section>
          <section className="block">
            <h1 className="content-title-auto">+8</h1>
            <h2 className="content-text-grey">Anos de experiência</h2>
          </section>
        </div>
      </article>
    );
  }
}

export default HomeMetrics;
