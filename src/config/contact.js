import {
  DAKINIS_CONTACT_EMAIL,
  dakinisContactWhatsappUrl
} from "@dakinis/shared-brand/social-links";

export { DAKINIS_CONTACT_EMAIL, dakinisContactWhatsappUrl };

/** mailto: con asunto opcional (desde i18n). */
export function dakinisMailtoContact(subject) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", String(subject));
  const q = params.toString();
  return `mailto:${DAKINIS_CONTACT_EMAIL}${q ? `?${q}` : ""}`;
}
