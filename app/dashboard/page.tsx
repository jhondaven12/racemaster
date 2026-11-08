import * as Styled from "./dashboard.styled";
import { Fragment } from "react";
import Image from "next/image";
import ParallaxBackground from "./parallax-background";

export default function Dashboard() {
  return (
    <Fragment>
      <Styled.Container>
        <Styled.Parallax>
          <ParallaxBackground />
          <Styled.PostTitle>
            <Styled.Eyebrow>Trail Season 2026</Styled.Eyebrow>

            <Styled.HeaderTitle>
              <h3>ULTRA</h3>
              <h3>TRAIL</h3>
            </Styled.HeaderTitle>

            <Styled.Subtitle>'TI NUEVA VIZCAYA</Styled.Subtitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit
              amet consectetur adipiscing elit quisque faucibus.
            </p>

            <Styled.Actions>
              <Styled.Button href="#register">Register</Styled.Button>
              {/* <Styled.GhostButton href="#trails">View Trails</Styled.GhostButton> */}
            </Styled.Actions>
          </Styled.PostTitle>
        </Styled.Parallax>
      </Styled.Container>

      <Styled.Welcome>
        <Styled.WelcomeContent>
          <Styled.EyebrowSpan>Welcome</Styled.EyebrowSpan>
          <Styled.WelcomeTitle>
            Fellow <em>Explorer</em>, your next trail starts here
          </Styled.WelcomeTitle>
          <Styled.WelcomeText>
            We're glad you're here. Whether you're taking your first steps on
            the trail or you've been hiking for years, there's always a new
            place to discover and a new adventure to enjoy. Explore peaceful
            forests, scenic mountain paths, and breathtaking views while
            connecting with nature and enjoying the journey. There's a trail for
            everyone, so take a deep breath, lace up your boots, and let's get
            exploring.
          </Styled.WelcomeText>
          <Styled.Highlights>
            <li>Beginner friendly</li>
            <li>Scenic routes</li>
            <li>Community hikes</li>
          </Styled.Highlights>
        </Styled.WelcomeContent>

        <Styled.WelcomeVisual>
          <Image
            src="/images/hikingImage.png"
            alt="Hikers on a mountain trail"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </Styled.WelcomeVisual>
      </Styled.Welcome>
    </Fragment>
  );
}
