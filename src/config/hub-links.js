import { DAKINIS_URL_HUB } from "./product-urls.js";

const DEFAULT_HUB_ORIGIN = "https://hub.dakinissystems.com";

/**
 * Resolve Hub origin. Ignore misconfigured VITE_HUB_URL that points at the
 * corporate landing or legacy Core /hub path (common Railway mistake).
 */
function resolveHubBase() {
  const raw = String(DAKINIS_URL_HUB || "")
    .trim()
    .replace(/\/$/, "");
  if (!raw) return DEFAULT_HUB_ORIGIN;
  try {
    const host = new URL(raw).hostname.toLowerCase();
    if (host === "hub.dakinissystems.com") return `https://${host}`;
    if (host === "localhost" || host === "127.0.0.1") return raw;
  } catch {
    /* fall through */
  }
  return DEFAULT_HUB_ORIGIN;
}

const hubBase = resolveHubBase();

/** Primary conversion from corporate home → Dakinis Hub login. */
export const HUB_LOGIN_URL = `${hubBase}/login`;

/** Alias used by CTAs — always Hub login. */
export const HUB_START_URL = HUB_LOGIN_URL;
