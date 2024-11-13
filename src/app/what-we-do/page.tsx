import { FragmentOf, graphql } from "gql.tada";
import { query } from "@/graphql/client";
import NavBar from "@/components/NavBar";
import HeroCover from "@/components/HeroCover";
import Quote from "@/components/Quote";

export default async function Page() {
    const {
        data: { whatWeDoPage: pageData },
    } = await query({
        query: WhatWeDoPageQueryDocument,
    });

    if (!pageData) return;

    const mapDynamicZone = (
        content: FragmentOf<
            typeof WhatWeDoPageContentDynamicZoneFragment
        > | null
    ) => {
        switch (content?.__typename) {
            case "ComponentComponentsCover":
                return (
                    <section aria-label={content.title}>
                        <HeroCover
                            image={content.coverImage.url}
                            title={content.title}
                            subtitle={content.subtitle}
                            flipped={content.flipped}
                            textContainerClassName={"py-12 md:py-28 lg:py-40"}
                        />
                    </section>
                );
            case "ComponentComponentsQuote":
                return (
                    <section aria-label={`Quote by ${content.author}`}>
                        <Quote
                            quote={content.quote}
                            author={content.author}
                            subtitle={content.subtitle}
                        />
                    </section>
                );
            case "Error":
                return null;
        }
    };

    return (
        <>
            <div className={"flex flex-col min-h-screen"}>
                <NavBar />
                <HeroCover
                    className={"flex flex-grow"}
                    image={pageData.cover!.coverImage.url}
                    title={pageData.cover!.title}
                    titleAs={"h1"}
                    subtitle={pageData.cover!.subtitle}
                />
            </div>
            {pageData.content!.map(mapDynamicZone)}
        </>
    );
}

const WhatWeDoPageContentDynamicZoneFragment = graphql(`
    fragment WhatWeDoPageContentDynamicZoneFragment on WhatWeDoPageContentDynamicZone
    @_unmask {
        __typename
        ... on ComponentComponentsQuote {
            __typename
            quote
            author
            subtitle
        }

        ... on ComponentComponentsCover {
            __typename
            title
            subtitle
            flipped
            coverImage {
                url
            }
        }
    }
`);

const WhatWeDoPageFragment = graphql(
    `
        fragment WhatWeDoPageFragment on WhatWeDoPage @_unmask {
            cover {
                title
                subtitle
                coverImage {
                    url
                }
            }
            content {
                __typename
                ...WhatWeDoPageContentDynamicZoneFragment
            }
        }
    `,
    [WhatWeDoPageContentDynamicZoneFragment]
);

const WhatWeDoPageQueryDocument = graphql(
    `
        query WhatWeDoPageQuery {
            whatWeDoPage {
                ...WhatWeDoPageFragment
            }
        }
    `,
    [WhatWeDoPageFragment]
);
