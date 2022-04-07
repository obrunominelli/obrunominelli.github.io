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
                  <section key={project.title} className="project">
                    <div className="col">
                      <h2 className="content-title-project">{project.title}</h2>
                      <p className="content-text-white">{project.deadline}</p>
                      <p className="content-text-white">{project.description}</p>
                    </div>
                    <div className="row">
                      <h3 className="content-title-project">Equipe</h3>
                      {project.team.map((member) => <p key={ member } className="content-text-white">{member}</p>)}
                    </div>
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
