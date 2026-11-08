import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Results",
  description:
    "Finisher counts, completion rates and trail details from every Ultra Trail event.",
});

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
