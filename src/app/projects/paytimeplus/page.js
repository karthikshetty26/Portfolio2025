import BackButton from '../backButtonProjects';
import Image from 'next/image';
// Import images directly
import logo from '@/assets/img/projects/paytimeplus/paytimeplusLogo.png';

// Project data
const projectData = {
    title: "PayTimePlus",
    type: "Official",
    year: "2023 - 2023",
    tech: "Angular 13, TypeScript, JavaScript, JQuery, HTML, CSS, Bootstrap, Java, SpringBoot, MySQL",
    description: "PayTimePlus is an HR Management System (HMS) that allows HR teams and employees to manage attendance, leave, payroll, and employee documents efficiently. The application is built using Angular, Bootstrap for the front-end, and Java (Spring Boot) with MySQL for the backend.",
    myRole: "I contributed to both front-end and backend development over six months. I implemented a new module called Contract Employee, designed to help HR teams manage their workforce deployed across various client locations. Additionally, I focused on optimizing the application and fixing key errors to enhance performance and stability."
};

// With App Router, pages are React Server Components by default
export default function PayTimePlus() {
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