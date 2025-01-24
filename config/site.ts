export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact",
      href: "/Contact",
    },
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Signup",
      href: "/signup",
    },
  ],
  navMenuItems: [
    {
      label: "My Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
};
