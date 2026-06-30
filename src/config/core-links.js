import { DAKINIS_URL_CORE } from "./product-urls.js";

const coreBase = DAKINIS_URL_CORE.replace(/\/$/, "");

/** Primary conversion target from ads / corporate landing → Dakinis One (Core). */
export const CORE_TRIAL_URL = `${coreBase}/`;
export const CORE_PRICING_URL = `${coreBase}/precios`;
export const CORE_LOGIN_URL = `${coreBase}/login`;
