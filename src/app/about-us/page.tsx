import { graphql } from "gql.tada";
import { query } from "@/graphql/client";
import NavBar from "@/components/NavBar";
import HeroCover from "@/components/HeroCover";
import Image from "next/image";
import type { Metadata } from "next";

export default async function Page() {
    const {
        data: { aboutUsPage: pageData },
    } = await query({
        query: AboutUsPageQueryDocument,
    });

    if (!pageData) return null;

    return (
        <>
            <div className={"flex flex-col sm:min-h-screen"}>
                <NavBar />
                <HeroCover
                    className={"flex flex-grow"}
                    image={pageData.cover!.coverImage.url}
                    title={pageData.cover!.title}
                    titleAs={"h1"}
                    subtitle={pageData.cover!.subtitle}
                />
            </div>
            <div className={"flex flex-col gap-y-16 p-5 md:p-20"}>
                {pageData.teamMembers!.map((tm, index) => {
                    if (!tm) return null;

                    return (
                        <section
                            key={index}
                            aria-label={`${tm.name} - ${tm.role}`}
                            className={"flex flex-col md:flex-row"}
                        >
                            <div className={"basis-5/12 md:order-1"}>
                                <div className={"relative w-full rounded-lg overflow-hidden shadow-xl"}>
                                    <Image
                                        src={tm.photo.url}
                                        alt={`Photo of ${tm.name}`}
                                        width={tm.photo.width ?? 0}
                                        height={tm.photo.height ?? 0}
                                        className={"w-full h-auto"}
                                    />
                                </div>
                            </div>
                            <div className={"basis-7/12 mt-8 md:mt-0"}>
                                <div className={"sticky top-8 sm:mr-12"}>
                                    <div className={"text-3xl"}>{tm.name}</div>
                                    <div className={"text-xl opacity-70"}>{tm.role}</div>
                                    <div className={"mt-8"}>{tm.description}</div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>
        </>
    );
}

export const metadata: Metadata = {
    title: "About Us",
};

const AboutUsPageFragment = graphql(`
    fragment AboutUsPageFragment on AboutUsPage @_unmask {
        cover {
            title
            subtitle
            coverImage {
                url
            }
        }
        teamMembers {
            name
            role
            description
            photo {
                url
                width
                height
            }
            email
        }
    }
`);

const AboutUsPageQueryDocument = graphql(
    `
        query AboutUsPageQuery {
            aboutUsPage {
                ...AboutUsPageFragment
            }
        }
    `,
    [AboutUsPageFragment]
);
