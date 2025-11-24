import React from "react";
import { cn } from "@/lib/utils";

export const Heading = ({
    className,
    as = "h2", //defaut 
    children,
}: {
    children: React.ReactNode;
    className?: string;
    as?: "h1" | "h2";
}) => {
    const Tag = as;

    return (
        <Tag
            className={cn(
                "text-2xl md:text-4xl lg:text-6xl tracking-tight font-display font-bold",
                className
            )}
        >
            {children}
        </Tag>
    );
};
