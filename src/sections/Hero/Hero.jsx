import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../../public/Wasim_Z_Khan (1).pdf'
import { useTheme } from '../../common/ThemeContext.jsx';
function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon= theme==='light' ? sun:moon;
    const twitterIcon= theme==='light' ? twitterLight:twitterDark;
    const githubIcon= theme==='light' ? githubLight:githubDark;
    const linkedinIcon= theme==='light' ? linkedinLight:linkedinDark;
  return (
    <section id='hero' className={styles.container}> 
        <div className={styles.colorModeContainer}>
        <img src={heroImg} alt='Profile Image' className={styles.hero} />
        <img 
            className={styles.colorMode}
            src={themeIcon}
            alt='Color Mode Icon'
            onClick={toggleTheme}
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
            <p className={styles.description}>
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