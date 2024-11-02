import "dotenv/config";
import {generateOutput, generateSchema} from "@gql.tada/cli-utils";

const run = async () => {
    await generateSchema({
        input: `${process.env.CMS_URL}/graphql`,
        headers: { Authorization: `Bearer ${process.env.CMS_TOKEN}` },
        output: "./src/graphql/schema.graphql",
        tsconfig: undefined,
    });

    await generateOutput({
        output: './src/graphql/graphql-env.d.ts',
        disablePreprocessing: false,
        tsconfig: undefined,
    });
};

run().catch((e) => console.error(e.message));
