import { graphql } from "gql.tada";
import { query } from "@/graphql/client";

export const getSettings = async () => {
    const {
        data: { setting: settings },
    } = await query({
        query: SettingsQueryDocument,
    });

    return settings;
};

export const SettingsFragment = graphql(`
    fragment SettingsFragment on Setting @_unmask {
        logo {
            url
            width
            height
        }
        footerImages {
            url
            width
            height
        }
    }
`);

const SettingsQueryDocument = graphql(
    `
        query SettingsQuery {
            setting {
                ...SettingsFragment
            }
        }
    `,
    [SettingsFragment]
);
