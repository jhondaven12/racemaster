import { createMetadata } from "@/lib/seo"

export const metadata = createMetadata({
    title: "About Us",
    description: "Learn more about your company"
});

export default function  AboutPage(){
    return(
        <h1>About Page</h1>
    )
}