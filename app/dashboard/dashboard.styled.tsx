import styled from "styled-components";

export const Container = styled.article``;

export const Parallax = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 80px 24px;
  overflow: hidden;
  isolation: isolate;
  color: white;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at center,
        transparent 30%,
        rgba(0, 0, 0, 0.55) 100%
      ),
      linear-gradient(
        to bottom,
        rgba(0, 20, 0, 0.45) 0%,
        rgba(0, 0, 0, 0.55) 55%,
        rgba(0, 0, 0, 0.9) 100%
      );
    z-index: 0;
  }
`;

/* moved on scroll by ParallaxBackground; extra height at the top covers the shift */
export const Background = styled.div`
  position: absolute;
  top: -60%;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-image: url("/images/mountain.png");
  background-position: center 30%;
  background-repeat: no-repeat;
  background-size: cover;
  will-change: transform;
`;

export const PostTitle = styled.section`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  max-width: 720px;
  text-align: center;

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.7;
    opacity: 0.85;
  }
`;

export const Eyebrow = styled.span`
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: rgba(0, 128, 0, 0.25);
  border: 1px solid green;
  border-radius: 999px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 20px;

  h3 {
    margin: 0;
    font-size: clamp(50px, 12vw, 80px);
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: 4px;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: none;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }

  h3:nth-child(1) {
    background-image: url("/images/ultra.png");
  }

  h3:nth-child(2) {
    background-image: url("/images/trail.png");
  }
`;

export const Subtitle = styled.h4`
  margin: 0;
  font-size: clamp(18px, 3vw, 26px);
  letter-spacing: 6px;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: green;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 8px;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 14px 32px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  background-color: green;
  border: 1px solid green;
  border-radius: 999px;
  box-shadow: 0 8px 20px rgba(0, 128, 0, 0.35);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(0, 128, 0, 0.5);
  }
`;

export const GhostButton = styled(Button)`
  background: transparent;
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow: none;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    box-shadow: none;
  }
`;

export const Welcome = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 64px;
  min-height: 80vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 24px;
  text-align: left;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const EyebrowSpan = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: green;

  &::before {
    content: "";
    width: 40px;
    height: 2px;
    background: green;
  }
`;

export const WelcomeTitle = styled.h2`
  margin: 0;
  font-size: 52px;
  font-weight: 800;
  line-height: 1.1;

  em {
    font-style: normal;
    color: green;
  }

  @media (max-width: 640px) {
    font-size: 36px;
  }
`;

export const WelcomeText = styled.p`
  margin: 0;
  font-size: 17px;
  line-height: 1.8;
  opacity: 0.8;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const Highlights = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 8px 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid green;
    border-radius: 999px;
  }
`;

export const WelcomeVisual = styled.figure`
  position: relative;
  margin: 0;
  aspect-ratio: 4 / 4;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  img {
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 55%);
  }

  @media (max-width: 900px) {
    aspect-ratio: 16 / 10;
  }
`;
