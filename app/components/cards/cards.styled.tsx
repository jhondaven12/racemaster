import styled from "styled-components";

export const CardContainer = styled.section`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 20px;
    padding: 100px 0px;
    width: 100%;

    div {
        text-align: center;
        font-size: 30px;
    }

    div:first-child {
        grid-row: 1 / span 2;
    }
`

export const CardContent = styled.div`
    width: 400px;
`

export const ImageWrapper = styled.figure`
    position: relative; 
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
    margin: 0;
    overflow: hidden;
    border-radius: 10px;

    img {
        object-fit: cover;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 1;
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.699) 35%,
            transparent 70%
        );
    }
`

export const Imagedate = styled.section`
    position: absolute;
    top: 10px;
    right: 20px;
    background-color: #0000003e;
    border-radius: 50px;
    padding: 2px 10px;
   
   p{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: white;

        i{
            margin-top: 0px;
            margin-right: 10px;
        }
   }
`

export const ImageInfo = styled.section`
    position: absolute;
    left: 0;
    bottom: 15px;
    width: 100%;
    z-index: 2;
    color: white;
    text-align: left;
    padding: 0px 15px;

    p{
        font-size: 20px;
        font-weight: 700;
        margin-bottom: -15px;
    }

    span{
        color: skyblue;
        font-weight: 800;
    }

    div {
        text-align: left;

        p {
            display: inline-flex;
            align-items: center;
            font-size: 14px;
            font-weight: normal;
                
            i{
                margin-right: 5px;
            }

            &:not(:last-child)::after {
                content: "|";
                margin: 0px 10px;
            }
        }
    }
      
`