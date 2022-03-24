import{ Component } from 'react';
import skills from '../data/skills';

class HomeSkills extends Component {
  render() {
    return (
      <article className="flex-container">
        <section className="flex-container col">
          <h1 className="content-title-purple">Habilidades</h1>
          <div className="skills">
            { skills.hardSkills.map((skill) => <p className="skill-block content-text-auto">{skill}</p>) }
          </div>
        </section>
      </article>
    );
  }
}

export default HomeSkills;
