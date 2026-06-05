import { siteNavigation } from "@/components/luna/navigation";

export const siteUrl = "https://www.lunaservice.it";

const legalPaths = ["/privacy-policy/", "/cookie-policy/", "/note-legali/"] as const;

const hubPaths = new Set([
  "/pulizie-hotel-roma/",
  "/pulizie-strutture-ricettive-roma/",
  "/pulizie-straordinarie-roma/",
  "/pulizie-condominiali-roma/",
  "/sanificazione-ambienti-roma/",
  "/chi-siamo/",
  "/aree-servite/",
  "/contatti/",
]);

/** All public indexable paths (trailing slash, aligned with canonicals). */
export function getPublicPaths(): string[] {
  const paths = new Set<string>(["/"]);

  for (const item of siteNavigation) {
    paths.add(item.href);
    for (const child of item.children ?? []) {
      paths.add(child.href);
    }
  }

  for (const path of legalPaths) {
    paths.add(path);
  }

  return [...paths].sort((a, b) => a.localeCompare(b));
}

export function toAbsoluteUrl(path: string): string {
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path}`;
}

export function getSitemapPriority(path: string): number {
  if (path === "/") return 1;
  if (hubPaths.has(path)) return 0.9;
  if ((legalPaths as readonly string[]).includes(path)) return 0.3;
  return 0.8;
}

export function getSitemapChangeFrequency(path: string): "weekly" | "monthly" | "yearly" {
  if ((legalPaths as readonly string[]).includes(path)) return "yearly";
  if (path === "/" || hubPaths.has(path)) return "weekly";
  return "monthly";
}
