import { graphql } from "gql.tada";
import { query } from "@/graphql/client";

export default async function Page() {
    const {
        data: { whatWeDoPage },
    } = await query({
        query: WhatWeDoPageQueryDocument,
    });

    if (!whatWeDoPage) return;

    return <div></div>;
}

const WhatWeDoPageFragment = graphql(`
    fragment WhatWeDoPageFragment on WhatWeDoPage @_unmask {
        cover {
            title
            subtitle
            coverImage {
                url
            }
        }
    }
`);

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
