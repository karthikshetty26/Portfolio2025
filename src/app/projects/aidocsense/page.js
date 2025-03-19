import BackButton from '../backButtonProjects';
import Image from 'next/image';
// Import images directly
import logo from '@/assets/img/projects/aidocsense/aidocsenseLogo.png';
import img1 from '@/assets/img/projects/aidocsense/aidocsense-1.png';
import img2 from '@/assets/img/projects/aidocsense/aidocsense-2.png';
import img3 from '@/assets/img/projects/aidocsense/aidocsense-3.png';
import img4 from '@/assets/img/projects/aidocsense/aidocsense-4.png';

// Project data
const projectData = {
    title: "AI DocSense",
    type: "Team Projects",
    year: "Apr 2024 - Jul 2024",
    tech: "Angular 16, TypeScript, JavaScript, JQuery, HTML, CSS, Bootstrap, Java, SpringBoot, Python",
    description: "An AI-powered web application designed for efficient document management. It categorizes documents based on their content, making organization seamless. The application is built using Angular for the UI, SpringBoot for the backend, MySQL as the database, and a Python-based ML model to analyze documents, segregate them, and assign relevant tags for better organization.",
    myRole: "I was part of the initial development team, primarily responsible for designing a creative and user-friendly UI. My focus was on UI usability and experience, ensuring an intuitive and efficient interface."
};

// Array of project images for mapping
const projectImages = [
    { src: img1, alt: 'AI DocSense screenshot 1' },
    { src: img2, alt: 'AI DocSense screenshot 2' },
    { src: img3, alt: 'AI DocSense screenshot 3' },
    { src: img4, alt: 'AI DocSense screenshot 4' }
];

// With App Router, pages are React Server Components by default
export default function AiDocSense() {
    return (
        <main className="project_page_main">
            <div className="project_back_div">
                <BackButton />
            </div>

            <div className="project_content">

                {/* Project logo and name container */}
                <span>
                    <Image
                        src={logo}
                        alt={'Webtoolsmith Logo'}
                    />
                    <h1>{projectData.title}</h1>
                </span>

                {/* Project date information */}
                <div className="date project_dec">
                    <h5>Year</h5>
                    <p>{projectData.year}</p>
                </div>

                {/* Technologies used in the project */}
                <div className="tech project_dec">
                    <h5>Tech & Technique</h5>
                    <p>{projectData.tech}</p>
                </div>

                {/* Project description */}
                <div className="tech project_dec">
                    <h5>Description</h5>
                    <p>{projectData.description}</p>
                </div>

                {/* My role in project */}
                <div className="my_role project_dec">
                    <h5>My Role</h5>
                    <p>{projectData.myRole}</p>
                </div>
            </div>

            {/* Project images gallery with lazy loading */}
            <div className="project_img_container">
                {projectImages.map((image, index) => (
                    <div key={index} className="project_img">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            priority={index === 0} // Only prioritize loading the first image
                            loading={index === 0 ? "eager" : "lazy"} // Explicitly use lazy loading for all but first image
                            sizes="(max-width: 768px) 100vw, 95vw"
                            placeholder="blur" // Shows a blurred version while loading
                            quality={75} // Balance between quality and performance
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}