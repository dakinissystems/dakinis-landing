import { useEffect } from "react";
import { DAKINIS_URL_HUB } from "../config/product-urls.js";

/** /hub en la landing redirige al Hub en Core. */
export default function HubRedirectPage() {
  useEffect(() => {
    window.location.replace(DAKINIS_URL_HUB);
  }, []);
  return (
    <p className="px-6 py-20 text-center text-gray-400">
      Redirigiendo al Dakinis Hub…
    </p>
  );
}
