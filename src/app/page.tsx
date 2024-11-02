import NavBar from "@/components/NavBar";
import { graphql } from "gql.tada";

export default function Home() {
    return <NavBar />;
}

graphql(`
    fragment HomePageFragment on HomePage {
        carousel {
            url
        }
    }
`);
