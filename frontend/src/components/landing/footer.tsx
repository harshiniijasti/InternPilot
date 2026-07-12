import { RocketLogo } from "./rocket-logo";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [{ label: "About", href: "#" }],
};

export function LandingFooter() {
  return (
    <footer className="relative border-t border-slate-500/10 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <RocketLogo size="sm" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              AI-powered internship intelligence that helps students find roles
              where they&apos;ll thrive — not just qualify.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-medium text-slate-300">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-500/10 pt-8 text-center">
          <p className="text-sm tracking-wide text-slate-500">
            InternPilot &bull; AI-Powered Resume Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}
