import{ Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { projects } from '../data/projects';

class Projects extends Component {
  render() {
    return (
      <>
        <Header />
          <main className="flex-container">
            <article className="row">
              {
                projects.map((project) => (
                  <section className="project">
                    <h2 className="content-title-white-border">{project.title}</h2>
                    <p className="content-text-white">{project.description}</p>
                    <img src='' alt={`${project.thumbnail.alt} ${project.title}`} />
                  </section>
                ))
              }
            </article>
          </main>
        <Footer />
      </>
    );
  }
}

export default Projects;
