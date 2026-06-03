import type { Metadata } from "next";
import { pageOgImages, type PublicPath } from "@/lib/page-og-images";
import { siteUrl, toAbsoluteUrl } from "@/lib/site";

const DEFAULT_OG_IMAGE = "/images/home-hero.jpg";
const OG_WIDTH = 1536;
const OG_HEIGHT = 1024;

function resolveOgImage(path: string, image?: string): string {
  const relative =
    image ?? pageOgImages[path as PublicPath] ?? DEFAULT_OG_IMAGE;
  if (relative.startsWith("http")) return relative;
  return toAbsoluteUrl(relative.startsWith("/") ? relative : `/${relative}`);
}

export function createPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: PublicPath | (string & {});
  image?: string;
}): Metadata {
  const canonical = toAbsoluteUrl(path);
  const imageUrl = resolveOgImage(path, image);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Luna Service",
      locale: "it_IT",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: OG_WIDTH,
          height: OG_HEIGHT,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export { siteUrl };
