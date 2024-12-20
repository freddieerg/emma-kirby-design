import { Metadata } from "next";
import { graphql } from "gql.tada";
import { query } from "@/graphql/client";
import NavBar from "@/components/NavBar";
import HeroCover from "@/components/HeroCover";

export default async function Page() {
    const {
        data: { termsPage: pageData },
    } = await query({ query: TermsPageQueryDocument });

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
            <section className={"p-5 md:p-20"}>
                <div className={"prose invert max-w-none"} dangerouslySetInnerHTML={{ __html: pageData.terms }} />
            </section>
        </>
    );
}

export const metadata: Metadata = {
    title: "Terms",
};

const TermsPageFragment = graphql(`
    fragment TermsPageFragment on TermsPage @_unmask {
        cover {
            title
            subtitle
            coverImage {
                url
            }
        }
        terms
    }
`);

const TermsPageQueryDocument = graphql(
    `
        query TermsPageQuery {
            termsPage {
                ...TermsPageFragment
            }
        }
    `,
    [TermsPageFragment]
);
