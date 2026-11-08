import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 24px;
`;

export const Heading = styled.h3`
  margin: 0 0 12px;
  font-size: 36px;
  line-height: 1.2;

  em {
    font-style: normal;
    color: var(--green);
  }

  @media (max-width: 640px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  width: 100%;
  margin: 0 0 28px;
  font-size: 16px;
  line-height: 1.7;
  opacity: 0.8;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-auto-rows: 260px;
  gap: 24px;
  width: 100%;

  /* 1: big left, 2: top right, 3 & 4: bottom right */
  & > article:nth-child(1) {
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  & > article:nth-child(2) {
    grid-column: 2 / span 2;
    grid-row: 1;
  }

  & > article:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
  }

  & > article:nth-child(4) {
    grid-column: 3;
    grid-row: 2;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    & > article:nth-child(n) {
      grid-column: auto;
      grid-row: auto;
    }

    & > article:nth-child(1) {
      grid-column: span 2;
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);

    & > article:nth-child(n) {
      grid-column: auto;
    }
  }
`;

export const CardContent = styled.article`
  position: relative;
  min-width: 0;
  border-radius: 14px;
  overflow: hidden;
  background: #111;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);
  }

  &:hover img {
    transform: scale(1.06);
  }
`;

export const ImageWrapper = styled.figure`
  position: absolute;
  inset: 0;
  margin: 0;

  img {
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.92) 0%,
      rgba(0, 0, 0, 0.55) 40%,
      transparent 75%
    );
  }
`;

export const Imagedate = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  font-size: 13px;
  color: white;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;

  svg {
    font-size: 15px;
  }
`;

export const ImageInfo = styled.div`
  position: absolute;
  inset: auto 0 0 0;
  z-index: 2;
  padding: 18px;
  color: white;
  text-align: left;
`;

export const Title = styled.h3`
  margin: 0 0 6px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
`;

export const Location = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0 0 12px;
  font-size: 14px;
  opacity: 0.85;
`;

export const Stats = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    font-size: 13px;
    background: rgba(255, 255, 255, 0.14);
    border-radius: 6px;
  }

  svg {
    color: #4ade80;
  }
`;

export const Countdown = styled.div`
    display: flex;
    gap: 8px;
    min-height: 52px;
    margin-top: 12px;
`

export const CountdownUnit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 52px;
    padding: 6px 8px;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 8px;

    strong {
        font-size: 18px;
        font-weight: 800;
        line-height: 1.1;
        font-variant-numeric: tabular-nums;
    }

    span {
        font-size: 10px;
        letter-spacing: 1px;
        text-transform: uppercase;
        opacity: 0.8;
    }
`

export const CountdownEnded = styled.span`
    align-self: center;
    padding: 6px 12px;
    font-size: 13px;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 8px;
`
