import BackButton from '../backButtonProjects';
import Image from 'next/image';
// Import images directly
import logo from '@/assets/img/projects/rentall/rentallLogo.png';
import img1 from '@/assets/img/projects/rentall/rentall-1.png';
import img2 from '@/assets/img/projects/rentall/rentall-2.png';
import img3 from '@/assets/img/projects/rentall/rentall-3.png';
import img4 from '@/assets/img/projects/rentall/rentall-4.png';

// Project data
const projectData = {
    title: "RentALL",
    type: "Team Projects",
    Platform: "Web/Mobile",
    Category: "",
    year: "Dec 2023 - Present",
    tech: "Angular 17, TypeScript, JavaScript, jQuery, HTML, CSS, Bootstrap, Java, SpringBoot",
    description: "RentALL revolutionizes equipment rentals with a customer-centric approach, ensuring a seamless experience. From browsing listings to managing bookings, receipts, and personalized communication, the platform simplifies the rental process for users of all backgrounds.",
    myRole: "I initially contributed as a full-stack developer, actively enhancing the application when it went live. Currently, I focus on fixing bugs and guiding team members whenever they face challenges."
};

// Array of project images for mapping
const projectImages = [
    { src: img1, alt: 'RentAll screenshot 1' },
    { src: img2, alt: 'RentAll screenshot 2' },
    { src: img3, alt: 'RentAll screenshot 3' },
    { src: img4, alt: 'RentAll screenshot 4' }
];

// With App Router, pages are React Server Components by default
export default function RentAll() {
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