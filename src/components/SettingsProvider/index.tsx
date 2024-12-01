"use client";

import { createContext, ReactNode } from "react";
import { FragmentOf } from "gql.tada";
import { SettingsFragment } from "@/utils/settings";

export const SettingsContext = createContext<FragmentOf<typeof SettingsFragment> | null>(null);

interface SettingsProviderProps {
    data: FragmentOf<typeof SettingsFragment> | null;
    children: ReactNode;
}

export default function SettingsProvider({ data, children }: SettingsProviderProps) {
    return <SettingsContext.Provider value={data}>{children}</SettingsContext.Provider>;
}
