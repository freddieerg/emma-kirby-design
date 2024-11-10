import NavBar from "@/components/NavBar";
import { graphql } from "gql.tada";
import { query } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
    const { data } = await query({
        query: ProjectsPageQueryDocument,
    });

    const { projectsPage } = data;

    if (!projectsPage) return null;

    return (
        <>
            <div className={"flex flex-col h-screen"}>
                <NavBar />
                <figure className={"flex flex-grow relative bg-[#333333]"}>
                    <div className={"relative basis-1/2"}>
                        <Image
                            src={projectsPage.cover!.coverImage.url}
                            alt={"Cover Image"}
                            fill
                            className={"object-cover"}
                        />
                    </div>
                    <figcaption
                        className={
                            "basis-1/2 flex flex-col justify-center px-8"
                        }
                    >
                        <div className={"text-4xl mb-6"}>
                            {projectsPage.cover!.title}
                        </div>
                        <div className={"text-xl"}>
                            {projectsPage.cover!.subtitle}
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div>
                <ul
                    className={
                        "grid grid-cols-1 lg:grid-cols-2 gap-8 px-12 py-20"
                    }
                >
                    {projectsPage.projects.map((project) => (
                        <li key={project!.projectId} className={"w-full"}>
                            <Link href={`/projects/${project!.projectId}`}>
                                <figure>
                                    <div
                                        className={
                                            "relative aspect-video rounded overflow-hidden shadow-lg"
                                        }
                                    >
                                        <Image
                                            src={project!.thumbnail.url}
                                            alt={project!.title}
                                            fill
                                            className={"object-cover"}
                                        />
                                    </div>
                                    <figcaption className={"px-4 mt-4"}>
                                        <div className={"text-xl"}>
                                            {project!.title}
                                        </div>
                                        <div className={"opacity-50"}>
                                            {project!.subtitle}
                                        </div>
                                    </figcaption>
                                </figure>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

const ProjectsPageFragment = graphql(`
    fragment ProjectsPageFragment on ProjectsPage @_unmask {
        cover {
            title
            subtitle
            coverImage {
                url
            }
        }
        projects {
            projectId
            title
            subtitle
            thumbnail {
                url
            }
        }
    }
`);

const ProjectsPageQueryDocument = graphql(
    `
        query ProjectsPageQuery {
            projectsPage {
                ...ProjectsPageFragment
            }
        }
    `,
    [ProjectsPageFragment]
);
