"use client"
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import * as Styled from "./scroll-to-top.styled";

const SHOW_AFTER = 300;

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Styled.Button
            type="button"
            aria-label="Scroll to top"
            $visible={visible}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <MdKeyboardArrowUp />
        </Styled.Button>
    );
}
