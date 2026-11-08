import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Rules",
  description: "Race rules and guidelines for Ultra Trail participants.",
});

export default function Rules() {
  return <h1>Rules</h1>;
}
