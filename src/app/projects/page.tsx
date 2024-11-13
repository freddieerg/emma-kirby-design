import NavBar from "@/components/NavBar";
import { graphql } from "gql.tada";
import { query } from "@/graphql/client";
import Image from "next/image";
import Link from "next/link";
import HeroCover from "@/components/HeroCover";

export default async function Page() {
    const {
        data: { projectsPage: pageData },
    } = await query({
        query: ProjectsPageQueryDocument,
    });

    if (!pageData) return null;

    return (
        <>
            <div className={"flex flex-col h-screen"}>
                <NavBar />
                <HeroCover
                    className={"flex flex-grow"}
                    image={pageData.cover!.coverImage.url}
                    title={pageData.cover!.title}
                    titleAs={"h1"}
                    subtitle={pageData.cover!.subtitle}
                />
            </div>
            <div>
                <ul className={"grid grid-cols-1 lg:grid-cols-2 gap-8 px-12 py-20"}>
                    {pageData.projects.map((project) => (
                        <li key={project!.projectId} className={"w-full"}>
                            <Link href={`/projects/${project!.projectId}`}>
                                <figure>
                                    <div className={"relative aspect-video rounded overflow-hidden shadow-lg"}>
                                        <Image
                                            src={project!.thumbnail.url}
                                            alt={project!.title}
                                            fill
                                            className={"object-cover"}
                                        />
                                    </div>
                                    <figcaption className={"px-4 mt-4"}>
                                        <div className={"text-xl"}>{project!.title}</div>
                                        <div className={"opacity-50"}>{project!.subtitle}</div>
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
