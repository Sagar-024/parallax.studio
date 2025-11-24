import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

//cn because here we are trying to use multiple classes for css but we cant use multiple classes in classname so we use cn 
export const Logo = ({ className }: { className?: string }) => {
    return (
        <Link href="/" className={cn("flex items-center gap-2")}>
            <LogoIcon />
            <span className="text-sm font-bold text-center">Codeium</span>
        </Link>
    );
};

//we need to give him props to make it dynamic so that it can accept the classname
const LogoIcon = ({ props }: { props?: React.SVGProps<SVGSVGElement> }) => {
    return (
        <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("text-foreground")}
            {...props}
        >
            <path
                d="M13.3188 -0.000114684L17.4515 0.878314L15.9129 8.11661L22.8704 3.5984L25.1711 7.14117L18.5076 11.4693L25.6745 12.9927L24.796 17.1254L17.1508 15.5003L13.4082 9.73727L7.64518 13.4798L-2.25034e-05 11.8548L0.878406 7.72213L8.0453 9.2455L3.71832 2.58124L7.26108 0.280545L11.7803 7.23818L13.3188 -0.000114684ZM21.988 22.958L18.4452 25.2587L13.7922 18.0937L12.1809 25.6744L8.04824 24.7959L9.65956 17.2153L2.49359 21.8681L0.192898 18.3253L7.65105 13.4811L17.145 15.4991L21.988 22.958Z"
                fill="currentColor"
            />
        </svg>
    );
};
