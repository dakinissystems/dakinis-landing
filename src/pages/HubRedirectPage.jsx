import { useEffect } from "react";
import { HUB_LOGIN_URL } from "../config/hub-links.js";

/** /hub en la landing redirige al login del Hub (no a la landing ni a Core). */
export default function HubRedirectPage() {
  useEffect(() => {
    window.location.replace(HUB_LOGIN_URL);
  }, []);
  return (
    <p className="px-6 py-20 text-center text-gray-400">
      Redirigiendo al Dakinis Hub…
    </p>
  );
}
