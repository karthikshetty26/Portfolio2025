export async function getPostDetails(postId) {
    const projectDetails = {
        aidocsense: {
            title: "AI DocSense",
            type: "Team Projects",
            Platform: "Web/Mobile",
            Category: null,
            year: "Apr 2024 - Jul 2024",
            tech: "Angular 16, TypeScript, JavaScript, JQuery, HTML, CSS, Bootstrap, Java, SpringBoot, Python",
            description: "An AI-powered web application designed for efficient document management. It categorizes documents based on their content, making organization seamless. The application is built using Angular for the UI, SpringBoot for the backend, MySQL as the database, and a Python-based ML model to analyze documents, segregate them, and assign relevant tags for better organization.",
            myRole: "I was part of the initial development team, primarily responsible for designing a creative and user-friendly UI. My focus was on UI usability and experience, ensuring an intuitive and efficient interface.",
            logo: '/images/projects/aidocsense/aidocsenseLogo.png',
            images: [
                { src: '/images/projects/aidocsense/aidocsense-1.png', alt: 'AI DocSense screenshot 1' },
                { src: '/images/projects/aidocsense/aidocsense-2.png', alt: 'AI DocSense screenshot 2' },
                { src: '/images/projects/aidocsense/aidocsense-3.png', alt: 'AI DocSense screenshot 3' },
                { src: '/images/projects/aidocsense/aidocsense-4.png', alt: 'AI DocSense screenshot 4' },
            ]
        },
        projectLinks: null,

        apstudio: {
            title: "Automated AP-BPM",
            type: "Team Projects",
            Platform: "Web/Mobile",
            Category: null,
            year: "Aug 2024 - Present",
            tech: "Angular 18, TypeScript, JavaScript, HTML, CSS, Java, SpringBoot, PostgreSQL",
            description: "A powerful AI-powered application designed to simplify invoice processing workflows for large organizations. By automating key processes helps businesses significantly speed up their invoicing tasks and improve efficiency.",
            myRole: "I’m working as a frontend engineer, ensuring the application aligns with stakeholder expectations. I follow the provided design plan and focus on API integration to deliver a smooth and efficient user experience.",
            logo: '/images/projects/apstudio/apstudioLogo.png',
            images: null,
            projectLinks: null,
        },

        paytimeplus: {
            title: "PayTimePlus",
            type: "Team Projects",
            Platform: "Web/Mobile",
            Category: null,
            year: "2023 - 2023",
            tech: "Angular 13, TypeScript, JavaScript, JQuery, HTML, CSS, Bootstrap, Java, SpringBoot, MySQL",
            description: "PayTimePlus is an HR Management System (HMS) that allows HR teams and employees to manage attendance, leave, payroll, and employee documents efficiently. The application is built using Angular, Bootstrap for the front-end, and Java (Spring Boot) with MySQL for the backend.",
            myRole: "I contributed to both front-end and backend development over six months. I implemented a new module called Contract Employee, designed to help HR teams manage their workforce deployed across various client locations. Additionally, I focused on optimizing the application and fixing key errors to enhance performance and stability.",
            logo: '/images/projects/paytimeplus/paytimeplusLogo.png',
            images: null,
            projectLinks: null,
        },

        rentall: {
            title: "RentALL",
            type: "Team Projects",
            Platform: "Web/Mobile",
            Category: null,
            year: "Dec 2023 - Present",
            tech: "Angular 17, TypeScript, JavaScript, jQuery, HTML, CSS, Bootstrap, Java, SpringBoot",
            description: "RentALL revolutionizes equipment rentals with a customer-centric approach, ensuring a seamless experience. From browsing listings to managing bookings, receipts, and personalized communication, the platform simplifies the rental process for users of all backgrounds.",
            myRole: "I initially contributed as a full-stack developer, actively enhancing the application when it went live. Currently, I focus on fixing bugs and guiding team members whenever they face challenges.",
            logo: '/images/projects/rentall/rentallLogo.png',
            images: [
                { src: '/images/projects/rentall/rentall-1.png', alt: 'RentAll screenshot 1' },
                { src: '/images/projects/rentall/rentall-2.png', alt: 'RentAll screenshot 2' },
                { src: '/images/projects/rentall/rentall-3.png', alt: 'RentAll screenshot 3' },
                { src: '/images/projects/rentall/rentall-4.png', alt: 'RentAll screenshot 4' },
            ],
            projectLinks: null
        },

        "union-bank-digital-library": {
            title: "Union Bank: Digital Public Library (UTouch)",
            type: "Team Projects",
            year: "Sep 2023 - Nov 2023",
            tech: "Angular 16, TypeScript, JavaScript, JQuery, HTML, CSS, Bootstrap, Strapi CMS",
            description: "A noble initiative by Union Bank designed to provide easy access to digital resources while engaging users from diverse demographic and socio-economic backgrounds. The goal is to establish over 150+ public libraries, with the application running in a kiosk environment for seamless accessibility.",
            myRole: "I contributed to both UI design and UI development, ensuring a user-friendly interface. Additionally, I integrated APIs with the UI to deliver a smooth and efficient user experience.",
            logo: '/images/projects/union-bank-digital-library/utouchLogo.png',
            images: [
                { src: '/images/projects/union-bank-digital-library/utouch-1.png', alt: 'Union Bank: Digital Public Library Initiative screenshot 1' },
                { src: '/images/projects/union-bank-digital-library/utouch-2.png', alt: 'Union Bank: Digital Public Library Initiative screenshot 2' },
                { src: '/images/projects/union-bank-digital-library/utouch-3.png', alt: 'Union Bank: Digital Public Library Initiative screenshot 3' },
                { src: '/images/projects/union-bank-digital-library/utouch-4.png', alt: 'Union Bank: Digital Public Library Initiative screenshot 4' },
            ],
            projectLinks: [
                { name: 'Article', url: 'https://adsyndicate.in/portfolio/union-bank-digital-public-library-initiative/' }
            ]
        },
        webtoolsmith: {
            title: "webtoolsmith.com",
            type: "Personal Project",
            year: "2024",
            tech: "React, Next.Js, JavaScript, HTML, CSS",
            description: "A collection of essential tools for daily tasks, built with Next.js to simplify everyday activities. It offers CSS utilities, color code converters, sorting tools, text case converters, and more to enhance productivity.",
            myRole: null,
            logo: '/images/projects/webtoolsmith/webtoolsmithLogo.png',
            images: [
                { src: '/images/projects/webtoolsmith/webtoolsmith-1.jpg', alt: 'WebToolSmith screenshot 1' },
                { src: '/images/projects/webtoolsmith/webtoolsmith-2.jpg', alt: 'WebToolSmith screenshot 2' },
                { src: '/images/projects/webtoolsmith/webtoolsmith-3.jpg', alt: 'WebToolSmith screenshot 3' },
                { src: '/images/projects/webtoolsmith/webtoolsmith-4.jpg', alt: 'WebToolSmith screenshot 4' },
            ],
            projectLinks: [
                { name: 'Live Demo', url: 'http://webtoolsmith.com/' }
            ]
        }
    }

    return projectDetails[postId] || null; // Handle invalid IDs
}
