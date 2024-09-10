import React from 'react';
import styles  from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png"
import freshBurger from "../../assets/fresh-burger.png"
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectContainer}>
            <ProjectCard src={viberr} link={"https://github.com/includewasim/ExpenseTracker"} title={"Expense Tracker"} info={"MERN APP"}/>
            <ProjectCard src={freshBurger} link={"https://github.com/includewasim/FireChat"} title={"Fire Chat"} info={"CHAT APP"}/>
        </div>
    </section>
  )
}

export default Projects