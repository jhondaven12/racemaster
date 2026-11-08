"use client";
import { trails } from "./cards-constant";
import Image from "next/image";
import * as Styled from "./cards.styled";
import {
  MdLocationOn,
  MdDirectionsRun,
  MdOutlineDateRange,
} from "react-icons/md";
import { FaMountainSun } from "react-icons/fa6";
import { format } from "date-fns";

export default function TrailCards() {
  return (
    <Styled.Wrapper id="trails">
      <Styled.Heading>
        Upcoming <em>Events</em>
      </Styled.Heading>
      <Styled.Description>
        Check the distance, elevation gain and date of each trail, then pick the
        one that fits your pace.
      </Styled.Description>
      <Styled.CardContainer>
        {trails.slice(0, 4).map((item, index) => (
          <Styled.CardContent key={item.id}>
            <Styled.ImageWrapper>
              <Image
                src="/images/hikingImage.png"
                alt={item.trailsName}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={index === 0}
                style={{ objectPosition: "50% 100%" }}
              />
            </Styled.ImageWrapper>

            <Styled.Imagedate>
              <MdOutlineDateRange />
              {format(new Date(item.date), "MMM dd, yyyy")}
            </Styled.Imagedate>

            <Styled.ImageInfo>
              <Styled.Title>{item.trailsName}</Styled.Title>
              <Styled.Location>
                <MdLocationOn />
                {item.location}
              </Styled.Location>

              <Styled.Stats>
                <li>
                  <MdDirectionsRun />
                  {item.trailDistance}
                </li>
                <li>
                  <FaMountainSun />
                  {item.elevationGain}
                </li>
              </Styled.Stats>
            </Styled.ImageInfo>
          </Styled.CardContent>
        ))}
      </Styled.CardContainer>
    </Styled.Wrapper>
  );
}
