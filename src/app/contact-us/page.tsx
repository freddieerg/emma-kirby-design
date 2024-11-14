import { graphql } from "gql.tada";
import { query } from "@/graphql/client";
import NavBar from "@/components/NavBar";
import HeroCover from "@/components/HeroCover";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import * as Dialog from "@radix-ui/react-dialog";
import ContactForm from "@/components/ContactForm";

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
                    <Dialog.Root>
                        <Dialog.Trigger
                            className={
                                "flex items-center border border-white border-opacity-40 rounded px-2 py-1 mb-4 transition hover:opacity-80"
                            }
                        >
                            <EnvelopeIcon className={"size-5 mr-2"} />
                            Send Us a Message
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="fixed inset-0 bg-[#121212] data-[state=open]:animate-overlayShow" />
                            <Dialog.Content className="flex flex-col items-center sm:justify-center fixed inset-0 data-[state=open]:animate-contentShow overflow-auto">
                                <div className={"overflow-scroll max-w-screen-lg p-8 w-full"}>
                                    <ContactForm />
                                </div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
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
