export const lunaColors = {
  paper: "#eef1f4",
  ink: "#161714",
  accent: "#99cc33",
  accentInk: "#1a1f0d",
  textMuted: "#3a3b36",
  textSoft: "#6e6f68",
  dangerDot: "#cc3333",
} as const;

export const lunaRadii = {
  pill: "999px",
  xl: "32px",
  lg: "28px",
  md: "24px",
  sm: "20px",
  xs: "14px",
} as const;

export const lunaLayout = {
  contentWidth: "1440px",
  sidePadding: "56px",
  fullBleedInset: "24px",
  fullBleedWidth: "calc(100vw - 48px)",
} as const;

export const lunaTypography = {
  display: {
    hero: "84px",
    sectionXl: "72px",
    sectionLg: "68px",
    sectionMd: "64px",
    sectionSm: "60px",
    sectionXs: "56px",
  },
  heading: {
    h3Lg: "30px",
    h3Md: "28px",
    h3Sm: "24px",
    quote: "22px",
  },
  body: {
    lg: "18px",
    md: "17px",
    base: "16px",
    sm: "15px",
  },
  ui: {
    label: "14px",
    micro: "13px",
    caption: "12px",
    monoSm: "11px",
    monoXs: "10px",
  },
  tracking: {
    display: "-0.025em",
    displaySoft: "-0.015em",
    mono: "0.08em",
  },
} as const;

export const lunaSpacing = {
  sectionY: {
    tight: "80px",
    base: "120px",
    roomy: "160px",
  },
  gap: {
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "64px",
    xxl: "80px",
  },
} as const;

export const lunaEffects = {
  borderSoft: "1px solid rgba(0,0,0,0.06)",
  borderMedium: "1px solid rgba(0,0,0,0.08)",
  borderStrong: "1px solid rgba(0,0,0,0.12)",
  borderSoftLight: "1px solid rgba(255,255,255,0.1)",
  shadowFloat: "0 24px 60px -20px rgba(0,0,0,0.18)",
  shadowSoft: "0 1px 0 rgba(0,0,0,0.04), 0 12px 32px -16px rgba(0,0,0,0.12)",
  heroOverlay:
    "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 50%, rgba(22,23,20,0.85) 100%)",
} as const;

export const lunaTokens = {
  colors: lunaColors,
  radii: lunaRadii,
  layout: lunaLayout,
  typography: lunaTypography,
  spacing: lunaSpacing,
  effects: lunaEffects,
} as const;

export type LunaTokens = typeof lunaTokens;
