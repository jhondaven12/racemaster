import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import Navigation from "./components/navigation/page";
import Footer from "./components/footer/page";
import ScrollToTop from "./components/scroll-to-top/page";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Ultra Trail",
    template: "%s | Ultra Trail",
  },
  description:
    "Ultra Trail 'Ti Nueva Vizcaya: upcoming trail events, race results, rules and gallery.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
