import type { MetadataRoute } from "next";
import {
  getPublicPaths,
  getSitemapChangeFrequency,
  getSitemapPriority,
  toAbsoluteUrl,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return getPublicPaths().map((path) => ({
    url: toAbsoluteUrl(path),
    lastModified,
    changeFrequency: getSitemapChangeFrequency(path),
    priority: getSitemapPriority(path),
  }));
}
