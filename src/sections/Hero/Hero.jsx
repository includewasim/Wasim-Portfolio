import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import githubIcon from '../../assets/github-light.svg'
import twitterIcon from "../../assets/twitter-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import CV from '../../../public/Wasim_Z_Khan (1).pdf'
import { useTheme } from '../../common/ThemeContext.jsx';
function Hero() {
    const {theme, toggleTheme} = useTheme();
  return (
    <section id='hero'> 
        <div className={styles.colorModeContainer}>
        <img src={heroImg} alt='Profile Image' className={styles.hero} />
        <img 
            className={styles.colorMode}
            src={themeIcon}
            alt='Color Mode Icon'
        />
        </div>
        <div className={styles.info}>
            <h1>Wasim
                <br/>
                Khan
            </h1>
            <h2>Full Stack Developer </h2>
            <span>
                <a href='https://twitter.com' target='_blank'>
                    <img src={twitterIcon} alt="Twitter Icon" />
                </a>
                <a href='https://github.com' target='_blank'>
                    <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href='https://linkedin.com' target='_blank'>
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
            </span>
            <p>
                With a passion for developing web apps for world
            </p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero