import { graphql } from "gql.tada";

export default async function Page() {
    //
}

const AboutUsPageFragment = graphql(`
    fragment AboutUsPageFragment on AboutUsPage @_unmask {
        cover {
            title
            subtitle
            coverImage {
                url
            }
        }
    }
`);
