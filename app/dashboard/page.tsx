import * as Styled from "./dashboard.styled";

export default function Dashboard() {
    return (
        <Styled.Container>
          <Styled.Parallax>
            <Styled.PostTitle>
              <Styled.HeaderTitle>
                <h1>ULTRA</h1>
                <h1>TRAIL</h1>
              </Styled.HeaderTitle>

              <Styled.Subtitle>'TI NUEVA VIZCAYA</Styled.Subtitle>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
            </Styled.PostTitle>
          </Styled.Parallax>
       </Styled.Container>
    )
}