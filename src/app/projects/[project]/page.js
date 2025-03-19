import { notFound } from "next/navigation"; // Utility function to handle 404 errors
import BackButton from "../backButtonProjects"; // Custom back button component
import Image from "next/image"; // Next.js Image component for optimized image loading
import { getPostDetails } from '../projectInfo'; // Function to fetch project details based on URL params

// Dynamic route page for displaying project details
export default async function Page({ params }) {

    // Await params before accessing properties
    const resolvedParams = await params;

    // Now use the resolved params
    const postData = await getPostDetails(resolvedParams.project) || null;

    // Handle case where project data is missing
    if (!postData) {
        notFound();
    }

    return (
        <main className="project_page_main">
            {/* Back button for navigation */}
            <div className="project_back_div">
                <BackButton />
            </div>

            {/* Project content section */}
            <div className="project_content">

                {/* Project logo and name container */}
                {postData.title && (
                    <span>
                        {/* Conditional rendering for project logo */}
                        {postData.logo && (
                            <Image
                                src={postData.logo}
                                alt={'Webtoolsmith Logo'}
                                width={80}
                                height={80}
                            />
                        )}

                        {/* Project title */}
                        <h1>{postData.title}</h1>
                    </span>
                )}

                {/* Actions section with external links */}
                {postData.projectLinks && (
                    <div className="acctions project_dec">
                        <h5>Actions</h5>
                        <ul>
                            {postData.projectLinks.map((link, index) => (
                                <li key={index} className="hover">
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Project year information */}
                {postData.year && (
                    <div className="date project_dec">
                        <h5>Year</h5>
                        <p>{postData.year}</p>
                    </div>
                )}

                {/* Technologies used in the project (conditional rendering) */}
                {postData.tech && (
                    <div className="tech project_dec">
                        <h5>Tech & Technique</h5>
                        <p>{postData.tech}</p>
                    </div>
                )}

                {/* Project description */}
                {postData.description && (
                    <div className="tech project_dec">
                        <h5>Description</h5>
                        <p>{postData.description}</p>
                    </div>
                )}

                {/* My role in the project */}
                {postData.myRole && (
                    <div className="my_role project_dec">
                        <h5>My Role</h5>
                        <p>{postData.myRole}</p>
                    </div>
                )}
            </div>

            {/* Project images gallery with lazy loading */}
            {postData.images && (
                <div className="project_img_container">
                    {/* Conditional rendering for image gallery */}
                    {postData.images.map((image, index) => (
                        <div key={index} className="project_img">
                            <Image
                                src={image.src} // Correct reference to `image.src`
                                alt={image.alt}
                                width={600}
                                height={400}
                                priority={index === 0} // Prioritize first image
                                loading={index === 0 ? "eager" : "lazy"} // Lazy load other images
                                sizes="(max-width: 768px) 100vw, 95vw"
                                quality={75} // Balanced quality for performance
                            />
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
