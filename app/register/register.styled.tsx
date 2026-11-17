import styled from "styled-components";

const GREEN = "var(--green)";
const DARK = "#111";
const GOLD = "#4ade80";
const BORDER = "rgba(128, 128, 128, 0.35)";

export const Page = styled.main`
  background: #fff;
  color: #1d1c1c;
  font-family: var(--font-barlow), Arial, sans-serif;
  padding-top: 90px;

  h1,
  h2,
  h3,
  h4,
  button {
    font-family: var(--font-barlow-condensed), Arial, sans-serif;
  }

  p {
    font-size: 15px;
  }
`;

/* ---------- hero ---------- */
export const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 48px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ShirtWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Eyebrow = styled.span`
  font-size: 14px;
  opacity: 0.7;
`;

export const YearRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 2px dashed ${BORDER};

  strong {
    font-family: var(--font-barlow-condensed), Arial, sans-serif;
    font-size: 88px;
    line-height: 0.9;
    color: var(--green);
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Chips = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

export const Chip = styled.div<{ $accent: string }>`
  padding: 10px 12px;
  border: 1px solid ${BORDER};
  border-top: 4px solid ${({ $accent }) => $accent};
  border-radius: 10px;

  b {
    display: block;
    font-family: var(--font-barlow-condensed), Arial, sans-serif;
    font-size: 24px;
  }

  small {
    font-size: 13px;
    opacity: 0.6;
  }
`;

export const PrimaryButton = styled.button`
  align-self: flex-start;
  padding: 14px 32px;
  font-size: 24px;
  color: #fff;
  background: ${DARK};
  border: 0;
  border-radius: 999px;
  cursor: pointer;

  &:disabled {
    background: #c7d0cb;
    color: #6b7a72;
    cursor: not-allowed;
  }
`;

/* ---------- form shell ---------- */
export const Form = styled.form`
  max-width: 880px;
  margin: 0 auto;
  padding: 0 24px 80px;
  border-top: 1px solid ${BORDER};
  padding-top: 32px;
`;

export const Notice = styled.div`
  margin-bottom: 32px;
  padding: 16px 20px;
  border: 1px solid ${BORDER};
  border-left: 4px solid ${GOLD};
  border-radius: 12px;
  font-size: 15px;
`;

export const Step = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 44px 1fr;
  column-gap: 20px;
  padding-bottom: 36px;

  &::before {
    content: "";
    position: absolute;
    left: 21px;
    top: 44px;
    bottom: 0;
    border-left: 2px dashed rgba(0, 128, 0, 0.5);
  }

  &:last-of-type::before {
    display: none;
  }

  @media (max-width: 640px) {
    column-gap: 12px;
  }
`;

export const Badge = styled.span<{ $variant?: "info" | "last" }>`
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-family: var(--font-barlow-condensed), Arial, sans-serif;
  font-size: 22px;
  font-weight: 700;
  background: #fff;
  border: 2px solid
    ${({ $variant }) => ($variant === "info" ? GOLD : GREEN)};
  color: ${({ $variant }) =>
    $variant === "info" ? GOLD : $variant === "last" ? "#fff" : DARK};
  background: ${({ $variant }) => ($variant === "last" ? DARK : "#fff")};
  font-style: ${({ $variant }) => ($variant === "info" ? "italic" : "normal")};
`;

export const StepBody = styled.div`
  min-width: 0;

  h2 {
    font-size: 40px;
    line-height: 1.1;
    color: ${DARK};
  }

  & > p {
    margin: 4px 0 14px;
    opacity: 0.65;
  }
`;

export const Card = styled.div`
  padding: 16px;
  border: 1px solid ${BORDER};
  border-radius: 20px;
`;

export const InnerCard = styled.div`
  padding: 20px;
  border: 1px solid ${BORDER};
  border-radius: 14px;

  h3 {
    margin-bottom: 12px;
    font-size: 28px;
  }

  ol {
    padding-left: 22px;
    list-style: lower-alpha;
    display: grid;
    gap: 8px;
    margin-bottom: 18px;
    line-height: 1.5;
  }

  ul {
    padding-left: 22px;
    margin: 8px 0;
  }

  p {
    margin-bottom: 12px;
    line-height: 1.5;
  }
`;

/* ---------- event details ---------- */
export const EventRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid ${BORDER};
  border-radius: 14px;

  h3 {
    font-size: 26px;
  }
`;

export const PillButton = styled.button`
  padding: 6px 16px;
  font-size: 15px;
  font-weight: 700;
  color: ${GREEN};
  background: #fff;
  border: 1px solid ${BORDER};
  border-radius: 999px;
  cursor: pointer;
`;

export const Details = styled.div`
  margin-top: 12px;
  padding: 0 4px;
  display: grid;
  gap: 6px;
  line-height: 1.5;
`;

/* ---------- race select ---------- */
export const RaceGroup = styled.div`
  h3 {
    display: inline;
    font-size: 30px;
    color: ${GREEN};
  }

  span {
    margin-left: 8px;
    font-size: 14px;
    opacity: 0.6;
  }
`;

export const RaceOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 10px 0 12px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const RaceOption = styled.label<{ $on: boolean }>`
  position: relative;
  display: block;
  padding: 14px 16px 12px;
  cursor: pointer;
  border: 1px solid ${({ $on }) => ($on ? GREEN : BORDER)};
  border-top: 5px solid ${GREEN};
  border-radius: 12px;
  background: ${({ $on }) => ($on ? "rgba(0, 128, 0, 0.1)" : "#fff")};

  input {
    position: absolute;
    opacity: 0;
  }

  b {
    display: block;
    font-family: var(--font-barlow-condensed), Arial, sans-serif;
    font-size: 40px;
    line-height: 1;
  }

  small {
    font-size: 14px;
    opacity: 0.65;
  }

  i {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid ${BORDER};
    ${({ $on }) =>
      $on &&
      `border: 8px solid ${GREEN}; background: #fff; width: 38px; height: 38px;`}
  }
`;

export const PriceBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  color: #fff;
  background: #0b0b0b;
  border-radius: 12px;

  span {
    font-size: 14px;
    opacity: 0.85;
  }

  b {
    font-family: var(--font-barlow-condensed), Arial, sans-serif;
    font-size: 34px;
    color: ${GOLD};
  }
`;

/* ---------- fields ---------- */
export const Row = styled.div<{ $cols?: string }>`
  display: grid;
  grid-template-columns: ${({ $cols }) => $cols ?? "1fr 1fr"};
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;

  em {
    font-style: normal;
    font-weight: 400;
    opacity: 0.6;
  }

  sup {
    color: #c0281c;
  }

  input,
  select {
    width: 100%;
    padding: 12px 14px;
    font: inherit;
    font-weight: 400;
    background: #fff;
    border: 1px solid ${BORDER};
    border-radius: 12px;
  }

  input:disabled {
    background: #edf1ee;
  }
`;

export const Segmented = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Pill = styled.label<{ $on: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid ${({ $on }) => ($on ? GREEN : BORDER)};
  background: ${({ $on }) => ($on ? "rgba(0, 128, 0, 0.1)" : "#fff")};
  border-radius: 999px;

  input {
    position: absolute;
    opacity: 0;
  }
`;

export const Upload = styled.label`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  cursor: pointer;
  border: 1px dashed rgba(0, 128, 0, 0.5);
  border-radius: 12px;
  background: #fafbfa;
  font-size: 15px;

  svg {
    color: ${GREEN};
  }

  b {
    display: block;
  }

  small {
    opacity: 0.6;
  }

  input {
    display: none;
  }
`;

export const Hint = styled.p`
  margin-top: 8px !important;
  font-size: 13px !important;
  opacity: 0.65;
`;

export const TextLink = styled.button`
  margin-top: 14px;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  color: ${GREEN};
  background: none;
  border: 0;
  cursor: pointer;
`;

/* ---------- payment ---------- */
export const Inline = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;

  input {
    flex: 1;
    padding: 12px 14px;
    font: inherit;
    border: 1px solid ${BORDER};
    border-radius: 12px;
  }

  button {
    padding: 0 20px;
    font-size: 17px;
    background: #fff;
    border: 1px solid #1d1c1c;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const LineItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid ${BORDER};
  border-bottom: 0;
  border-radius: 12px 12px 0 0;
`;

export const AmountBar = styled(PriceBar)`
  border-radius: 0 0 12px 12px;
  margin-bottom: 14px;

  span {
    font-weight: 700;
    font-size: 15px;
    opacity: 1;
  }
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4px;
  margin-bottom: 14px;
  background: rgba(128, 128, 128, 0.15);
  border-radius: 12px;
`;

export const Tab = styled.button<{ $on: boolean }>`
  padding: 10px;
  font-family: var(--font-barlow), Arial, sans-serif !important;
  font-size: 15px;
  font-weight: 700;
  border: 0;
  border-radius: 9px;
  cursor: pointer;
  background: ${({ $on }) => ($on ? "#fff" : "transparent")};
  box-shadow: ${({ $on }) => ($on ? "0 1px 3px rgba(0,0,0,.15)" : "none")};
  opacity: ${({ $on }) => ($on ? 1 : 0.6)};
`;

export const QrBox = styled.div`
  width: 280px;
  max-width: 100%;
  margin: 0 auto 18px;
  padding: 24px;
  text-align: center;
  border: 1px solid ${BORDER};
  border-radius: 12px;

  div {
    display: grid;
    place-items: center;
    aspect-ratio: 1 / 1;
    margin-bottom: 12px;
    font-size: 13px;
    color: #6b7a72;
    background: repeating-conic-gradient(#eef1ef 0% 25%, #fff 0% 50%) 0 / 20px
      20px;
  }

  p {
    font-size: 13px;
    opacity: 0.7;
  }
`;

/* ---------- review ---------- */
export const Summary = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 16px;
  border: 1px solid ${BORDER};
  border-radius: 12px;

  div {
    padding: 12px 14px;
    border-right: 1px solid ${BORDER};
    font-size: 14px;
  }

  div:last-child {
    border-right: 0;
  }

  small {
    display: block;
    opacity: 0.65;
  }

  b {
    font-size: 15px;
  }

  b.muted {
    font-weight: 400;
    opacity: 0.5;
  }

  b.big {
    font-family: var(--font-barlow-condensed), Arial, sans-serif;
    font-size: 24px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Consent = styled.label`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin: 12px -20px -20px;
  padding: 16px 20px;
  background: rgba(0, 128, 0, 0.06);
  border-radius: 0 0 14px 14px;
  cursor: pointer;
  font-size: 15px;
  line-height: 1.4;

  input {
    width: 22px;
    height: 22px;
    flex: none;
  }

  sup {
    color: #c0281c;
  }
`;

export const Done = styled.section`
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 24px 100px;
  text-align: center;

  h2 {
    font-size: 40px;
    margin-bottom: 12px;
  }
`;
