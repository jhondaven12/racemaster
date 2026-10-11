"use client"
import { useEffect, useState, useRef } from "react";
import { navigation } from "@/config/navigation";
import * as Styled from "./navigation.styled";


export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Styled.Nav $isScrolled={isScrolled}>
            <Styled.Logo
                href="/"
                $isScrolled={isScrolled}
            >
                Logo
            </Styled.Logo>

            <Styled.Navlists>
                {navigation.map((nav) => (
                    <li key={nav.href}>
                        <Styled.StyledLink
                            href={nav.href}
                            $isScrolled={isScrolled}
                        >
                            {nav.label}
                        </Styled.StyledLink>
                    </li>
                ))}
            </Styled.Navlists>
        </Styled.Nav>
    );
}