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
                    <span className="mb_fix">
                        {/* Conditional rendering for project logo */}
                        {postData.logo && (
                            <Image
                                src={postData.logo}
                                alt={postData.title}
                                width={80}
                                height={80}
                            />
                        )}

                        {/* Project title */}
                        <h1>{postData.title}</h1>
                    </span>
                )}

                {/* Project description */}
                {postData.description && (
                    <div className="about large project_dec mb_fix">
                        <h5>About the project</h5>
                        <p>{postData.description}</p>
                    </div>
                )}

                {/* My role & challenges in the project */}
                {postData.myRole && (
                    <div className="my_role large project_dec mb_fix">
                        <h5>My Role & Challenges</h5>
                        <p>{postData.myRole}</p>
                    </div>
                )}

                <div className="tiny_info_container mb_fix">
                    {/* Project year information */}
                    {postData.year && (
                        <div className="date project_dec">
                            <h5>Year</h5>
                            <p>{postData.year}</p>
                        </div>
                    )}

                    {/* Project category information */}
                    {postData.category && (
                        <div className="category project_dec">
                            <h5>Category</h5>
                            <p>{postData.category}</p>
                        </div>
                    )}

                    {/* Project platform information */}
                    {postData.platform && (
                        <div className="platform project_dec">
                            <h5>Platform</h5>
                            <p>{postData.platform}</p>
                        </div>
                    )}

                    {/* Project type information */}
                    {postData.type && (
                        <div className="date project_dec">
                            <h5>Project Type</h5>
                            <p>{postData.type}</p>
                        </div>
                    )}
                </div>

                {/* Technologies used in the project (conditional rendering) */}
                {postData.tech && (
                    <div className="tech project_dec mb_fix">
                        <h5>Tech & Technique</h5>
                        <p>{postData.tech}</p>
                    </div>
                )}

                {/* Actions section with external links */}
                {postData.projectLinks && (
                    <div className="acctions btns project_dec mb_fix">
                        <ul>
                            {postData.projectLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.name}

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path></svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
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
                                width={1366}
                                height={768}
                                priority={index === 0} // Prioritize first image
                                loading={index === 0 ? "eager" : "lazy"} // Lazy load other images
                                // sizes="(max-width: 768px) 100vw, 95vw"
                                quality={75} // Balanced quality for performance
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* CAT */}
            {postData.cat && (
                <div className="acctions project_dec mb_fix">
                    <ul>
                        {postData.cat.map((link, index) => (
                            <li key={index} className="hover">
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
}
