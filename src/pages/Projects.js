import{ Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { projects } from '../data/projects';

class Projects extends Component {
  render() {
    return (
      <>
        <Header />
          <main>
            <article>
              {
                projects.map((project) => (
                  <section key={project.title}>
                    <div>
                      <h2>{project.title}</h2>
                      <p>{project.deadline}</p>
                      <p>{project.description}</p>
                    </div>
                    <div>
                      <h3>Equipe</h3>
                      {project.team.map((member) => <p key={ member }>{member}</p>)}
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
