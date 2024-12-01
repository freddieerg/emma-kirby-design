import { Metadata } from "next";
import { graphql } from "gql.tada";
import { query } from "@/graphql/client";
import NavBar from "@/components/NavBar";
import HeroCover from "@/components/HeroCover";

export default async function Page() {
    const {
        data: { privacyPolicyPage: pageData },
    } = await query({ query: PrivacyPageQueryDocument });

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
            <section className={"p-10 md:p-20"}>
                <div className={"prose invert max-w-none"} dangerouslySetInnerHTML={{ __html: pageData.policy }} />
            </section>
        </>
    );
}

export const metadata: Metadata = {
    title: "Privacy",
};

const PrivacyPageFragment = graphql(`
    fragment PrivacyPageFragment on PrivacyPolicyPage @_unmask {
        cover {
            title
            subtitle
            coverImage {
                url
            }
        }
        policy
    }
`);

const PrivacyPageQueryDocument = graphql(
    `
        query PrivacyPageQuery {
            privacyPolicyPage {
                ...PrivacyPageFragment
            }
        }
    `,
    [PrivacyPageFragment]
);
