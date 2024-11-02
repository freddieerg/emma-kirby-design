import {
    registerApolloClient,
    ApolloClient,
    InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
    return new ApolloClient({
        uri: `${process.env.CMS_URL}/graphql`,
        cache: new InMemoryCache(),
        headers: {
            Authorization: `Bearer ${process.env.CMS_TOKEN}`,
        },
    });
});
