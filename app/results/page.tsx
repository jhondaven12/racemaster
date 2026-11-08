import * as Styled from "./results.styled";
import Image from "next/image";
import { racesResults } from "./results-constant";
import { Divider } from "../page.styled";

export default function Results(){

    return(
        <Styled.Container>
            <Styled.Body>
                <div>
                    <h4>Results</h4>

                    <Styled.CardsContent>
                        {racesResults.map((i, index) => (
                            <Styled.ImageWrapper key={i.id}>
                                <Image
                                    src="/images/hikingImage.png"
                                    alt={i.trailsName}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    priority={index === 0}
                                    style={{ objectPosition: "50% 100%" }}
                                    />

                                <Styled.ImageInfo>
                                    <div>
                                         <h6>{i.eventName}</h6>
                                        <p>{i.location}{" "}{i.date}</p>
                                    </div>

                                    <Divider/>
                                                               
                                    <ul>
                                        <li><em>{i.races}</em> <br/> Races</li>
                                        <li><em>{i.finishers}</em> <br/> Finishers</li>
                                        <li><em>{i.dnf}</em> <br/> DNF</li>
                                    </ul>
                                </Styled.ImageInfo>
                            </Styled.ImageWrapper>
                        ))} 
                    </Styled.CardsContent>
                </div>
            </Styled.Body>
        </Styled.Container>
    )
}