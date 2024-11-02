import NavBar from "@/components/NavBar";
import { graphql } from "gql.tada";
import { query } from "@/graphql/client";

export default async function Home() {
    const { data } = await query({
        query: HomePageQueryDocument,
    });

    const { homePage } = data;

    return (
        <div className={"flex flex-col min-h-screen"}>
            <NavBar />
            {homePage?.carousel?.[0]?.url ?? ""}
        </div>
    );
}

const HomePageFragment = graphql(`
    fragment HomePageFragment on HomePage @_unmask {
        carousel {
            url
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
