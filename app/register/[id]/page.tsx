import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { trails } from "@/app/components/cards/cards-constant";
import { createMetadata } from "@/lib/seo";
import RegisterForm from "../register-form";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
});

type Props = { params: Promise<{ id: string }> };

const findTrail = (id: string) => trails.find((t) => String(t.id) === id);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const trail = findTrail((await params).id);
  return createMetadata({
    title: trail ? `Register - ${trail.trailsName}` : "Register",
    description: "Register for an Ultra Trail event.",
  });
}

export default async function RegisterPage({ params }: Props) {
  const trail = findTrail((await params).id);
  if (!trail) notFound();
  return (
    <div className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <RegisterForm trail={trail} />
    </div>
  );
}
