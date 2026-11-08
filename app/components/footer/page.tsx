import * as Styled from "../../dashboard/footer.styled";
import { CiFacebook } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

const sponsors = [
  "Acme Outdoors",
  "Summit Gear",
  "TrailFuel",
  "Highland Energy",
];

export default function Footer() {
  return (
    <Styled.Footer>
      {/* <Styled.Heading>Our Sponsors</Styled.Heading>
      <Styled.SponsorList>
        {sponsors.map((name) => (
          <Styled.Sponsor key={name}>{name}</Styled.Sponsor>
        ))}
      </Styled.SponsorList> */}

      <Styled.FooterBody>
        <div>
          <Styled.Heading>Ultra Trail</Styled.Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit
            amet consectetur adipiscing elit quisque faucibus.
          </p>
        </div>

        <div>
          <Styled.Heading>Company</Styled.Heading>
          <Styled.FooterLists>
            <li>Company One</li>
            <li>Company Two</li>
            <li>Company Three</li>
          </Styled.FooterLists>
        </div>

        <div>
          <Styled.Heading>Contact Us</Styled.Heading>
          <Styled.FooterLists>
            <li>
              <i>
                <CiFacebook />
              </i>{" "}
              ultratrail@yahoo.com
            </li>

            <li>
              <i>
                <SiGmail />
              </i>{" "}
              ultratrail@gmail.com
            </li>

            <li>
              <i>
                <BsFillTelephoneFill />
              </i>{" "}
              0987654321
            </li>
          </Styled.FooterLists>
        </div>
      </Styled.FooterBody>

      <Styled.Copyright>
        © 2026 Ultra Trail 'Ti Nueva Vizcaya. All rights reserved.
      </Styled.Copyright>
    </Styled.Footer>
  );
}
