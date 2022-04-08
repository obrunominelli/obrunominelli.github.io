import{ Component } from 'react';
import skills from '../data/skills';

class HomeSkills extends Component {
  render() {
    return (
      <article>
        <section>
          <h1>Habilidades</h1>
          <div>
            { skills.hardSkills.map((skill, index) => <p key={`skill-${index}`}>{skill}</p>) }
          </div>
        </section>
      </article>
    );
  }
}

export default HomeSkills;
