import { ReactNode } from "react";
import { getSettings } from "@/utils/settings";
import SettingsProvider from "@/components/SettingsProvider/index";

interface SettingsProviderWrapperProps {
    children: ReactNode;
}

export default async function SettingsProviderWrapper({ children }: SettingsProviderWrapperProps) {
    const settings = await getSettings();

    return <SettingsProvider data={settings}>{children}</SettingsProvider>;
}
