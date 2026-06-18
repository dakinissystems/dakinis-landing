import { useEffect, useState } from "react";
import LandingPage from "./LandingPage.jsx";
import LegalDocumentPage from "./pages/LegalDocumentPage.jsx";
import HubRedirectPage from "./pages/HubRedirectPage.jsx";
import ProductsIndexPage from "./pages/ProductsIndexPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

const LEGAL_ROUTES = {
  "/privacidad": "privacy",
  "/privacy": "privacy",
  "/aviso-legal": "notice",
  "/legal": "notice",
  "/cookies": "cookies"
};

const PRODUCT_ROUTES = {
  "/productos/dakinis-one": "dakinis-one",
  "/productos/streamautomator": "streamautomator",
  "/productos/akoenet": "akoenet"
};

function resolveLegalKey(pathname) {
  return LEGAL_ROUTES[pathname] ?? null;
}

function resolveProductId(pathname) {
  return PRODUCT_ROUTES[pathname] ?? null;
}

function AppShell() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/$/, "") || "/");

  useEffect(() => {
    function sync() {
      setPath(window.location.pathname.replace(/\/$/, "") || "/");
    }
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  const legalKey = resolveLegalKey(path);
  if (legalKey) {
    return <LegalDocumentPage docKey={legalKey} />;
  }

  if (path === "/hub") {
    return <HubRedirectPage />;
  }
  if (path === "/productos") {
    return <ProductsIndexPage />;
  }
  const productId = resolveProductId(path);
  if (productId) {
    return <ProductDetailPage productId={productId} />;
  }
  if (path === "/servicios") {
    return <ServicesPage />;
  }

  return <LandingPage />;
}

function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}

export default App;
