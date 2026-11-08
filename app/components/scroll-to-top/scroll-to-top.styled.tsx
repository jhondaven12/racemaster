import styled from "styled-components";

export const Button = styled.button<{ $visible: boolean }>`
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    padding: 0;
    font-size: 30px;
    color: white;
    background: green;
    border: none;
    border-radius: 50%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: translateY(${({ $visible }) => ($visible ? "0" : "20px")});
    pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
    transition: opacity 0.3s ease, transform 0.3s ease;

    &:hover {
        transform: translateY(-3px);
    }
`
