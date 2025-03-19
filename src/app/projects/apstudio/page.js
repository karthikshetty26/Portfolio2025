import BackButton from '../backButtonProjects';
import Image from 'next/image';
// Import images directly
import logo from '@/assets/img/projects/apstudio/apstudioLogo.png';

// Project data
const projectData = {
    title: "Automated AP-BPM",
    type: "Team Projects",
    year: "Aug 2024 - Present",
    tech: "Angular 18, TypeScript, JavaScript, HTML, CSS, Java, SpringBoot, PostgreSQL",
    description: "A powerful AI-powered application designed to simplify invoice processing workflows for large organizations. By automating key processes helps businesses significantly speed up their invoicing tasks and improve efficiency.",
    myRole: "I’m working as a frontend engineer, ensuring the application aligns with stakeholder expectations. I follow the provided design plan and focus on API integration to deliver a smooth and efficient user experience."
};

// With App Router, pages are React Server Components by default
export default function ApStudio() {
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
        </main>
    );
}