"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactHref, siteNavigation, whatsappHref } from "@/components/luna/navigation";
import { BrandLogoMark } from "@/components/luna/brand";

function normalizePath(path: string) {
  if (path === "/") {
    return path;
  }

  return path.endsWith("/") ? path.slice(0, -1) : path;
}

function isActive(pathname: string, href: string) {
  const current = normalizePath(pathname);
  const target = normalizePath(href);

  if (target === "/") {
    return current === "/";
  }

  return current === target || current.startsWith(`${target}/`);
}

function DesktopNavItem({ pathname, item }: { pathname: string; item: (typeof siteNavigation)[number] }) {
  const active = isActive(pathname, item.href);
  const linkClassName = `inline-flex items-center gap-[6px] py-[6px] transition-colors hover:text-[#161714] ${
    active ? "font-medium text-[#161714]" : ""
  }`;

  if (!item.children?.length) {
    return (
      <li className="flex items-center">
        <Link href={item.href} className={linkClassName}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="group relative flex items-center">
      <Link href={item.href} className={linkClassName}>
        {item.label}
        <span aria-hidden="true" className="text-[11px] text-[#6e6f68]">
          ▾
        </span>
      </Link>
      <div className="pointer-events-none absolute left-1/2 top-full z-30 w-[min(320px,calc(100vw-48px))] -translate-x-1/2 pt-[12px] opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="rounded-[20px] border border-[rgba(0,0,0,0.08)] bg-white p-[8px] shadow-[0_18px_48px_-24px_rgba(0,0,0,0.28)]">
          <ul className="m-0 list-none p-0">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={`block rounded-[12px] px-[14px] py-[10px] text-[13.5px] leading-[1.45] transition-colors hover:bg-[#e4eaf0] ${
                    isActive(pathname, child.href) ? "bg-[#e4eaf0] font-medium text-[#161714]" : "text-[#3a3b36]"
                  }`}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export function SiteHeaderPill() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="sticky top-[12px] md:top-[24px] z-30 bg-transparent px-[12px] md:px-[56px] py-[12px] md:py-[24px]">
      <div className="grid grid-cols-[1fr_auto] md:grid-cols-[180px_1fr_auto] items-center gap-[12px] md:gap-[24px] rounded-[999px] bg-white px-[14px] md:px-[26px] py-[10px] md:py-[12px] pr-[12px] md:pr-[14px] shadow-[0_1px_0_rgba(0,0,0,0.04),0_12px_32px_-16px_rgba(0,0,0,0.12)]">
        <Link href="/" className="flex items-center gap-[10px]">
          <BrandLogoMark />
          <span className="font-serif text-[16px] md:text-[20px] tracking-[-0.015em] text-[#161714]">Luna Service</span>
        </Link>

        <ul className="hidden md:flex list-none items-center justify-center gap-[22px] p-0 text-[14px] text-[#3a3b36]">
          {siteNavigation.map((item) => (
            <DesktopNavItem key={item.href} pathname={pathname} item={item} />
          ))}
        </ul>

        <div className="flex items-center gap-[8px]">
          <a
            href={whatsappHref}
            className="hidden md:block px-[14px] text-[13.5px] text-[#3a3b36] transition-colors hover:text-[#161714]"
          >
            WhatsApp
          </a>
          <Link
            href={contactHref}
            className="inline-flex items-center gap-[8px] rounded-[999px] bg-[#161714] px-[14px] md:px-[22px] py-[10px] md:py-[14px] text-[12px] md:text-[14px] text-[#fbf9f3]"
          >
            <span className="hidden md:inline">Richiedi preventivo</span>
            <span className="md:hidden inline">Preventivo</span>
            <span className="inline-flex h-[18px] w-[18px] md:h-[22px] md:w-[22px] items-center justify-center rounded-full bg-[#99cc33] text-[10px] md:text-[11px] text-[#161714]">
              →
            </span>
          </Link>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="site-mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[rgba(0,0,0,0.08)] text-[#161714] md:hidden"
          >
            <span className="sr-only">{mobileOpen ? "Chiudi menu" : "Apri menu"}</span>
            <span aria-hidden="true" className="text-[18px] leading-none">
              {mobileOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="site-mobile-nav"
          className="mt-[12px] max-h-[calc(100vh-120px)] overflow-y-auto rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white p-[16px] shadow-[0_18px_48px_-24px_rgba(0,0,0,0.28)] md:hidden"
        >
          <ul className="m-0 list-none space-y-[18px] p-0">
            {siteNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block font-medium text-[16px] ${isActive(pathname, item.href) ? "text-[#161714]" : "text-[#3a3b36]"}`}
                >
                  {item.label}
                </Link>
                {item.children?.length ? (
                  <ul className="mt-[10px] space-y-[8px] border-l border-[rgba(0,0,0,0.08)] pl-[14px]">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block text-[14px] leading-[1.45] ${isActive(pathname, child.href) ? "font-medium text-[#161714]" : "text-[#6e6f68]"}`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-[18px] flex flex-col gap-[10px] border-t border-[rgba(0,0,0,0.08)] pt-[18px]">
            <a href={whatsappHref} className="text-[14px] text-[#3a3b36]">
              WhatsApp
            </a>
            <Link href={contactHref} className="text-[14px] font-medium text-[#161714]">
              Richiedi preventivo
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
