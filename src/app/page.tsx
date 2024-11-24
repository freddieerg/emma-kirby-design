import NavBar from "@/components/NavBar";
import { graphql } from "gql.tada";
import { query } from "@/graphql/client";
import RandomImage from "@/components/RandomImage";

export default async function Home() {
    const {
        data: { homePage: pageData },
    } = await query({
        query: HomePageQueryDocument,
    });

    if (!pageData) return null;

    return (
        <>
            <div className={"flex flex-col h-screen"}>
                <NavBar />
                <div className={"flex flex-col items-center flex-grow mx-6"}>
                    <div className={"size-full relative rounded-lg overflow-hidden"}>
                        <RandomImage images={pageData.carousel.map((img) => img!.url)} />
                    </div>
                    <div className={"text-md md:text-2xl my-4"}>
                        Interior Design · Architecture · Construction · Planning
                    </div>
                </div>
            </div>
        </>
    );
}

const HomePageFragment = graphql(`
    fragment HomePageFragment on HomePage @_unmask {
        carousel {
            url
            width
            height
        }
    }
`);

const HomePageQueryDocument = graphql(
    `
        query HomePageQuery {
            homePage {
                ...HomePageFragment
            }
        }
    `,
    [HomePageFragment]
);
