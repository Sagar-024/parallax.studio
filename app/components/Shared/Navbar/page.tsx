import React from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "../Container";
import { ModeToggle } from "../Theme/ModeToggle";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    const navLinks = [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Products", href: "/products" },
        { name: "Socials", href: "/socials" },
    ];

    return (
        <div className="flex  items-center border-b border-b-neutral-200 dark:border-b-neutral-800">
            <Container className=" py-4 flex justify-between items-center w-full ">
                <Logo />
                <nav className="flex ">
                    <ul className="flex gap-x-6">
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300" //why dark because dark mode handle only white to black color here we have given expliclty differnt color  so we have to handle for dark explicitly
                            >
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-x-4">
                    <Link href="/login">
                        <Button variant="ghost" className="cursor-pointer">login</Button>
                    </Link>
                    <Link href="/signup">
                        <Button variant="default" className="cursor-pointer  ">Sign up</Button>
                    </Link>
                    <ModeToggle />

                </div>
            </Container>
        </div>
    );
};

export default Navbar;
