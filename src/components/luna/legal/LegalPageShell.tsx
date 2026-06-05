import type { ReactNode } from "react";
import { PageBreadcrumb } from "@/components/luna/PageBreadcrumb";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";
import { SiteFooter, SiteHeaderPill } from "@/components/luna/ui";

export function LegalPageShell({
  title,
  breadcrumbs,
  children,
}: {
  title: string;
  breadcrumbs: readonly BreadcrumbItem[];
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeaderPill />
      <PageBreadcrumb items={breadcrumbs} />
      <article className="px-[16px] md:px-[56px] py-[48px] md:py-[80px]">
        <div className="mx-auto max-w-[820px]">
          <h1 className="m-0 font-serif text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#161714]">
            {title}
          </h1>
          <div className="prose-luna mt-[28px] space-y-[18px] text-[16px] leading-[1.7] text-[#3a3b36]">
            {children}
          </div>
        </div>
      </article>
      <SiteFooter />
    </>
  );
}
