import styled from "styled-components";

export const Footer = styled.footer`
  background: #0b0b0b;
  color: white;
  padding: 40px 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const FooterBody = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: 20% 20% 20%;
  gap: 50px;
  text-align: left;
  font-size: 12px;
  margin-bottom: 50px;

  div p {
    opacity: 0.6;
  }
`;

export const FooterLists = styled.ul`
  font-size: 12px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 10px;
    opacity: 0.6;
  }

  li i {
    float: left;
    margin-right: 10px;
    font-size: 16px;
  }
`;

export const Heading = styled.h6`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const SponsorList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const Sponsor = styled.li`
  padding: 10px 24px;
  border: 1px solid var(--green);
  border-radius: 5px;
  font-size: 14px;
`;

export const Copyright = styled.p`
  font-size: 12px;
  opacity: 0.6;
`;
