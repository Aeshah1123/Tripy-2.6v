import { useLanguage } from "../contexts/LanguageContext";

export const navigationLinks = [
  { key: "home", href: "#hero" },
  { key: "services", href: "#services" },
  { key: "destinations", href: "#destinations" },
  { key: "booking", href: "#booking" },
  { key: "contact", href: "#contact" },
];

export function getNavigationLinks(t) {
  return navigationLinks.map((link) => ({
    ...link,
    label: t(`navbar.${link.key}`),
  }));
}
// Use only this named export. No lowercase alias to avoid confusing HMR/cache.
