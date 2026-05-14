export function BrandLogoMark({ light = false, size = 26 }: { light?: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill={light ? "#fbf9f3" : "#161714"} />
      <path d="M 16 4 A 12 12 0 0 0 16 28 A 8 12 0 0 1 16 4" fill="#99cc33" />
    </svg>
  );
}
