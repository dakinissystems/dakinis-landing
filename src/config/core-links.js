import { DAKINIS_URL_CORE } from "./product-urls.js";

const coreBase = DAKINIS_URL_CORE.replace(/\/$/, "");

/** Primary conversion target from ads / corporate landing → Dakinis One (Core). */
export const CORE_TRIAL_URL = `${coreBase}/`;
export const CORE_PRICING_URL = `${coreBase}/precios`;
export const CORE_LOGIN_URL = `${coreBase}/login`;
/** Excel cost simulator on Core home (10 h/week ≈ 720 €/mes at 18 €/h). */
export const CORE_SAVINGS_CALC_URL = `${coreBase}/#excel-simulator`;
