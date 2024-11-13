interface QuoteProps {
    quote: string;
    author: string;
    subtitle?: string | null;
}

export default function Quote({ quote, author, subtitle }: QuoteProps) {
    return (
        <div className={"text-center p-12 sm:p-20"}>
            <div className={"text-lg sm:text-2xl"}>&#34;{quote}&#34;</div>
            <div className={"mt-12 font-bold"}>{author}</div>
            <div className={"opacity-70"}>{subtitle}</div>
        </div>
    );
}
