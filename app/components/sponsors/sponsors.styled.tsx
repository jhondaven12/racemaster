import styled, { keyframes } from "styled-components";

const slide = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
`

export const Section = styled.section`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 60px 24px;
`

export const Heading = styled.h3`
    margin: 0 0 28px;
    font-size: 14px;
    letter-spacing: 3px;
    text-align: center;
    text-transform: uppercase;
    opacity: 0.7;
`

export const Viewport = styled.div`
    overflow: hidden;
    /* fade the edges so logos slide in and out smoothly */
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
`

export const Track = styled.ul`
    display: flex;
    width: max-content;
    margin: 0;
    padding: 0;
    list-style: none;
    animation: ${slide} 30s linear infinite;

    ${Viewport}:hover & {
        animation-play-state: paused;
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 200px;
    height: 80px;
    margin-right: 32px;
    padding: 0 20px;
    font-size: 18px;
    font-weight: 700;
    white-space: nowrap;
    border: 1px solid rgba(128, 128, 128, 0.35);
    border-radius: 10px;
    opacity: 0.75;
    transition: opacity 0.2s ease, border-color 0.2s ease;

    &:hover {
        opacity: 1;
        border-color: var(--green);
    }

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`
