import styled from "styled-components";

export const Box = styled.article`
    padding: 50px 20px;
    margin: auto;
    background-color: white;
    color: #1d1c1c;
    height: auto;
    text-align: center;

    &:first-child{
        border: 1px solid tomato;
    }

    p{
        width: 60%  ;
        margin: auto;
    }
`