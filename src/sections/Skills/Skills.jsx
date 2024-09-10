import styles from "./Skills.styles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import {useTheme} from "../../common/ThemeContext";
function Skills() {
    const {theme} =useTheme();
    const checkMarkIcon=theme ==='light'?checkMarkIconLight:checkMarkIconDark;
  return (
   <section id="skills" className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML5"/>
        <SkillList src={checkMarkIcon} skill="CSS3"/>
        <SkillList src={checkMarkIcon} skill="Javascript"/>
        <SkillList src={checkMarkIcon} skill="Nodejs"/>
        <SkillList src={checkMarkIcon} skill="Expressjs"/>
    </div>
    <hr/>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Reactjs"/>
        <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
        <SkillList src={checkMarkIcon} skill="Bootstrap"/>
    </div>
    <hr/>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Mongoodb"/>
        <SkillList src={checkMarkIcon} skill="MySQL"/>
    </div>
   </section>
  )
}

export default Skills