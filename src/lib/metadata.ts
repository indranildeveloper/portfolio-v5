import { Metadata } from "next";

export function constructMetaData({
  title = "Indranil Halder | Portfolio",
  description = "Full Stack Web3 developer and AI enthusiast who has a predilection for design and enjoy working on projects where approaching design and development as co-dependent processes can lead to smarter solutions and a better overall product experience for human beings.",
  image = "/screenshot.png",
  icons = "/icon.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@indranilcoder",
    },
    icons,
    metadataBase: new URL("https://indranildeveloper.in"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
