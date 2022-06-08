import{ Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { projects } from '../data/projects';
import styles from '../styles/Projects.module.css';

class Projects extends Component {
  render() {
    return (
      <>
        <Header />
          <main className={ styles.container_projects }>
            <h1>{'</projetos>'}</h1>
            {
              projects.map((project) => (
                <a href={ project.url } key={project.title} className={ styles.project_card }>
                  <div className={ styles.project_info }>
                    <h2>{project.title}</h2>
                    <p>{project.deadline}</p>
                    <p>{project.description}</p>
                  </div>
                  <div className={ styles.project_team }>
                    <h3>Equipe</h3>
                    {project.team.map((member) => <p key={ member }>{member}</p>)}
                  </div>
                </a>
              ))
            }
          </main>
        <Footer />
      </>
    );
  }
}

export default Projects;
