import BackButton from '../backButtonProjects';
import Image from 'next/image';
// Import images directly
import logo from '@/assets/img/projects/union-bank-digital-library/utouchLogo.png';
import img1 from '@/assets/img/projects/union-bank-digital-library/utouch-1.png';
import img2 from '@/assets/img/projects/union-bank-digital-library/utouch-2.png';
import img3 from '@/assets/img/projects/union-bank-digital-library/utouch-3.png';
import img4 from '@/assets/img/projects/union-bank-digital-library/utouch-4.png';

// Project data
const projectData = {
    title: "Union Bank: Digital Public Library (UTouch)",
    type: "Official",
    year: "Sep 2023 - Nov 2023",
    tech: "Angular 16, TypeScript, JavaScript, JQuery, HTML, CSS, Bootstrap, Strapi CMS",
    description: "A noble initiative by Union Bank designed to provide easy access to digital resources while engaging users from diverse demographic and socio-economic backgrounds. The goal is to establish over 150+ public libraries, with the application running in a kiosk environment for seamless accessibility.",
    myRole: "I contributed to both UI design and UI development, ensuring a user-friendly interface. Additionally, I integrated APIs with the UI to deliver a smooth and efficient user experience."
};

// Project links configuration for easier maintenance
const projectLinks = [
    { name: 'Article', url: 'https://adsyndicate.in/portfolio/union-bank-digital-public-library-initiative/' }
];

// Array of project images for mapping
const projectImages = [
    { src: img1, alt: 'Union Bank: Digital Public Library Initiative screenshot 1' },
    { src: img2, alt: 'Union Bank: Digital Public Library Initiative screenshot 2' },
    { src: img3, alt: 'Union Bank: Digital Public Library Initiative screenshot 3' },
    { src: img4, alt: 'Union Bank: Digital Public Library Initiative screenshot 4' }
];

// With App Router, pages are React Server Components by default
export default function UnionBankDigitalLibrary() {
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