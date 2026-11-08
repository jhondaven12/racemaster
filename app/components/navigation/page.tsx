"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import * as Styled from "./navigation.styled";


export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const isDark = usePathname().startsWith("/results");

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
        <Styled.Nav $isScrolled={isScrolled} $dark={isDark}>
            <Styled.Logo
                href="/"
                $isScrolled={isScrolled}
                $dark={isDark}
            >
                Logo
            </Styled.Logo>

            <Styled.Navlists>
                {navigation.map((nav) => (
                    <li key={nav.href}>
                        <Styled.StyledLink
                            href={nav.href}
                            $isScrolled={isScrolled}
                            $dark={isDark}
                            onClick={(e) => {
                                const hash = nav.href.split("#")[1];
                                if (!hash || window.location.pathname !== "/") return;
                                const el = document.getElementById(hash);
                                if (!el) return;
                                e.preventDefault();
                                el.scrollIntoView({ behavior: "smooth" });
                                window.history.replaceState(null, "", nav.href);
                            }}
                        >
                            {nav.label}
                        </Styled.StyledLink>
                    </li>
                ))}
            </Styled.Navlists>
        </Styled.Nav>
    );
}