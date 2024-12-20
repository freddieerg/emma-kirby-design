import { getSettings } from "@/utils/settings";
import Image from "next/image";
import { SiInstagram, SiPinterest, SiHouzz, SiMaildotru } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default async function Footer() {
    const settings = await getSettings();

    return (
        <div className={"flex flex-col lg:flex-row text-sm items-center w-full px-14 my-8 gap-y-6"}>
            <div className={"flex flex-col gap-y-4 w-full"}>
                <div className={"flex flex-col lg:flex-row items-center gap-5"}>
                    <Image
                        src={settings?.logo?.url ?? ""}
                        alt={"Logo"}
                        width={settings?.logo?.width ?? 0}
                        height={settings?.logo?.height ?? 0}
                        className={"w-14"}
                    />
                    <ul className={"flex gap-4"}>
                        <li>
                            <Link href={"/privacy"} className={"transition hover:opacity-80"}>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href={"/terms"} className={"transition hover:opacity-80"}>
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                    <ul className={"flex gap-6 lg:ml-auto"}>
                        <li>
                            <a
                                href={"https://www.instagram.com/emmakirbydesign/"}
                                rel="noopener noreferrer"
                                target="_blank"
                                className={"transition hover:opacity-80"}
                            >
                                <SiInstagram className={"size-5"} />
                            </a>
                        </li>
                        <li>
                            <a
                                href={"https://uk.pinterest.com/emmakirbydesign/"}
                                rel="noopener noreferrer"
                                target="_blank"
                                className={"transition hover:opacity-80"}
                            >
                                <SiPinterest className={"size-5"} />
                            </a>
                        </li>
                        <li>
                            <a
                                href={
                                    "https://www.houzz.co.uk/professionals/interior-designers/emma-kirby-design-pfvwgb-pf~1703863429"
                                }
                                className={"transition hover:opacity-80"}
                            >
                                <SiHouzz className={"size-5"} />
                            </a>
                        </li>
                        <li>
                            <a
                                href={"mailto:enquiries@emmakirbydesign.co.uk"}
                                className={"transition hover:opacity-80"}
                            >
                                <SiMaildotru className={"size-5"} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={"flex flex-col text-center lg:text-left lg:flex-row items-center gap-5"}>
                    <div>© {new Date().getFullYear()} Emma Kirby Design | Designed by Freddie Ergatoudis</div>
                    <div className={"lg:ml-auto"}>The Coach House Studio, Home Farm, Grafton, Bampton, OX18 2RY</div>
                </div>
            </div>
            <div className={"flex-shrink-0 lg:ml-6"}>
                {settings?.footerImages?.map((img) => (
                    <Link
                        key={img?.url}
                        href={
                            "https://thelist.houseandgarden.com/united-kingdom/grafton-oxfordshire/service/emma-kirby-design"
                        }
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Image
                            src={img?.url ?? ""}
                            alt={""}
                            width={img?.width ?? 0}
                            height={img?.height ?? 0}
                            className={"size-28"}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
