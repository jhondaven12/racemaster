"use client"
import{ useState } from "react";
import { trails } from "./cards-constant";
import Image from "next/image";
import * as Styled from "./cards.styled";
import { MdLocationOn, MdDirectionsRun, MdOutlineDateRange  } from "react-icons/md";
import { FaMountainSun } from "react-icons/fa6";
import { format } from "date-fns";

export default function TrailCards(){
    const [activeTrails, setActiveTrails] = useState([]);

    return (
        <Styled.CardContainer>
            {trails.map((item) => (
                <Styled.CardContent key={item.id}>
                    <Styled.ImageWrapper>
                        <Image 
                            src="/images/hikingImage.png"
                            alt={`${item.trailsName}`}
                            fill
                            style={{ 
                                objectFit: "cover", 
                                objectPosition: "50% 100%"
                            }}
                        />

                        <Styled.Imagedate>
                            <p>
                                <i><MdOutlineDateRange/></i>
                                {format(new Date(item.date), "MMM/dd/yyyy")}
                            </p>
                        </Styled.Imagedate>

                        <Styled.ImageInfo>
                            <p>{item.trailsName}</p>
                            
                            <div>
                                <p>
                                    <i><MdLocationOn/></i> 
                                    {item.location}
                                </p>
                                <p>
                                    <i><MdOutlineDateRange/> </i>
                                    {item.trailDistance}
                                </p>
                                <p>
                                    <i><FaMountainSun/></i>
                                    {item.elevationGain}
                                </p>
                            </div>
                        </Styled.ImageInfo> 
                    </Styled.ImageWrapper>                    
                </Styled.CardContent>
            ))}
        </Styled.CardContainer>
    )
}