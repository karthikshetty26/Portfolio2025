import homeCSS from './Home.module.css';
import CircularText from '@/components/rotating-circular-text/rotating-circular-text';

// Home Component - Main landing page for the portfolio website

export default function Home() {
  // Map of special characters that need custom styling
  // Key represents the style class name, value is an array of characters to apply that style to
  const specialChars = {
    secondary: ['w', 't', 'b', 'o'],
  };

  /**
   * SplitText Component - Splits text into individual letter spans
   * Assigns special classes to specific characters defined in specialChars
   * @param {Object} props - Component props
   * @param {string} props.text - Text to be split into individual characters
   * @returns {JSX.Element} Collection of styled spans
   */

  const SplitText = ({ text }) => {
    // Early return for empty text to avoid unnecessary processing
    if (!text) return null;
    
    return (
      <>
        {text.split('').map((char, index) => {
          // Find appropriate class for this character
          let charClass = '';
          
          // Check if current character matches any in our special characters map
          for (const [key, chars] of Object.entries(specialChars)) {
            if (chars.includes(char.toLowerCase())) {
              charClass = `span_${key}`;
              break; // Exit loop once a match is found
            }
          }

          return (
            <span key={`char-${index}-${char}`} className={homeCSS[charClass]}>
              {char}
            </span>
          );
        })}
      </>
    );
  };

  return (
    <main className={homeCSS.container_main}>
      {/* Hero section with introduction */}
      <section className={homeCSS.hero_section} id='HOME'>
        <div className={homeCSS.hero_text}>
          <h1>
            <span>Karthik</span> <span>Shetty</span>
          </h1>
          <div className={homeCSS.hero_section_hr}></div>

          <div className={homeCSS.intro}>
            <p className={homeCSS.intro_start}>Hey there! I'm a passionate</p>
            <h2 className={homeCSS.role}>
              <span>FULLSTACK</span><br />
              <span>Web&nbsp;&nbsp;&nbsp;Developer</span>
              &nbsp;&nbsp;
              <span className={homeCSS.location}>from India.</span>
            </h2>
          </div>

          {/* Stats container showing experience metrics */}
          <div className={homeCSS.hero_container}>
            {[
              { value: '2+', description: 'Years of Experience' },
              { value: '6', description: 'Completed Projects' },
              { value: '4.6k+', description: 'Hours Worked' }
            ].map((stat, index) => (
              <div key={`stat-${index}`} className={homeCSS.hero_container_content}>
                <span>{stat.value}</span>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section with professional summary */}
      <section className={homeCSS.about_section} id='ABOUT'>
        <h2>
          I specialize in building <strong>scalable</strong>, <strong>high-performance</strong> web applications 
          with a strong focus on usability, efficiency, and seamless user experiences.
        </h2>
        <div className={homeCSS.about_content}>
          <p>
            with a <strong>strong</strong> background in both frontend and backend development, 
            i love turning ideas into functional, user-friendly solutions. whether it's optimizing 
            UI for seamless <strong>user experiences</strong> or building robust backend architectures, 
            i'm always eager to push the boundaries of web development.
            <br /><br />
            constantly learning and improving, i aim to create impactful digital solutions that 
            align with <strong>business goals</strong> and enhance user experiences.
          </p>
          <div className={homeCSS.circular_hold}>
            <CircularText
              text="•  Hi  I'm  Karthik  Shetty "
              diameter={200}
              fontSize={14}
            />
          </div>
        </div>
      </section>
    </main>
  );
}