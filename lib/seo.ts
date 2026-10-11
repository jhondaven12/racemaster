import type { Metadata } from "next";

export function createMetadata({
    title,
    description,
    image,
}: {
    title: string,
    description: string,
    image?: string,
}): Metadata {
    return {
        title, 
        description,
        openGraph: {
            title,
            description,
            images: image ? [image] : undefined
        }
    }
}