import { createMetadata } from "@/lib/seo";
import TrailCards from "./components/cards/page";
import Footer from "./components/footer/page";
import SponsorSlider from "./components/sponsors/page";
import ScrollToTop from "./components/scroll-to-top/page";
import Dashboard from "./dashboard/page";
import * as MainStyle from "./page.styled";
import Navigation from "./components/navigation/page";

export const metadata = createMetadata({
  title: "Ultra Trail",
  description: "Learn more about your company",
});

export default function Home() {
  return (
    <main>
      <Navigation />
      <Dashboard />

      <MainStyle.Divider />

      <TrailCards />
      <SponsorSlider />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
