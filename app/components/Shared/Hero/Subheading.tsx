import React from "react";
import { cn } from "@/lib/utils";

export const Subheading = ({
    className,
    as = "p", //default 
    children,
}: {
    children: React.ReactNode;
    className?: string;
    as?: "p" | "h2" | "h3";
}) => {
    const Tag = as;

    return (
        <Tag
            className={cn(
                "text-base md:text-lg font-normal leading-relaxed max-w-xl",
                className
            )}
        >
            {children}
        </Tag>
    );
};
