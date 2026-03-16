import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const DOWNLOAD_URL = "https://github.com/mazinhoww-web/Extensions/archive/refs/heads/claude/meeting-transcription-extension-46nZi.zip";

const navLinks = [
  { label: "Funcionalidades", href: "/#features" },
  { label: "Como funciona", href: "/#how" },
  { label: "Instalação", href: "/#instalacao" },
  { label: "Preços", href: "/#pricing" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "FAQ", href: "/#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] border-b transition-colors duration-300"
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          background: scrolled ? 'rgba(7,7,10,0.95)' : 'rgba(7,7,10,0.8)',
          borderColor: 'hsl(var(--ms-border))',
        }}
      >
        <div className="flex items-center justify-between h-16 max-w-[1200px] mx-auto px-6">
          <Logo />
          <ul className="hidden md:flex items-center gap-7 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-[0.9rem] font-medium text-ms-fg-muted hover:text-ms-fg transition-colors bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick("/#pricing")}
              className="hidden md:inline-flex px-4 py-2 rounded-[var(--ms-radius-sm)] text-[0.875rem] font-medium text-ms-fg-muted bg-transparent hover:text-ms-fg hover:bg-ms-card transition-colors"
            >
              Ver planos
            </button>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-5 py-2 rounded-[var(--ms-radius-sm)] text-[0.875rem] font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-px"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--ms-accent)), hsl(var(--ms-accent-2)))',
                boxShadow: '0 0 20px hsl(var(--ms-accent-glow))',
              }}
            >
              Download grátis
            </a>
            <button
              className="md:hidden p-2 text-ms-fg-muted"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8"
          style={{
            background: 'rgba(7,7,10,0.97)',
            backdropFilter: 'blur(20px)',
          }}
          role="dialog"
          aria-label="Menu de navegação"
        >
          <button
            className="absolute top-5 right-5 p-2 text-ms-fg-muted"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-[1.4rem] font-semibold text-ms-fg bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-[var(--ms-radius)] text-base font-bold text-white"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--ms-cta)), #EF4444)',
              boxShadow: '0 0 32px hsl(var(--ms-cta) / 0.35)',
            }}
          >
            Instalar grátis
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
