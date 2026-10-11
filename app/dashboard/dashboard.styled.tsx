import styled from "styled-components";

export const Container = styled.article`
    /* opacity: 0.6; */
`
export const Parallax = styled.article` 
    position: relative;
    background-image: url("/images/mountain.png");
    min-height: 100vh; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;   
    color: white;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.671);
        z-index: 0;
    }
`

export const PostTitle = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    p{
        font-size: 20px;
        width: 500px;
        margin: 0 auto 10px;
        font-size: 14px;
    }
`

export const HeaderTitle = styled.section`
    display: flex;
    gap: 15px;

    h1:nth-child(1){
        background-image: url("/images/ultra.png");
        background-clip: text;
        color: transparent;
        text-shadow: none;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
    }

    h1:nth-child(2){
        background-image: url("/images/trail.png");
        background-clip: text;
        color: transparent;
        text-shadow: none;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
    }
`

export const Subtitle = styled.h4`
    background-clip: text;
    color: white;
    text-shadow: none;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: green;
    margin-bottom: 10px;
`