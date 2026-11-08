import styled from "styled-components";

export const Box = styled.article`
  padding: 50px 20px;
  margin: auto;
  background-color: white;
  color: #1d1c1c;
  height: auto;
  text-align: center;

  &:first-child {
    border: 1px solid tomato;
  }

  p {
    width: 60%;
    margin: auto;
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

export const Eyebrow = styled.span`
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

export const Divider = styled.hr`
  width: calc(100% - 48px);
  max-width: 1232px;
  margin: 0 auto;
  border: 0;
  border-top: 1px solid rgba(128, 128, 128, 0.35);
`;
