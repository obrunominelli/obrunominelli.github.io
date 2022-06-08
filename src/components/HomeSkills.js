import skills from '../data/skills';
import styles from '../styles/Home.module.css';

const HomeSkills = () => {
  return (
    <article className={ styles.container_skills }>
      <h1>Habilidades</h1>
      <section>
        <h2>Hard Skills</h2>
        <div className={ styles.container_skills_block}>
          { skills.hardSkills.map((skill, index) => <p key={`skill-${index}`} className={ styles.container_skills_card }>{skill}</p>) }
        </div>
      </section>
      <section>
        <h2>Soft Skills</h2>
        <div className={ styles.container_skills_block}>
          { skills.softSkills.map((skill, index) => <p key={`skill-${index}`} className={ styles.container_skills_card }>{skill}</p>) }
        </div>
      </section>
    </article>
  );
}

export default HomeSkills;
