import {
    registerApolloClient,
    ApolloClient,
    InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import possibleTypes from "@/graphql/possibleTypes.json";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
    return new ApolloClient({
        uri: `${process.env.CMS_URL}/graphql`,
        cache: new InMemoryCache({
            possibleTypes,
        }),
        headers: {
            Authorization: `Bearer ${process.env.CMS_TOKEN}`,
        },
    });
});
