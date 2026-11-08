import { createMetadata } from "@/lib/seo";
import TrailCards from "./components/cards/page";
import SponsorSlider from "./components/sponsors/page";
import Dashboard from "./dashboard/page";
import * as MainStyle from "./page.styled";

export const metadata = createMetadata({
  title: "Ultra Trail",
  description:
    "Upcoming Ultra Trail events in Nueva Vizcaya: distances, elevation gain, dates and results.",
});

export default function Home() {
  return (
    <main>
      <Dashboard />
      <MainStyle.Divider />
      <TrailCards />
      <SponsorSlider />
    </main>
  );
}
