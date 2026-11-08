import { sponsors } from "./sponsors-constant";
import * as Styled from "./sponsors.styled";

export default function SponsorSlider() {
    // the list is rendered twice so the -50% loop restarts seamlessly
    const loop = [...sponsors, ...sponsors];

    return (
        <Styled.Section>
            <Styled.Heading>Our Sponsors</Styled.Heading>

            <Styled.Viewport>
                <Styled.Track>
                    {loop.map((sponsor, index) => (
                        <Styled.Item
                            key={`${sponsor.id}-${index}`}
                            aria-hidden={index >= sponsors.length}
                        >
                            {sponsor.logo ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={sponsor.logo} alt={sponsor.name} />
                            ) : (
                                sponsor.name
                            )}
                        </Styled.Item>
                    ))}
                </Styled.Track>
            </Styled.Viewport>
        </Styled.Section>
    );
}
