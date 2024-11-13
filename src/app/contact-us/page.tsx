import { graphql } from "gql.tada";
import { query } from "@/graphql/client";

export default async function Page() {
    const {
        data: { contactUsPage: pageData },
    } = await query({ query: ContactUsPageQueryDocument });

    if (!pageData) return null;
}

const ContactUsPageFragment = graphql(`
    fragment ContactUsPageFragment on ContactUsPage @_unmask {
        cover {
            title
            subtitle
            coverImage {
                url
            }
        }
    }
`);

const ContactUsPageQueryDocument = graphql(
    `
        query ContactUsPageQuery {
            contactUsPage {
                ...ContactUsPageFragment
            }
        }
    `,
    [ContactUsPageFragment]
);
