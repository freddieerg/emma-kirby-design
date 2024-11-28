import { graphql } from "gql.tada";
import { query } from "@/graphql/client";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import ProjectGalleryImageTile from "@/components/ProjectGalleryImageTile";
import Gallery from "@/components/Gallery";
import { Metadata } from "next";

interface ProjectPageProps {
    params: {
        projectSlug: string;
    };
}

const Page = async ({ params }: ProjectPageProps) => {
    const { data } = await query({
        query: ProjectQueryDocument,
        variables: { projectId: params.projectSlug },
    });

    const project = data.projects[0];

    if (!project) return null;

    return (
        <>
            <div className={"flex flex-col h-screen"}>
                <NavBar />
                <div className={"flex flex-grow relative"}>
                    <div className={"relative size-full bg-opacity-60 bg-black"}>
                        <Image src={project.thumbnail.url} alt={""} className={"object-cover -z-10"} fill />
                    </div>
                    <div className={"flex flex-col justify-center items-center absolute inset-0 text-center mx-4"}>
                        <h1 className={"text-5xl font-bold mb-4"}>{project.title}</h1>
                        <h2 className={"text-3xl"}>{project.subtitle}</h2>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col gap-y-10 p-10 md:p-20"}>
                <section aria-label={"About the Project"}>
                    <div className={"text-4xl"}>About the Project</div>
                    <hr className={"my-6 opacity-50"} />
                    <p className={"whitespace-pre-wrap text-lg"}>{project.about}</p>
                </section>
                <section aria-label={"Gallery"}>
                    <div className={"text-4xl"}>Gallery</div>
                    <hr className={"my-6 opacity-50"} />
                    <ul className={"grid grid-cols-1 lg:grid-cols-3 gap-8"}>
                        <Gallery slides={project.gallery.map((img) => img!.url)}>
                            {project.gallery.map((item, index) => (
                                <li
                                    key={item!.url}
                                    className={
                                        "relative aspect-square transition transform hover:scale-105 focus:scale-105 rounded-lg overflow-hidden"
                                    }
                                >
                                    <ProjectGalleryImageTile thumbnailUrl={item!.url} alt={`Image ${index}`} />
                                </li>
                            ))}
                        </Gallery>
                    </ul>
                </section>
            </div>
        </>
    );
};

const ProjectFragment = graphql(`
    fragment ProjectFragment on Project @_unmask {
        projectId
        title
        subtitle
        about
        thumbnail {
            url
        }
        gallery {
            url
        }
    }
`);

const ProjectQueryDocument = graphql(
    `
        query ProjectQuery($projectId: String) {
            projects(filters: { projectId: { eq: $projectId } }) {
                ...ProjectFragment
            }
        }
    `,
    [ProjectFragment]
);

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { data } = await query({
        query: ProjectQueryDocument,
        variables: { projectId: params.projectSlug },
    });

    const project = data.projects[0];

    return {
        title: project?.title,
    };
}

export default Page;
