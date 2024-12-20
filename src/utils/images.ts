import { SyntheticEvent } from "react";

export const onLoadFadeIn = (element: SyntheticEvent<HTMLImageElement>) =>
    element.currentTarget.classList.replace("opacity-0", "opacity-100");
