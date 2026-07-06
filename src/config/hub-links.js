import { DAKINIS_URL_HUB } from "./product-urls.js";

const hubBase = DAKINIS_URL_HUB.replace(/\/$/, "");

/** Primary conversion from corporate home → Dakinis Hub (escritorio). */
export const HUB_START_URL = `${hubBase}/`;
