import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { BrandLogoMark } from "@/components/luna/brand";
import { contactHref, footerNavigation, legalNavigation, whatsappHref } from "@/components/luna/navigation";
import { lunaEffects, lunaLayout, lunaRadii, lunaTokens, lunaTypography } from "@/components/luna/design-tokens";

export { BrandLogoMark, SiteLogo, SITE_LOGO_PATH } from "@/components/luna/brand";
export { SiteHeaderPill } from "@/components/luna/SiteHeaderPill";

type SectionShellProps = {
  children: ReactNode;
  fullBleed?: boolean;
  bgClassName?: string;
  outerClassName?: string;
  innerClassName?: string;
  boxedClassName?: string;
};

export function SectionShell({
  children,
  fullBleed = false,
  bgClassName = "",
  outerClassName = "",
  innerClassName = "",
  boxedClassName = "",
}: SectionShellProps) {
  if (!fullBleed) {
    return <section className={outerClassName}>{children}</section>;
  }

  return (
    <section className={`relative left-1/2 w-screen -translate-x-1/2 ${outerClassName}`}>
      <div className={`mx-auto ${bgClassName} ${innerClassName}`} style={{ width: lunaLayout.fullBleedWidth }}>
        <div className={`mx-auto max-w-[1440px] ${boxedClassName}`} style={{ width: "min(100%, 1440px)" }}>
          {children}
        </div>
      </div>
    </section>
  );
}

export function SectionBadge({
  children,
  dotColor = lunaTokens.colors.accent,
  dark = false,
}: {
  children: ReactNode;
  dotColor?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-[8px] rounded-[999px] px-[14px] py-[6px] font-mono text-[11px] uppercase tracking-[0.08em] ${
        dark
          ? "border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.7)]"
          : "border border-[rgba(0,0,0,0.08)] bg-white text-[#3a3b36]"
      }`}
      style={{ borderRadius: lunaRadii.pill }}
    >
      <span className="h-[6px] w-[6px] rounded-full" style={{ backgroundColor: dotColor }} />
      {children}
    </div>
  );
}

export function PrimaryCtaButton({
  children,
  invert = false,
  type = "button",
  disabled,
}: {
  children: ReactNode;
  invert?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex cursor-pointer items-center gap-[12px] rounded-[999px] px-[28px] py-[20px] text-[15px] ${
        invert ? "bg-[#161714] text-[#fbf9f3]" : "bg-[#99cc33] text-[#161714]"
      } disabled:cursor-not-allowed disabled:opacity-60`}
      style={{ borderRadius: lunaRadii.pill, fontSize: lunaTypography.body.sm }}
    >
      {children}
    </button>
  );
}

export function SecondaryCtaButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="inline-flex cursor-pointer items-center gap-[10px] rounded-[999px] border border-[rgba(255,255,255,0.4)] px-[28px] py-[20px] text-[15px] text-[#fbf9f3]"
      style={{ borderRadius: lunaRadii.pill, fontSize: lunaTypography.body.sm }}
    >
      {children}
    </button>
  );
}

export function StatCard({ value, label, sublabel, withBorder }: { value: ReactNode; label: string; sublabel: string; withBorder?: boolean }) {
  return (
    <div className={`px-[32px] py-[32px] ${withBorder ? "border-r border-r-[rgba(0,0,0,0.08)]" : ""}`}>
      <div className="font-serif text-[50px] leading-[1] tracking-[-0.025em] text-[#161714]">{value}</div>
      <div className="mt-[14px] text-[14px] font-medium text-[#161714]">{label}</div>
      <div className="mt-[4px] text-[13px] text-[#6e6f68]">{sublabel}</div>
    </div>
  );
}

type ServiceCardProps = {
  featured?: boolean;
  n: string;
  title: string;
  tag: string;
  body: string;
  img: string;
};

export function ServiceCard({ featured = false, n, title, tag, body, img }: ServiceCardProps) {
  if (!featured) {
    return (
      <article
        className="col-span-1 md:col-span-2 flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-[#fbf9f3]"
        style={{ borderRadius: lunaRadii.md }}
      >
        <div className="relative h-[200px] w-full shrink-0">
          <Image src={img} alt={title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
        </div>
        <div className="flex flex-1 flex-col px-[24px] pb-[28px] pt-[24px]">
          <div className="mb-[16px] flex justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.5)]">
            <span>№ {n}</span>
            <span>{tag}</span>
          </div>
          <h3 className="m-0 font-serif text-[26px] leading-[1.05] tracking-[-0.02em]">{title}</h3>
          <p className="mt-[12px] flex-1 text-[14px] leading-[1.55] text-[rgba(251,249,243,0.7)] opacity-85">{body}</p>
          <a className="mt-[20px] inline-flex cursor-pointer items-center gap-[6px] text-[13px] text-[#99cc33]">
            Scopri il servizio →
          </a>
        </div>
      </article>
    );
  }

  return (
    <article
      className="col-span-1 md:col-span-6 grid md:grid-cols-2 overflow-hidden rounded-[24px] bg-[#99cc33] text-[#1a1f0d]"
      style={{ borderRadius: lunaRadii.md }}
    >
      <div className="px-[48px] py-[40px]">
        <div className="mb-[32px] flex justify-between font-mono text-[11px] uppercase tracking-[0.08em] opacity-70">
          <span>№ {n} — In evidenza</span>
          <span>{tag}</span>
        </div>
        <h3 className="m-0 font-serif text-[50px] leading-[0.95] tracking-[-0.02em]">{title}</h3>
        <p className="mt-[24px] max-w-[480px] text-[17px] leading-[1.55] opacity-85">{body}</p>
        <div className="mt-[32px] flex flex-wrap gap-[8px]">
          {["Camere", "Bagni privati", "Lobby", "Sala colazione", "Spazi comuni", "Aree F&B"].map((tag) => (
            <span key={tag} className="rounded-[999px] border border-[rgba(0,0,0,0.2)] px-[12px] py-[6px] text-[12px]">
              {tag}
            </span>
          ))}
        </div>
        <a className="mt-[32px] inline-flex cursor-pointer items-center gap-[10px] text-[14px] font-medium">
          Scopri il servizio
          <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#1a1f0d] text-[#99cc33]">
            →
          </span>
        </a>
      </div>
      <div className="relative min-h-[480px] h-full self-stretch">
        <Image src={img} alt={title} fill className="object-cover" sizes="(max-width: 1536px) 33vw, 480px" />
      </div>
    </article>
  );
}

export function FeatureCard({ num, progress, title, body }: { num: string; progress: string; title: string; body: string }) {
  return (
    <div
      className="flex flex-col gap-[20px] rounded-[24px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-[36px] py-[40px]"
      style={{ borderRadius: lunaRadii.md, border: lunaEffects.borderSoftLight }}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[13px] text-[#99cc33]">{num}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.4)]">{progress}</span>
      </div>
      <h3 className="m-0 font-serif text-[26px] leading-[1.1] tracking-[-0.015em]">{title}</h3>
      <p className="m-0 text-[15.5px] leading-[1.6] text-[rgba(251,249,243,0.7)]">{body}</p>
    </div>
  );
}

export function ReviewCard({
  quote,
  author,
  role,
  org,
  city,
}: {
  quote: string;
  author: string;
  role: string;
  org: string;
  city: string;
}) {
  return (
    <figure
      className="m-0 flex min-h-[380px] flex-col rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white px-[36px] py-[40px]"
      style={{ borderRadius: lunaRadii.md, border: lunaEffects.borderSoft }}
    >
      <div className="mb-[24px] text-[16px] tracking-[2px] text-[#99cc33]">★★★★★</div>
      <blockquote className="m-0 flex-1 font-serif text-[20px] leading-[1.4] tracking-[-0.005em]">&quot;{quote}&quot;</blockquote>
      <figcaption className="mt-[28px] flex items-center gap-[14px] border-t border-t-[rgba(0,0,0,0.08)] pt-[24px]">
        <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#161714] font-serif text-[16px] text-[#99cc33]">
          {author.charAt(1) || "A"}
        </div>
        <div>
          <div className="text-[14px] font-medium">{author}</div>
          <div className="text-[12px] text-[#6e6f68]">
            {role} · {org}
          </div>
          <div className="mt-[2px] font-mono text-[11px] uppercase text-[#99cc33]">{city}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-[rgba(0,0,0,0.06)] bg-white" style={{ borderRadius: lunaRadii.sm, border: lunaEffects.borderSoft }}>
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-[24px] bg-transparent px-[32px] py-[28px] text-left">
        <h3 className="m-0 font-serif text-[22px] leading-[1.3] tracking-[-0.01em]">{question}</h3>
        <span className={`inline-flex h-[36px] w-[36px] items-center justify-center rounded-full text-[18px] ${isOpen ? "bg-[#99cc33]" : "bg-white"}`}>
          {isOpen ? "–" : "+"}
        </span>
      </button>
      {isOpen && <div className="max-w-[760px] px-[32px] pb-[32px] text-[16px] leading-[1.65] text-[#3a3b36]">{answer}</div>}
    </div>
  );
}

export function InputField({
  label,
  placeholder,
  name,
  id,
  type = "text",
  required,
  disabled,
  autoComplete,
  defaultValue,
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  name?: string;
  id?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  defaultValue?: string;
  value?: string;
  onChange?: ComponentProps<"input">["onChange"];
}) {
  const inputId = id ?? (name ? `field-${name}` : undefined);
  return (
    <div>
      <label htmlFor={inputId} className="mb-[8px] block text-[13px] font-medium text-[#161714]">
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        className="w-full rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-white px-[18px] py-[16px] text-[15px] disabled:cursor-not-allowed disabled:bg-[#f5f5f5] disabled:text-[#888]"
        style={{ borderRadius: lunaRadii.xs, border: lunaEffects.borderMedium, fontSize: lunaTypography.body.sm }}
        placeholder={placeholder}
      />
    </div>
  );
}

export function SelectField({
  label,
  options,
  name,
  id,
  required,
  disabled,
  value,
  onChange,
  defaultValue,
}: {
  label: string;
  options: string[];
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: ComponentProps<"select">["onChange"];
  defaultValue?: string;
}) {
  const selectId = id ?? (name ? `field-${name}` : undefined);
  const first = options[0] ?? "";
  const hasPlaceholder = first.toLowerCase().includes("seleziona");

  return (
    <div>
      <label htmlFor={selectId} className="mb-[8px] block text-[13px] font-medium text-[#161714]">
        {label}
      </label>
      <select
        id={selectId}
        name={name}
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
        defaultValue={value !== undefined ? undefined : hasPlaceholder ? "" : defaultValue}
        className="w-full rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-white px-[18px] py-[16px] text-[15px] disabled:cursor-not-allowed disabled:bg-[#f5f5f5]"
        style={{ borderRadius: lunaRadii.xs, border: lunaEffects.borderMedium, fontSize: lunaTypography.body.sm }}
      >
        {hasPlaceholder ? (
          <>
            <option value="" disabled>
              {first}
            </option>
            {options.slice(1).map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </>
        ) : (
          options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))
        )}
      </select>
    </div>
  );
}

export function TextareaField({
  label,
  placeholder,
  name,
  id,
  required,
  disabled,
  defaultValue,
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  onChange?: ComponentProps<"textarea">["onChange"];
}) {
  const tid = id ?? (name ? `field-${name}` : undefined);
  return (
    <div>
      <label htmlFor={tid} className="mb-[8px] block text-[13px] font-medium text-[#161714]">
        {label}
      </label>
      <textarea
        id={tid}
        name={name}
        required={required}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        className="min-h-[110px] w-full rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-white px-[18px] py-[16px] text-[15px] disabled:cursor-not-allowed disabled:bg-[#f5f5f5]"
        style={{ borderRadius: lunaRadii.xs, border: lunaEffects.borderMedium, fontSize: lunaTypography.body.sm }}
        placeholder={placeholder}
      />
    </div>
  );
}

export function ChoiceRadio({
  name,
  value,
  label,
  defaultChecked,
}: {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label
      className="flex cursor-pointer items-center gap-[10px] rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-white px-[14px] py-[12px] text-[14px] text-[#161714] has-[:checked]:border-[#1a1f0d] has-[:checked]:bg-[#1a1f0d] has-[:checked]:text-[#99cc33]"
      style={{ borderRadius: lunaRadii.xs }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="h-[16px] w-[16px] shrink-0 accent-[#99cc33]"
      />
      {label}
    </label>
  );
}

export function ChoiceCheckbox({ name, value, label }: { name: string; value: string; label: string }) {
  return (
    <label
      className="flex cursor-pointer items-center gap-[10px] rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-white px-[14px] py-[12px] text-[14px] text-[#161714] has-[:checked]:border-[#1a1f0d] has-[:checked]:bg-[#1a1f0d] has-[:checked]:text-[#99cc33]"
      style={{ borderRadius: lunaRadii.xs }}
    >
      <input type="checkbox" name={name} value={value} className="h-[16px] w-[16px] shrink-0 accent-[#99cc33]" />
      {label}
    </label>
  );
}

export function FooterLinkColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <div className="mb-[16px] font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(255,255,255,0.45)]">{title}</div>
      <ul className="m-0 flex list-none flex-col gap-[10px] p-0 text-[14.5px]">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[rgba(251,249,243,0.85)] transition-colors hover:text-[#fbf9f3]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 pb-[12px] md:pb-[24px]">
      <footer className="mx-auto w-[calc(100vw-24px)] md:w-[calc(100vw-48px)] rounded-[20px] md:rounded-[32px] bg-[#161714] px-[16px] md:px-[56px] pb-[26px] md:pb-[40px] pt-[30px] md:pt-[80px] text-[#fbf9f3]">
        <div className="mb-[30px] md:mb-[64px] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] items-center gap-[24px] md:gap-[60px] rounded-[24px] md:rounded-[32px] bg-[#99cc33] px-[20px] md:px-[56px] py-[26px] md:py-[64px] text-[#1a1f0d]">
          <h3 className="m-0 font-serif text-[26px] md:text-[50px] leading-[1] tracking-[-0.025em]">
            Pronto a delegare le pulizie del tuo hotel?
          </h3>
          <div className="flex flex-col items-start gap-[12px]">
            <Link
              href={contactHref}
              className="inline-flex w-fit items-center gap-[10px] rounded-[999px] bg-[#1a1f0d] px-[26px] py-[18px] text-[15px] text-[#99cc33]"
            >
              Richiedi preventivo gratuito
              <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#99cc33] text-[12px] text-[#1a1f0d]">
                →
              </span>
            </Link>
            <a
              href={whatsappHref}
              className="rounded-[999px] border border-[#1a1f0d] bg-transparent px-[26px] py-[18px] text-[15px] text-[#1a1f0d]"
            >
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] md:gap-[32px] border-b border-b-[rgba(255,255,255,0.12)] pb-[26px] md:pb-[40px]">
          <div>
            <div className="mb-[20px] flex items-center gap-[10px]">
              <BrandLogoMark light size={28} />
              <span className="font-serif text-[22px]">Luna Service</span>
            </div>
            <div className="text-[14.5px] leading-[1.65] text-[rgba(251,249,243,0.7)]">
              Impresa di pulizie professionali a Roma, specializzata in hotel, strutture ricettive e condomini.
              <br />
              <br />
              Via [indirizzo], Roma 00100
              <br />
              P.IVA [da inserire]
              <br />
              <br />
              <a className="text-[#99cc33]">preventivi@lunaservice.it</a>
              <br />
              +39 06 0000 0000
            </div>
          </div>
          {footerNavigation.map((col) => (
            <FooterLinkColumn key={col.title} title={col.title} links={[...col.links]} />
          ))}
          <FooterLinkColumn title="Legale" links={legalNavigation} />
        </div>
        <div className="flex flex-col md:flex-row gap-[6px] md:gap-0 justify-between border-t border-t-[rgba(255,255,255,0.12)] pt-[20px] md:pt-[28px] text-[11px] md:text-[12px] text-[rgba(255,255,255,0.5)]">
          <span>© 2026 Luna Service S.r.l. — Tutti i diritti riservati</span>
          <span>Impresa di pulizie professionali · Roma · Italia</span>
        </div>
      </footer>
    </section>
  );
}

export function SectionIntro({
  badge,
  badgeDark = false,
  title,
  description,
  titleClassName = "",
  descriptionClassName = "",
}: {
  badge: ReactNode;
  badgeDark?: boolean;
  title: ReactNode;
  description?: ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <>
      <div className="mb-[28px]">
        <SectionBadge dark={badgeDark}>{badge}</SectionBadge>
      </div>
      <h2 className={`m-0 font-serif leading-[1] tracking-[-0.025em] ${titleClassName}`}>{title}</h2>
      {description ? <p className={`m-0 ${descriptionClassName}`}>{description}</p> : null}
    </>
  );
}

export function TrustStatsStrip({
  items,
}: {
  items: Array<{ value: ReactNode; label: string; sublabel: string }>;
}) {
  return (
    <div className="relative z-[5] -mt-[8px] md:-mt-[20px] mx-0 md:mx-[32px] grid grid-cols-1 md:grid-cols-4 rounded-[20px] md:rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]">
      {items.map((item, idx) => (
        <StatCard
          key={item.label}
          value={item.value}
          label={item.label}
          sublabel={item.sublabel}
          withBorder={idx < items.length - 1}
        />
      ))}
    </div>
  );
}
