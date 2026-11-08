import styled from "styled-components";

export const Container = styled.section`
    color: white;
`

export const Body = styled.div``

export const CardsContent = styled.article`
display: grid;
grid-template-columns: repeat(3, 500px);
grid-auto-rows: 400px;
justify-content: center;
gap: 24px;
width: 100%;
padding: 20px 0px;
`

export const ImageWrapper = styled.figure`
   position: relative;
   box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
   border-radius: 5px;
   overflow: hidden;

   img {
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  h6{
    font-weight: 800;
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
  `

export const ImageInfo = styled.figure`
    position: absolute;
    inset: 150px 0 0 0;
    z-index: 2;
    padding: 18px;

    div:nth-child(1){
        height: 75px;
    }

    ul{
        list-style: none;
        margin: 20px 0 0 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`