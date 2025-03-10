import { useMemo } from 'react';
import HOMECSS from './Landing.module.css';
import CircularText from '@/components/rotating-circular-text/rotating-circular-text';
import TechItem from '@/components/tech-item/tech-item'

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
            <span key={`char-${index}-${char}`} className={HOMECSS[charClass]}>
              {char}
            </span>
          );
        })}
      </>
    );
  };

  // Tech stack data structure
  const TECH_STACK = [
    {
      category: "Frontend",
      technologies: ["HTML", "CSS", "JavaScript", "Typescript", "Angular", "React", "Next.Js", "SASS", "Bootstrap"]
    },
    {
      category: "Backends",
      technologies: ["Java", "Spring Boot", "Node.js", "Express.js", "RESTful APIs"]
    },
    {
      category: "Database",
      technologies: ["MySQL", "PostgreSQL"]
    },
    {
      category: "Tools & Other",
      technologies: ["Git", "GitHub", "Figma", "Postman", "WordPress"]
    }
  ];

  // Array to store the project details - using useMemo to avoid recreation on re-renders
  const projects = useMemo(() => [
    {
      id: "_1",
      top_info: "Personal Project",
      name: "WebToolSmith",
      tech: ["React", "Next.js 15", "HTML5", "CSS3", "JavaScript"]
    },
    {
      id: "_2",
      top_info: "Feb 2023 - Sep 2023",
      name: "PayTimePlus (Employee Management)",
      tech: ["Angular 13", "TypeScript", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Java", "Spring Boot", "MySQL"]
    },
    {
      id: "_3",
      top_info: "Sep 2023 - Nov 2023",
      name: "UTouch Digital Library",
      tech: ["Angular 16", "TypeScript", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Strapi CMS"]
    },
    {
      id: "_4",
      top_info: "Apr 2024 - Jul 2024",
      name: "AI DocSense",
      tech: ["Angular 16", "TypeScript", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Python", "Java", "Spring Boot", "MySQL"]
    },
    {
      id: "_5",
      top_info: "Dec 2023 - Present",
      name: "RentAll (Equipment Rental)",
      tech: ["Angular 17", "TypeScript", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Java", "Spring Boot", "MySQL"]
    },
    {
      id: "_6",
      top_info: "Aug 2024 - Present",
      name: "Automated AP-BPM",
      tech: ["Angular 18", "TypeScript", "JavaScript", "HTML", "CSS", "Java", "Spring Boot", "Keycloak", "PostgreSQL", "Docker"]
    }
  ]);

  return (
    <main className={HOMECSS.container_main}>

      {/* Hero section with introduction */}
      <section className={HOMECSS.hero_section} id='home'>
        <div className={HOMECSS.hero_text}>
          <h1>
            <span>Karthik</span> <span>Shetty</span>
          </h1>
          <div className={HOMECSS.hero_section_hr}></div>

          <div className={HOMECSS.intro}>
            <p className={HOMECSS.intro_start}>Hey there! I&apos;m a passionate</p>
            <h2 className={HOMECSS.role}>
              <span>FULLSTACK</span><br />
              <span>Web&nbsp;&nbsp;&nbsp;Developer</span>
              &nbsp;&nbsp;
              <span className={HOMECSS.location}>from India.</span>
            </h2>
          </div>

          {/* Stats container showing experience metrics */}
          <div className={HOMECSS.hero_container}>
            {[
              { value: '2+', description: 'Years of Experience' },
              { value: '6', description: 'Completed Projects' },
              { value: '4.6k+', description: 'Hours Worked' }
            ].map((stat, index) => (
              <div key={`stat-${index}`} className={HOMECSS.hero_container_content}>
                <span>{stat.value}</span>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section with professional summary */}
      <section className={HOMECSS.about_section} id='about'>

        {/* Empty box to maintain space when the user selects About in the navigation sidebar. */}
        <div className={HOMECSS.about_blank}></div>
        <h2>
          I specialize in building <strong>scalable</strong>, <strong>high-performance</strong> web applications
          with a strong focus on usability, efficiency, and seamless user experiences.
        </h2>
        <div className={HOMECSS.about_content}>
          <p>
            with a <strong>strong</strong> background in both frontend and backend development,
            i love turning ideas into functional, user-friendly solutions. whether it&apos;s optimizing
            UI for seamless <strong>user experiences</strong> or building robust backend architectures,
            i&apos;m always eager to push the boundaries of web development.
            <br /><br />
            constantly learning and improving, i aim to create impactful digital solutions that
            align with <strong>business goals</strong> and enhance user experiences.
          </p>
          <div className={HOMECSS.circular_hold}>
            <CircularText
              text="•  Hi  I'm  Karthik  Shetty "
              diameter={200}
              fontSize={14}
            />
          </div>
        </div>
      </section>

      {/* Stack section */}
      <section className={HOMECSS.stack_section} id='stack'>
        {/* Map through each stack category */}
        {TECH_STACK.map((stack, index) => (
          <div key={index} className={HOMECSS.stack_container}>
            {/* Display category name */}
            <div className={HOMECSS.stack_category}>{stack.category}</div>
            {/* Display technologies list */}
            <ul className={HOMECSS.stack_list}>
              {/* Map through technologies in the current category */}
              {stack.technologies.map((techName, techIndex) => (
                <TechItem key={techIndex} name={techName} />
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className={HOMECSS.projects_section} id="projects">
        <h1>Projects</h1>
        {projects.map((project) => (
          <div key={project.id} className={HOMECSS.project_container}>
            <p className={HOMECSS.no}>{project.id}</p>
            <span>
              <p>{project.top_info}</p>
              <h2>{project.name}</h2>
              <ul>
                {project.tech.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </span>
          </div>
        ))}
      </section>

    </main>
  );
}