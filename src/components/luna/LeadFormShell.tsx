"use client";

import type { ReactNode } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitLeadForm, leadFormInitialState } from "@/app/actions/submit-lead";
import { PrimaryCtaButton } from "@/components/luna/ui";

function HoneypotField() {
  return (
    <div className="pointer-events-none absolute -left-[8000px] h-px w-px overflow-hidden opacity-0" aria-hidden="true">
      <label htmlFor="company_website">Company website</label>
      <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function LeadFormShell({
  source,
  className,
  children,
}: {
  source: string;
  className?: string;
  children: ReactNode;
}) {
  const [state, formAction] = useActionState(submitLeadForm, leadFormInitialState);
  return (
    <form action={formAction} className={className ? `relative ${className}` : "relative"}>
      <input type="hidden" name="_source" value={source} />
      <HoneypotField />
      {children}
      {state.error ? (
        <p role="alert" className="mt-[14px] text-[14px] leading-[1.5] text-[#c62828]">
          {state.error}
        </p>
      ) : null}
      {state.ok ? (
        <p className="mt-[14px] text-[14px] leading-[1.5] text-[#2e7d32]">
          Messaggio inviato correttamente. Ti contatteremo al più presto.
        </p>
      ) : null}
    </form>
  );
}

export function FormSubmitPrimaryButton({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  const { pending } = useFormStatus();
  return (
    <PrimaryCtaButton type="submit" disabled={pending} invert={invert}>
      {children}
    </PrimaryCtaButton>
  );
}
