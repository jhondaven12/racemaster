"use client";
import { useState } from "react";
import Image from "next/image";
import { format, differenceInYears } from "date-fns";
import { MdUploadFile, MdPersonOutline } from "react-icons/md";
import * as Styled from "./register.styled";

type Trail = {
  id: number;
  trailsName: string;
  location: string;
  trailDistance: string;
  elevationGain: string;
  date: string;
};

type RaceKey = "50KM" | "25KM" | "15KM";

// TODO: replace with the real fees and shirt artwork
const SHIRT_SRC = "/images/ultra.png";
const RACES: { key: RaceKey; label: string; fee: number }[] = [
  { key: "50KM", label: "Ultra distance", fee: 3200 },
  { key: "25KM", label: "Long trail", fee: 2500 },
  { key: "15KM", label: "Short trail, all levels", fee: 1800 },
];
const SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
const MAX_FILE = 10 * 1024 * 1024;

const peso = (n: number) =>
  `₱${n.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;

function FileInput({
  name,
  title,
  accept,
  required,
  icon,
  file,
  onFile,
}: {
  name: string;
  title: string;
  accept: string;
  required?: boolean;
  icon?: React.ReactNode;
  file?: File;
  onFile: (name: string, f?: File) => void;
}) {
  return (
    <Styled.Upload>
      {icon ?? <MdUploadFile size={28} />}
      <span>
        <b>{title}</b>
        <small>{file ? file.name : "No file chosen"}</small>
      </span>
      <input
        type="file"
        name={name}
        accept={accept}
        required={required}
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f && f.size > MAX_FILE) {
            alert("File is larger than 10 MB.");
            e.target.value = "";
            return onFile(name, undefined);
          }
          onFile(name, f);
        }}
      />
    </Styled.Upload>
  );
}

export default function RegisterForm({ trail }: { trail: Trail }) {
  const [race, setRace] = useState<RaceKey>("50KM");
  const [v, setV] = useState<Record<string, string>>({ nationality: "Filipino" });
  const [files, setFiles] = useState<Record<string, File | undefined>>({});
  const [showEvent, setShowEvent] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [pay, setPay] = useState<"GCash" | "BPI">("GCash");
  const [discount, setDiscount] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [done, setDone] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setV((p) => ({ ...p, [e.target.name]: e.target.value }));
  const setFile = (n: string, f?: File) => setFiles((p) => ({ ...p, [n]: f }));

  const date = new Date(trail.date);
  const selected = RACES.find((r) => r.key === race)!;
  const age = v.birthdate
    ? differenceInYears(new Date(), new Date(v.birthdate))
    : null;
  const needsConsent = race === "50KM" && age !== null && age <= 13;
  const runner = [v.firstName, v.surname].filter(Boolean).join(" ");

  const toForm = () =>
    document
      .getElementById("choose-race")
      ?.scrollIntoView({ behavior: "smooth" });

  if (done) {
    return (
      <Styled.Page>
        <Styled.Done>
          <h2>You&apos;re registered!</h2>
          <p>
            Thanks, {v.firstName}. No confirmation email is sent right away.
            Please allow 3-5 business days (excluding weekends).
          </p>
        </Styled.Done>
      </Styled.Page>
    );
  }

  const text = (
    name: string,
    label: string,
    opts: {
      required?: boolean;
      type?: string;
      placeholder?: string;
      optional?: boolean;
      maxLength?: number;
    } = {},
  ) => (
    <Styled.Field>
      <span>
        {label}
        {opts.required && <sup> *</sup>}
        {opts.optional && <em> (optional)</em>}
      </span>
      <input
        type={opts.type ?? "text"}
        name={name}
        required={opts.required}
        placeholder={opts.placeholder ?? label}
        maxLength={opts.maxLength}
        value={v[name] ?? ""}
        onChange={set}
      />
    </Styled.Field>
  );

  const radios = (name: string, options: string[]) => (
    <Styled.Segmented>
      {options.map((o) => (
        <Styled.Pill key={o} $on={v[name] === o}>
          <input
            type="radio"
            name={name}
            value={o}
            required
            checked={v[name] === o}
            onChange={set}
          />
          {o}
        </Styled.Pill>
      ))}
    </Styled.Segmented>
  );

  return (
    <Styled.Page>
      <Styled.Hero>
        <Styled.ShirtWrap>
          <Image
            src={SHIRT_SRC}
            alt={`${trail.trailsName} finisher shirt`}
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            style={{ objectFit: "contain" }}
            priority
          />
        </Styled.ShirtWrap>
        <Styled.HeroInfo>
          <Styled.Eyebrow>{trail.trailsName}</Styled.Eyebrow>
          <Styled.YearRow>
            <strong>{date.getFullYear()}</strong>
            <div>
              <span>{format(date, "MMMM dd, yyyy")}</span>
              <span>{trail.location}</span>
            </div>
          </Styled.YearRow>
          <p>
            Hit the {trail.trailsName} trails. Pick your distance: 15 KM, 25 KM
            or 50 KM.
          </p>
          <Styled.Chips>
            <Styled.Chip $accent="#111">
              <b>15 KM</b>
              <small>short trail</small>
            </Styled.Chip>
            <Styled.Chip $accent="green">
              <b>25 KM</b>
              <small>long trail</small>
            </Styled.Chip>
            <Styled.Chip $accent="#111">
              <b>50 KM</b>
              <small>ultra</small>
            </Styled.Chip>
          </Styled.Chips>
          <Styled.PrimaryButton type="button" onClick={toForm}>
            Start registration
          </Styled.PrimaryButton>
        </Styled.HeroInfo>
      </Styled.Hero>

      <Styled.Form
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: send race, values and files to the registration API
          setDone(true);
        }}
      >
        <Styled.Notice>
          No confirmation email is sent right after you submit. Please allow{" "}
          <b>3-5 business days (excluding weekends)</b> for your confirmation
          email.
        </Styled.Notice>

        {/* i: event details */}
        <Styled.Step>
          <Styled.Badge $variant="info">i</Styled.Badge>
          <Styled.StepBody>
            <h2>Event details</h2>
            <p>Open to read the race information.</p>
            <Styled.Card>
              <Styled.EventRow>
                <h3>
                  {trail.trailsName} {date.getFullYear()}
                </h3>
                <Styled.PillButton
                  type="button"
                  onClick={() => setShowEvent((s) => !s)}
                >
                  {showEvent ? "Close" : "Read"}
                </Styled.PillButton>
              </Styled.EventRow>
              {showEvent && (
                <Styled.Details>
                  <span>Date: {format(date, "MMMM dd, yyyy")}</span>
                  <span>Location: {trail.location}</span>
                  <span>Trail distance: {trail.trailDistance}</span>
                  <span>Elevation gain: {trail.elevationGain}</span>
                </Styled.Details>
              )}
            </Styled.Card>
          </Styled.StepBody>
        </Styled.Step>

        {/* 1 */}
        <Styled.Step id="choose-race">
          <Styled.Badge>1</Styled.Badge>
          <Styled.StepBody>
            <h2>Choose your race</h2>
            <p>
              Your race sets the registration fee and what you need to qualify.
            </p>
            <Styled.Card>
              <Styled.RaceGroup>
                <h3>Trail Run</h3>
                <span>Pick your distance</span>
              </Styled.RaceGroup>
              <Styled.RaceOptions>
                {RACES.map((r) => (
                  <Styled.RaceOption key={r.key} $on={race === r.key}>
                    <input
                      type="radio"
                      name="race"
                      checked={race === r.key}
                      onChange={() => setRace(r.key)}
                    />
                    <b>{r.key}</b>
                    <small>{r.label}</small>
                    <i />
                  </Styled.RaceOption>
                ))}
              </Styled.RaceOptions>
              <Styled.PriceBar>
                <span>Trail Run {race}</span>
                <b>{peso(selected.fee)}</b>
              </Styled.PriceBar>
            </Styled.Card>
          </Styled.StepBody>
        </Styled.Step>

        {/* 2 */}
        <Styled.Step>
          <Styled.Badge>2</Styled.Badge>
          <Styled.StepBody>
            <h2>Before you register</h2>
            <p>
              Check what you need. Some races also need a prerequisite race
              upload.
            </p>
            <Styled.Card>
              <Styled.InnerCard>
                <h3>Qualification</h3>
                <ol>
                  <li>
                    <b>50KM:</b> runners 13 years old and below must upload a
                    Parent/Guardian consent form signed by a parent or guardian.
                    The upload appears under Runner details once you choose 50KM
                    and enter your birthdate.
                  </li>
                  <li>
                    <b>25KM and 15KM:</b> no Parent/Guardian consent form
                    needed.
                  </li>
                  <li>
                    All runners must present a <b>medical certificate</b> when
                    claiming their race kit. You don&apos;t need to upload it
                    here.
                  </li>
                  <li>
                    <b>50KM:</b> prerequisite race, at least 21 KM (road or
                    trail). Upload your proof below.
                  </li>
                </ol>
                {race === "50KM" ? (
                  <>
                    <b style={{ fontSize: 14 }}>
                      Upload prerequisite race{" "}
                      <span style={{ color: "#c0281c" }}>*</span>
                    </b>
                    <div style={{ marginTop: 6 }}>
                      <FileInput
                        name="prerequisite"
                        title="Add file"
                        accept="image/*,application/pdf"
                        required
                        file={files.prerequisite}
                        onFile={setFile}
                      />
                    </div>
                    <Styled.Hint>
                      Result screenshot or finisher certificate of a race of at
                      least 21 KM, showing your name. Image or PDF, max 10 MB.
                    </Styled.Hint>
                  </>
                ) : (
                  <Styled.Hint>
                    No prerequisite race is needed for {race}.
                  </Styled.Hint>
                )}
              </Styled.InnerCard>
            </Styled.Card>
          </Styled.StepBody>
        </Styled.Step>

        {/* 3 */}
        <Styled.Step>
          <Styled.Badge>3</Styled.Badge>
          <Styled.StepBody>
            <h2>Runner details</h2>
            <p>
              Enter your name exactly as it should appear on your bib and
              results.
            </p>
            <Styled.Card>
              <Styled.Row $cols="1fr">
                {text("email", "Email", {
                  required: true,
                  type: "email",
                  placeholder: "you@example.com",
                })}
              </Styled.Row>
              <Styled.Row $cols="2fr 2fr 0.8fr 1fr">
                {text("surname", "Surname", { required: true })}
                {text("firstName", "First name", { required: true })}
                {text("mi", "M.I.", { maxLength: 2 })}
                <Styled.Field>
                  <span>Suffix</span>
                  <select name="suffix" value={v.suffix ?? ""} onChange={set}>
                    <option value="">None</option>
                    {["Jr.", "Sr.", "II", "III", "IV"].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Styled.Field>
              </Styled.Row>
              <Styled.Row $cols="1.2fr 0.6fr 1.2fr">
                {text("birthdate", "Birthdate", {
                  required: true,
                  type: "date",
                })}
                <Styled.Field>
                  <span>Age</span>
                  <input
                    disabled
                    placeholder="Auto"
                    value={age !== null && age >= 0 ? age : ""}
                    readOnly
                  />
                </Styled.Field>
                <Styled.Field>
                  <span>
                    Nationality <sup>*</sup>
                  </span>
                  <select
                    name="nationality"
                    required
                    value={v.nationality}
                    onChange={set}
                  >
                    {["Filipino", "American", "Japanese", "Korean", "Other"].map(
                      (n) => (
                        <option key={n}>{n}</option>
                      ),
                    )}
                  </select>
                </Styled.Field>
              </Styled.Row>
              <Styled.Row $cols="1fr">
                <Styled.Field as="div">
                  <span>
                    Gender <sup>*</sup>
                  </span>
                  {radios("gender", ["Male", "Female", "Non-binary"])}
                </Styled.Field>
              </Styled.Row>
              {needsConsent && (
                <Styled.Row $cols="1fr">
                  <Styled.Field as="div">
                    <span>
                      Parent/Guardian consent form <sup>*</sup>
                    </span>
                    <FileInput
                      name="consent"
                      title="Add signed form"
                      accept="image/*,application/pdf"
                      required
                      file={files.consent}
                      onFile={setFile}
                    />
                  </Styled.Field>
                </Styled.Row>
              )}
              <Styled.Field as="div">
                <span>
                  Runner photo <em>(optional)</em>
                </span>
                <FileInput
                  name="photo"
                  title="Choose photo"
                  accept="image/jpeg,image/png"
                  icon={<MdPersonOutline size={28} />}
                  file={files.photo}
                  onFile={setFile}
                />
              </Styled.Field>
              <Styled.Hint>
                Clear, front-facing photo. JPG or PNG, max 10 MB.
              </Styled.Hint>
            </Styled.Card>
          </Styled.StepBody>
        </Styled.Step>

        {/* 4 */}
        <Styled.Step>
          <Styled.Badge>4</Styled.Badge>
          <Styled.StepBody>
            <h2>Contact and emergency</h2>
            <p>
              Race marshals use your emergency contact if anything happens on
              the course.
            </p>
            <Styled.Card>
              <Styled.Row $cols="1fr">
                {text("address", "Complete address", {
                  required: true,
                  placeholder:
                    "House no., street, barangay, city/municipality, province",
                })}
              </Styled.Row>
              <Styled.Row>
                {text("phone", "Personal contact number", {
                  required: true,
                  type: "tel",
                  placeholder: "09XX XXX XXXX",
                })}
                {text("team", "Team", {
                  optional: true,
                  placeholder: "Team or running community",
                })}
              </Styled.Row>
              <Styled.Row>
                {text("ecName", "Emergency contact person", {
                  required: true,
                  placeholder: "Full name",
                })}
                {text("ecPhone", "Emergency contact number", {
                  required: true,
                  type: "tel",
                  placeholder: "09XX XXX XXXX",
                })}
              </Styled.Row>
            </Styled.Card>
          </Styled.StepBody>
        </Styled.Step>

        {/* 5 */}
        <Styled.Step>
          <Styled.Badge>5</Styled.Badge>
          <Styled.StepBody>
            <h2>Race kit</h2>
            <p>Choose the size of your finisher shirt.</p>
            <Styled.Card>
              <Styled.Row $cols="1fr 1fr">
                <Styled.Field>
                  <span>
                    Finisher shirt size <sup>*</sup>
                  </span>
                  <select
                    name="shirtSize"
                    required
                    value={v.shirtSize ?? ""}
                    onChange={set}
                  >
                    <option value="">Select size</option>
                    {SIZES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Styled.Field>
              </Styled.Row>
              <Styled.TextLink
                type="button"
                onClick={() => setShowChart((s) => !s)}
              >
                {showChart ? "Hide size chart" : "View size chart"}
              </Styled.TextLink>
              {showChart && (
                // TODO: replace with the real size chart
                <Styled.Hint>Size chart coming soon.</Styled.Hint>
              )}
            </Styled.Card>
          </Styled.StepBody>
        </Styled.Step>

        {/* 6 */}
        <Styled.Step>
          <Styled.Badge>6</Styled.Badge>
          <Styled.StepBody>
            <h2>Payment</h2>
            <p>Pay through any channel below, then upload your receipt.</p>
            <Styled.Card>
              <Styled.Field as="div" style={{ marginBottom: 12 }}>
                <span>
                  Discount code <em>(optional)</em>
                </span>
                <Styled.Inline>
                  <input
                    placeholder="Enter code"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                  {/* TODO: validate the code against the API */}
                  <button type="button">Apply</button>
                </Styled.Inline>
              </Styled.Field>
              <Styled.LineItem>
                <span>Registration, Trail Run {race}</span>
                <span>{peso(selected.fee)}</span>
              </Styled.LineItem>
              <Styled.AmountBar>
                <span>Amount to pay</span>
                <b>{peso(selected.fee)}</b>
              </Styled.AmountBar>
              <Styled.Tabs>
                {(["GCash", "BPI"] as const).map((t) => (
                  <Styled.Tab
                    key={t}
                    type="button"
                    $on={pay === t}
                    onClick={() => setPay(t)}
                  >
                    {t}
                  </Styled.Tab>
                ))}
              </Styled.Tabs>
              <Styled.QrBox>
                {/* TODO: replace with the real QR code and account details */}
                <div>{pay} QR code</div>
                <p>Transfer fees may apply.</p>
              </Styled.QrBox>
              <Styled.Field as="div">
                <span>
                  Proof of payment <sup>*</sup>
                </span>
                <FileInput
                  name="proof"
                  title="Choose file"
                  accept="image/*,application/pdf"
                  required
                  file={files.proof}
                  onFile={setFile}
                />
              </Styled.Field>
            </Styled.Card>
          </Styled.StepBody>
        </Styled.Step>

        {/* 7 */}
        <Styled.Step>
          <Styled.Badge $variant="last">7</Styled.Badge>
          <Styled.StepBody>
            <h2>Review and submit</h2>
            <p>Check your entry, accept the privacy consent, then submit.</p>
            <Styled.Card>
              <Styled.Summary>
                <div>
                  <small>Runner</small>
                  <b className={runner ? "" : "muted"}>{runner || "Not yet"}</b>
                </div>
                <div>
                  <small>Race</small>
                  <b>Trail Run {race}</b>
                </div>
                <div>
                  <small>Finisher shirt</small>
                  <b className={v.shirtSize ? "" : "muted"}>
                    {v.shirtSize || "Not yet"}
                  </b>
                </div>
                <div>
                  <small>Amount to pay</small>
                  <b className="big">{peso(selected.fee)}</b>
                </div>
              </Styled.Summary>
              <Styled.InnerCard>
                <h3>Data privacy consent</h3>
                <p>
                  <i>Race Meister</i> ensures that all personal data is handled
                  in accordance with the Data Privacy Act of 2012 and other data
                  protection laws and that Event Organizers are bound to
                  maintain confidentiality and security of data.
                </p>
                <p>
                  By registering for this event, I hereby consent to Race
                  Meister collecting, processing, storing and disclosing my
                  personal data for the purpose of managing my participation in
                  this race.
                </p>
                <p>
                  I understand that my personal data may be shared with the
                  Event Organizers for the purpose necessary to organize and
                  conduct this race.
                </p>
                <p>
                  I consent to the use of my personal information for the
                  following purpose:
                </p>
                <ul>
                  <li>Registration and participation management</li>
                  <li>Emergency contact and safety procedures</li>
                  <li>
                    Event Documentation (eg. photos and videos which may be used
                    as event materials and be shared in social media platforms)
                  </li>
                  <li>
                    Use of anonymized and aggregated data for reporting and
                    analytics for improvement of future events.
                  </li>
                </ul>
                <p>
                  I understand I have the right to access, correct and request
                  deletion of my personal data in accordance with the
                  provisions of the law.
                </p>
                <Styled.Consent>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <span>
                    I confirm that I have read and understood the Data Privacy
                    Consent Statement and consent to the processing of my
                    personal data as described. <sup>*</sup>
                  </span>
                </Styled.Consent>
              </Styled.InnerCard>
              <Styled.PrimaryButton
                type="submit"
                disabled={!agreed}
                style={{ marginTop: 20 }}
              >
                Submit registration
              </Styled.PrimaryButton>
              {!agreed && (
                <Styled.Hint>
                  To submit, tick the Data Privacy Consent box.
                </Styled.Hint>
              )}
            </Styled.Card>
          </Styled.StepBody>
        </Styled.Step>
      </Styled.Form>
    </Styled.Page>
  );
}
