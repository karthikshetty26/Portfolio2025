export async function getPostDetails(postId) {
    const projectDetails = {
        "aidocsense": {
            title: "AI DocSense",
            type: "Team Projects",
            platform: "Web Application",
            category: 'AI-Powered Applications',
            cat: null,
            year: "Apr 2024 - Jul 2024",
            tech: ["Angular 16", "TypeScript", "JavaScript", "JQuery", "HTML", "CSS", "Bootstrap", "Java", "SpringBoot", "Python"],
            summary: "AI-powered document management system that automates processing, categorization, and extraction of key insights from documents, improving efficiency and accuracy.",
            description: "An AI-powered web application designed for efficient document management. It categorizes documents based on their content, making organization seamless. The application is built using Angular for the UI, SpringBoot for the backend, MySQL as the database, and a Python-based ML model to analyze documents, segregate them, and assign relevant tags for better organization.",
            myRole: "I was part of the initial development team, primarily responsible for designing a creative and user-friendly UI. My focus was on UI usability and experience, ensuring an intuitive and efficient interface.",
            logo: '/images/projects/aidocsense/aidocsenseLogo.png',
            projectSharingImg: '/images/sharing/projects/aidocsense.jpg',
            images: null,
            projectLinks: null,
        },

        "apstudio": {
            title: "Automated AP-BPM",
            type: "Team Projects",
            platform: "Web Application",
            category: 'Enterprise Solutions',
            cat: null,
            year: "Aug 2024 - Present",
            tech: ["Angular 18", "TypeScript", "JavaScript", "HTML", "CSS", "Java", "SpringBoot", "PostgreSQL"],
            summary: "A cutting-edge Accounts Payable & Business Process Management solution that streamlines financial workflows, automates invoice processing, and enhances operational efficiency.",
            description: "A powerful AI-powered application designed to simplify invoice processing workflows for large organizations. By automating key processes helps businesses significantly speed up their invoicing tasks and improve efficiency.",
            myRole: "I’m working as a frontend engineer, ensuring the application aligns with stakeholder expectations. I follow the provided design plan and focus on API integration to deliver a smooth and efficient user experience.",
            logo: '/images/projects/apstudio/apstudioLogo.png',
            projectSharingImg: '/images/sharing/projects/apstudio.jpg',
            images: null,
            projectLinks: null,
        },

        "paytimeplus": {
            title: "PayTimePlus",
            type: "Team Projects",
            platform: "Web Application",
            category: 'Enterprise Solutions',
            cat: null,
            year: "Feb 2023 - Sep 2023",
            tech: ["Angular 13", "TypeScript", "JavaScript", "JQuery", "HTML", "CSS", "Bootstrap", "Java", "SpringBoot", "MySQL"],
            summary: "A smart payroll and attendance management system that simplifies workforce tracking, automates salary processing, and ensures compliance with labor regulations.",
            description: "PayTimePlus is an HR Management System (HMS) that allows HR teams and employees to manage attendance, leave, payroll, and employee documents efficiently. The application is built using Angular, Bootstrap for the front-end, and Java (Spring Boot) with MySQL for the backend.",
            myRole: "I contributed to both front-end and backend development over six months. I implemented a new module called Contract Employee, designed to help HR teams manage their workforce deployed across various client locations. Additionally, I focused on optimizing the application and fixing key errors to enhance performance and stability.",
            logo: '/images/projects/paytimeplus/paytimeplusLogo.png',
            projectSharingImg: '/images/sharing/projects/paytimeplus.jpg',
            images: null,
            projectLinks: null,
        },

        "rentall": {
            title: "RentALL",
            type: "Team Projects",
            platform: "Web Application",
            category: 'Rental Platforms',
            cat: null,
            year: "Dec 2023 - Present",
            tech: ["Angular 17", "TypeScript", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Java", "SpringBoot"],
            summary: "A comprehensive rental management platform that enables seamless property, vehicle, and equipment rentals with automated bookings, payments, and tracking.",
            description: "RentALL revolutionizes equipment rentals with a customer-centric approach, ensuring a seamless experience. From browsing listings to managing bookings, receipts, and personalized communication, the platform simplifies the rental process for users of all backgrounds.",
            myRole: "I initially contributed as a full-stack developer, actively enhancing the application when it went live. Currently, I focus on fixing bugs and guiding team members whenever they face challenges.",
            logo: '/images/projects/rentall/rentallLogo.png',
            projectSharingImg: '/images/sharing/projects/rentall.jpg',
            images: null,
            projectLinks: null
        },

        "union-bank-digital-library": {
            title: "Union Bank: Digital Public Library (UTouch)",
            type: "Team Projects",
            platform: "Web Application",
            category: 'Public Sector & Digital Transformation',
            cat: null,
            year: "Sep 2023 - Nov 2023",
            tech: ["Angular 16", "TypeScript", "JavaScript", "JQuery", "HTML", "CSS", "Bootstrap", "Strapi CMS"],
            summary: "A modern digital library solution for Union Bank, providing seamless access to books, and knowledge resources through an intuitive online platform.",
            description: "A noble initiative by Union Bank designed to provide easy access to digital resources while engaging users from diverse demographic and socio-economic backgrounds. The goal is to establish over 150+ public libraries, with the application running in a kiosk environment for seamless accessibility.",
            myRole: "I contributed to UI design and development, ensuring a seamless and user-friendly experience while integrating APIs with the UI. I also developed a Windows PowerShell script to generate a .exe file, enabling bank employees to configure digital libraries effortlessly using a location-specific URL; significantly reducing setup time. Moreover, I tackled a critical issue with Windows 11’s in-display keyboard, which was inaccurate in kiosk mode. To resolve this, I customized an open-source virtual keyboard, ensuring compatibility with our design and delivering a smoother, more accessible user experience.",
            logo: '/images/projects/union-bank-digital-library/utouchLogo.png',
            projectSharingImg: '/images/sharing/projects/union-bank-digital-library.jpg',
            images: [
                { src: '/images/projects/union-bank-digital-library/utouch-1.png', alt: 'Union Bank: Digital Public Library Initiative image 1' },
                { src: '/images/projects/union-bank-digital-library/utouch-2.png', alt: 'Union Bank: Digital Public Library Initiative image 2' },
                { src: '/images/projects/union-bank-digital-library/utouch-3.png', alt: 'Union Bank: Digital Public Library Initiative image 3' },
                { src: '/images/projects/union-bank-digital-library/utouch-4.png', alt: 'Union Bank: Digital Public Library Initiative image 4' },
                { src: '/images/projects/union-bank-digital-library/utouch-5.png', alt: 'Union Bank: Digital Public Library Initiative image 5' },
                { src: '/images/projects/union-bank-digital-library/utouch-6.png', alt: 'Union Bank: Digital Public Library Initiative image 6' },
                { src: '/images/projects/union-bank-digital-library/utouch-7.png', alt: 'Union Bank: Digital Public Library Initiative image 7' },
            ],
            projectLinks: [
                { name: 'Article', url: 'https://adsyndicate.in/portfolio/union-bank-digital-public-library-initiative/' }
            ]
        },

        "webtoolsmith": {
            title: "webtoolsmith.com",
            type: "Personal Project",
            platform: "Web Application",
            category: 'Developer Tools & Utilities',
            cat: [
                { name: 'Live Demo', url: 'http://webtoolsmith.com/' }
            ],
            year: "Nov 2024 - Present",
            tech: ["React", "Next.Js", "JavaScript", "HTML", "CSS"],
            summary: "An all-in-one online toolkit built with Next.js, offering CSS utilities, color converters, sorting tools, and text formatters to streamline everyday tasks.",
            description: "WebToolSmith is a versatile collection of tools designed to simplify daily tasks for developers, designers, and content creators. Built with Next.js, it offers CSS generators, color converters, sorting tools, text formatters, and more to boost productivity. As a full-stack developer, I often handled repetitive tasks manually, so I built WebToolSmith to automate them for a wider audience. My goal is to create a user-friendly, all-in-one platform that streamlines workflows and saves time. With continuous updates and new tools added regularly, WebToolSmith is a growing hub for everyday efficiency.",
            myRole: null,
            logo: '/images/projects/webtoolsmith/webtoolsmithLogo.png',
            projectSharingImg: '/images/sharing/projects/webtoolsmith.jpg',
            images: [
                { src: '/images/projects/webtoolsmith/webtoolsmith-1.png', alt: 'WebToolSmith image 1' },
                { src: '/images/projects/webtoolsmith/webtoolsmith-2.png', alt: 'WebToolSmith image 2' },
                { src: '/images/projects/webtoolsmith/webtoolsmith-3.png', alt: 'WebToolSmith image 3' },
                { src: '/images/projects/webtoolsmith/webtoolsmith-4.png', alt: 'WebToolSmith image 4' },
                { src: '/images/projects/webtoolsmith/webtoolsmith-5.png', alt: 'WebToolSmith image 5' },
                { src: '/images/projects/webtoolsmith/webtoolsmith-6.png', alt: 'WebToolSmith image 6' },
                { src: '/images/projects/webtoolsmith/webtoolsmith-7.png', alt: 'WebToolSmith image 7' },
                { src: '/images/projects/webtoolsmith/webtoolsmith-8.png', alt: 'WebToolSmith image 8' },
                { src: '/images/projects/webtoolsmith/webtoolsmith-9.png', alt: 'WebToolSmith image 9' },
                { src: '/images/projects/webtoolsmith/webtoolsmith-10.png', alt: 'WebToolSmith image 10' },
            ],
            projectLinks: [
                { name: 'Live Demo', url: 'http://webtoolsmith.com/' }
            ]
        }
    }

    return projectDetails[postId] || null; // Handle invalid IDs
}
