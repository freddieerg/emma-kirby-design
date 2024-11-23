import { graphql } from "gql.tada";
import { query } from "@/graphql/client";
import NavBar from "@/components/NavBar";
import HeroCover from "@/components/HeroCover";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import ContactFormDialog from "../../components/ContactFormDialog";

export default async function Page() {
    const {
        data: { contactUsPage: pageData },
    } = await query({ query: ContactUsPageQueryDocument });

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
                >
                    <ContactFormDialog>
                        <EnvelopeIcon className={"size-5 mr-2"} />
                        Send Us a Message
                    </ContactFormDialog>
                </HeroCover>
            </div>
        </>
    );
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
