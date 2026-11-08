import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Gallery",
  description: "Photos from past Ultra Trail events.",
});

export default function Gallery() {
  return <h1>Gallery</h1>;
}
