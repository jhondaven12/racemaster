import Link from "next/link";
import styled from "styled-components";

export const Nav = styled.nav<{ $isScrolled: boolean }>`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${({ $isScrolled }) =>
        $isScrolled ? "white" : "transparent"};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1;
`;

export const Navlists = styled.ul`
    list-style-type: none;
    padding: 20px;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 30px;
`;

export const StyledLink = styled(Link)<{ $isScrolled: boolean }>`
    color: ${({ $isScrolled }) =>
        $isScrolled ? "#1d1c1c" : " white"};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-decoration: none;
    cursor: pointer;
`;

export const Logo = styled(StyledLink)`
    font-size: 14px;
    font-weight: 700;
`;