import BackButton from '../backButtonProjects';
import Image from 'next/image';
// Import images directly
import logo from '@/assets/img/projects/webtoolsmith/webtoolsmithLogo.png';
import img1 from '@/assets/img/projects/webtoolsmith/webtoolsmith-1.jpg';
import img2 from '@/assets/img/projects/webtoolsmith/webtoolsmith-2.jpg';
import img3 from '@/assets/img/projects/webtoolsmith/webtoolsmith-3.jpg';
import img4 from '@/assets/img/projects/webtoolsmith/webtoolsmith-4.jpg';

// Project data
const projectData = {
    title: "webtoolsmith.com",
    type: "Personal Project",
    year: "2024",
    tech: "React, Next.Js, JavaScript, HTML, CSS",
    description: "A collection of essential tools for daily tasks, built with Next.js to simplify everyday activities. It offers CSS utilities, color code converters, sorting tools, text case converters, and more to enhance productivity."
};

// Project links configuration for easier maintenance
const projectLinks = [
    { name: 'Live Demo', url: 'http://webtoolsmith.com/' }
];

// Array of project images for mapping
const projectImages = [
    { src: img1, alt: 'Webtoolsmith screenshot 1' },
    { src: img2, alt: 'Webtoolsmith screenshot 2' },
    { src: img3, alt: 'Webtoolsmith screenshot 3' },
    { src: img4, alt: 'Webtoolsmith screenshot 4' }
];

// With App Router, pages are React Server Components by default
export default function WebtoolsmithProject() {
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

                {/* Actions section with external links */}
                <div className="acctions project_dec">
                    <h5>Actions</h5>
                    <ul>
                        {projectLinks.map((link, index) => (
                            <li key={index} className="hover">
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

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