"use client";

import { useEffect } from "react";
import { silktideConsentConfig } from "@/lib/silktide-consent-config";

declare global {
  interface Window {
    silktideConsentManager?: {
      init: (config: typeof silktideConsentConfig) => void;
    };
  }
}

/** Runs silktideConsentManager.init after the library script in ConsentHead has loaded. */
export function SilktideConsentInit() {
  useEffect(() => {
    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 80;

    const tryInit = () => {
      if (cancelled) return;
      const manager = window.silktideConsentManager;
      if (manager?.init) {
        manager.init(silktideConsentConfig);
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) {
        window.setTimeout(tryInit, 50);
      }
    };

    tryInit();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
