import styled from "styled-components";

export const Container = styled.section`
  color: white;
`;

export const Body = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 50px auto;
  padding: 60px 24px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;

  h3 {
    margin: 0;
    font-size: 36px;
    line-height: 1.2;

    em {
      font-style: normal;
      color: var(--green);
    }

    @media (max-width: 640px) {
      font-size: 28px;
    }
  }

  p {
    max-width: 640px;
    font-size: 16px;
    line-height: 1.7;
    opacity: 0.8;
    color: black;
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--green);

  &::before {
    content: "";
    width: 40px;
    height: 2px;
    background: var(--green);
  }
`;

export const Summary = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 0 0 40px;
  padding: 0;
  list-style: none;

  li {
    padding: 20px;
    background: #111;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
  }

  strong {
    display: block;
    font-size: 32px;
    font-weight: 800;
    line-height: 1.1;
    font-variant-numeric: tabular-nums;
  }

  span {
    display: block;
    margin-top: 6px;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0.65;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const CardsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);
  }

  /* &:hover img {
    transform: scale(1.06);
  } */
`;

export const Media = styled.figure`
  position: relative;
  height: 200px;
  margin: 0;

  img {
    object-fit: cover;
    object-position: 50% 100%;
    transition: transform 0.5s ease;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(17, 17, 17, 1) 0%,
      transparent 70%
    );
  }
`;

export const DatePill = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 1;
  padding: 5px 12px;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px 20px;
  margin-top: -24px;
  position: relative;
  z-index: 1;

  /* Reserve room for a 2-line title and 2-line location so the rest of the
     card (meta, finish rate, stats) lines up across every card. */
  h6 {
    min-height: 2.6em;
    margin: 0 0 4px;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    min-height: 3em;
    font-size: 14px;
    line-height: 1.5;
    opacity: 0.75;
  }
`;

export const Meta = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding: 4px 10px;
    font-size: 13px;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 6px;
  }
`;

export const Rate = styled.div<{ $value: number }>`
  div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;

    span:first-child {
      opacity: 0.65;
    }

    strong {
      color: #4ade80;
    }
  }

  div:last-child {
    height: 6px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 999px;

    span {
      display: block;
      width: ${({ $value }) => $value}%;
      height: 100%;
      background: #4ade80;
      border-radius: 999px;
    }
  }
`;

export const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  margin: 0;
  padding: 16px 0 0;
  list-style: none;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  strong {
    display: block;
    font-size: 20px;
    font-weight: 800;
    font-variant-numeric: tabular-nums;
  }

  span {
    display: block;
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.65;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;

  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: black;
  }

  select {
    min-width: 220px;
    padding: 10px 12px;
    font-size: 14px;
    color: white;
    background: #111;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
  }
`;

export const Empty = styled.p`
  grid-column: 1 / -1;
  padding: 40px 0;
  text-align: center;
  color: black;
  opacity: 0.7;
`;
