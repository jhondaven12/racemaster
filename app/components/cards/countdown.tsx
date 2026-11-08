"use client";
import { useEffect, useState } from "react";
import * as Styled from "./cards.styled";

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

type Props = {
  date: string;
};

export default function Countdown({ date }: Props) {
  // null until mounted so server and client render the same markup
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(`${date}T00:00:00`).getTime();
    const tick = () => setRemaining(target - Date.now());

    tick();
    const timer = setInterval(tick, 15 * 1000);
    return () => clearInterval(timer);
  }, [date]);

  if (remaining === null) return <Styled.Countdown aria-hidden />;

  if (remaining <= 0) {
    return (
      <Styled.Countdown>
        <Styled.CountdownEnded>Event started</Styled.CountdownEnded>
      </Styled.Countdown>
    );
  }

  const units = [
    { label: "Days", value: Math.floor(remaining / DAY) },
    { label: "Hours", value: Math.floor((remaining % DAY) / HOUR) },
    { label: "Min", value: Math.floor((remaining % HOUR) / MINUTE) },
  ];

  return (
    <Styled.Countdown role="timer" aria-label="Time until the event">
      {units.map((unit) => (
        <Styled.CountdownUnit key={unit.label}>
          <strong>{String(unit.value).padStart(2, "0")}</strong>
          <span>{unit.label}</span>
        </Styled.CountdownUnit>
      ))}
    </Styled.Countdown>
  );
}
