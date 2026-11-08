"use client";
import { useState } from "react";
import * as Styled from "./results.styled";
import Image from "next/image";
import { racesResults } from "./results-constant";

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

const getYear = (date: string) => date.slice(0, 4);

type Key = "races" | "finishers" | "dnf" | "bco";

const eventNames = [...new Set(racesResults.map((r) => r.eventName))];
const years = [...new Set(racesResults.map((r) => getYear(r.date)))].sort();

export default function Results() {
  const [event, setEvent] = useState("all");
  const [year, setYear] = useState("all");

  const filtered = racesResults.filter(
    (r) =>
      (event === "all" || r.eventName === event) &&
      (year === "all" || getYear(r.date) === year),
  );

  const sum = (key: Key) =>
    filtered.reduce((total, r) => total + Number(r[key]), 0);

  const totals = [
    { label: "Events", value: filtered.length },
    { label: "Races", value: sum("races") },
    { label: "Finishers", value: sum("finishers") },
    { label: "DNF", value: sum("dnf") },
  ];

  return (
    <Styled.Container>
      <Styled.Body>
        <Styled.Header>
          <Styled.Eyebrow>Race Results</Styled.Eyebrow>
          <h3>
            Event <em>Results</em>
          </h3>
          <p>
            Finisher counts, completion rates and trail details from every
            event.
          </p>
        </Styled.Header>

        <Styled.Filters>
          <label>
            Event{" "}
            <select value={event} onChange={(e) => setEvent(e.target.value)}>
              <option value="all">All events</option>
              {eventNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Year{" "}
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="all">All years</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </label>
        </Styled.Filters>

        <Styled.Summary>
          {totals.map((t) => (
            <li key={t.label}>
              <strong>{t.value.toLocaleString()}</strong>
              <span>{t.label}</span>
            </li>
          ))}
        </Styled.Summary>

        <Styled.CardsContent>
          {filtered.length === 0 && (
            <Styled.Empty>No results match your filters.</Styled.Empty>
          )}
          {filtered.map((i, index) => {
            const finishers = Number(i.finishers);
            const dnf = Number(i.dnf);
            const rate = Math.round((finishers / (finishers + dnf)) * 100);

            return (
              <Styled.Card key={i.id}>
                <Styled.Media>
                  <Image
                    src="/images/hikingImage.png"
                    alt={i.trailsName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <Styled.DatePill>{formatDate(i.date)}</Styled.DatePill>
                </Styled.Media>

                <Styled.Info>
                  <div>
                    <h6>{i.eventName}</h6>
                    <p>
                      {i.trailsName} · {i.location}
                    </p>
                  </div>

                  <Styled.Meta>
                    <li>{i.distance}</li>
                    <li>{i.elevationGain} gain</li>
                  </Styled.Meta>

                  <Styled.Rate $value={rate}>
                    <div>
                      <span>Finish rate</span>
                      <strong>{rate}%</strong>
                    </div>
                    <div>
                      <span />
                    </div>
                  </Styled.Rate>

                  <Styled.Stats>
                    <li>
                      <strong>{i.races}</strong>
                      <span>Races</span>
                    </li>
                    <li>
                      <strong>{i.finishers}</strong>
                      <span>Finishers</span>
                    </li>
                    <li>
                      <strong>{i.dnf}</strong>
                      <span>DNF</span>
                    </li>
                    <li>
                      <strong>{i.bco}</strong>
                      <span>BCO</span>
                    </li>
                  </Styled.Stats>
                </Styled.Info>
              </Styled.Card>
            );
          })}
        </Styled.CardsContent>
      </Styled.Body>
    </Styled.Container>
  );
}
