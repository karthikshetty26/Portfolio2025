import { useMemo, memo } from 'react';
import HOMECSS from './Landing.module.css';
import CircularText from '@/components/rotating-circular-text/rotating-circular-text';
import TechItem from '@/components/tech-item/tech-item'
import Image from 'next/image';
import GmailLogo from '@/assets/img/svg/social/gmail-logo.svg'
import LinkedinLogo from '@/assets/img/svg/social/linkedin-logo.svg'
import GitHubLogo from '@/assets/img/svg/social/github-logo.svg'

// Home Component - Main landing page for the portfolio website
export default function Home() {
  // HomeIcons Component supporting multiple paths for flexibility in SVG icons
  const HomeIcons = memo(({ paths }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="currentColor">
      {paths.map((path, index) => (
        <path key={index} d={path} /> // Render multiple paths if provided
      ))}
    </svg>
  ));
  HomeIcons.displayName = 'HomeIcons';

  // using useMemo to avoid recreation on re-renders
  // Array to store tech stack data structure
  const TECH_STACK = useMemo(() => [
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
  ])

  // Array to store the project details
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

  // Array to store the blog details
  const blogs = useMemo(() => [
    {
      id: "1",
      name: "Complete Guide to JavaScript List Operations",
      platform: "hashnode.dev",
      platform_profile: "https://karthikshetty.hashnode.dev/",
      link: "https://karthikshetty.hashnode.dev/complete-guide-to-javascript-list-operations"
    },
    {
      id: "2",
      name: "Synchronous and Asynchronous in JavaScript",
      platform: "medium.com",
      platform_profile: "https://medium.com/@Karthikshetty26",
      link: "https://medium.com/@Karthikshetty26/synchronous-and-asynchronous-in-javascript-952e16ce7d4f"
    },
    {
      id: "3",
      name: "Comparing Arrays in Java and JavaScrip",
      platform: "medium.com",
      platform_profile: "https://medium.com/@Karthikshetty26",
      link: "https://medium.com/@Karthikshetty26/comparing-arrays-in-java-and-javascript-understanding-the-key-differences-868a48a64b9f"
    },
    {
      id: "4",
      name: "Getting Started with Docker",
      platform: "medium.com",
      platform_profile: "https://medium.com/@Karthikshetty26",
      link: "https://medium.com/@Karthikshetty26/getting-started-with-docker-windows-10-11-5ac2e928fefd"
    }
  ])

  // Contact links data for easier scalability and readability
  const SOCIAL_LINKS = [
    { href: 'mailto:karthikkanyana26@gmail.com', src: GmailLogo, alt: 'Gmail' },
    { href: 'https://www.linkedin.com/in/karthikshetty26/', src: LinkedinLogo, alt: 'LinkedIn' },
    { href: 'https://github.com/karthikshetty26', src: GitHubLogo, alt: 'GitHub' }
  ];

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

      {/* Blogs Section */}
      <section className={HOMECSS.blogs_section} id="blogs">
        <h1>Blogs</h1>
        <div className={HOMECSS.blogs_container}>
          {blogs.map((blog) => (
            <div key={blog.id} className={HOMECSS.blog_container}>
              <span>

                {/* Link to the platform profile */}
                <a className={HOMECSS.platform_profile_link} href={blog.platform_profile} target='_blank'>
                  <p>{blog.platform}</p>
                  <span className={HOMECSS.icon__platform_profile_link}>
                    <HomeIcons paths={["M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"]} />
                  </span>
                </a>

                {/* Link to the blog post */}
                <a className={HOMECSS.blog_link} href={blog.link} target='_blank'>
                  <h2>{blog.name}</h2>
                  <span className={HOMECSS.icon__blog_link}>
                    <HomeIcons paths={["M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"]} />
                  </span>
                </a>
              </span>

            </div>
          ))}
        </div>
        <p className={HOMECSS.list_all_blogs}>Check out all blogs on <a href='https://medium.com/@Karthikshetty26'>medium.com</a> and <a href='https://medium.com/@Karthikshetty26'>hashnode.dev</a></p> 
      </section>

      {/* Contact Section */}
      <section className={HOMECSS.contact_section} id="contact">
        <h1>Contact</h1>
        <div className={HOMECSS.contact_container}>
          <p>Got something in mind or just want to connect? Feel free to reach out!</p>

          {/* Social Links List */}
          <ul className={HOMECSS.social_ul}>
            {SOCIAL_LINKS.map(({ href, src, alt }) => (
              <li key={alt}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={src}
                    alt={alt}
                    width={24}
                    height={24}
                    className={HOMECSS.tech_logo}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}