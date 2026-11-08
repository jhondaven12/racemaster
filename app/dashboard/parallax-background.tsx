"use client";

import { useEffect, useRef } from "react";
import * as Styled from "./dashboard.styled";

const SPEED = 0.5;

export default function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      if (ref.current) {
        ref.current.style.transform = `translate3d(0, ${window.scrollY * SPEED}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <Styled.Background ref={ref} aria-hidden />;
}
