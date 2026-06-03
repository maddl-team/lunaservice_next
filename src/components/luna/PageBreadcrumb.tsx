import Link from "next/link";
import type { ReactNode } from "react";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";

type PageBreadcrumbProps = {
  items: readonly BreadcrumbItem[];
};

export function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  const nodes: ReactNode[] = [];

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;

    if (index > 0) {
      nodes.push(
        <li key={`sep-${item.href}`} aria-hidden="true">
          ›
        </li>,
      );
    }

    nodes.push(
      <li key={item.href}>
        {isLast ? (
          <span className="text-[#161714]">{item.label}</span>
        ) : (
          <Link href={item.href} className="transition-colors hover:text-[#161714]">
            {item.label}
          </Link>
        )}
      </li>,
    );
  });

  return (
    <nav aria-label="Breadcrumb" className="px-[16px] md:px-[56px] pt-[10px] md:pt-[16px]">
      <ol className="flex flex-wrap items-center gap-[8px] text-[13px] text-[#6e6f68]">{nodes}</ol>
    </nav>
  );
}
