'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Início", position: "left" },
  { id: "projects", label: "Projetos", position: "left" },
  { id: "about", label: "Sobre", position: "left" },
  { id: "whyUs", label: "por que nós", position: "left" },
  { id: "services", label: "Serviços", position: "right" },
  { id: "reviews", label: "Avaliações", position: "right" },
  { id: "faq", label: "FAQ", position: "right" },
  { id: "contact", label: "Contato", position: "right" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${id}`);
    }
  };

  const handleBackToTop = () => {
    setActiveSection("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "#hero");
  };

  const isActive = (id: string) => activeSection === id;

  const navLinkStyle = (id: string) => `
    relative py-1 transition-colors hover:text-black group cursor-pointer
    after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
    after:h-[2px] after:bg-[#058240] after:transition-all after:duration-300
    ${
      isActive(id)
        ? "text-black after:w-full"
        : "text-gray-500 after:w-3 hover:after:w-full"
    }
  `;

  const leftItems = NAV_ITEMS.filter((item) => item.position === "left");
  const rightItems = NAV_ITEMS.filter((item) => item.position === "right");
  const activeLabel =
    NAV_ITEMS.find((item) => item.id === activeSection)?.label ?? "Início";

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="mx-auto flex h-16 lg:h-24 max-w-7xl items-center justify-center lg:justify-between px-4 lg:px-8">

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 uppercase text-sm tracking-widest">
            {leftItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={navLinkStyle(item.id)}
                onClick={(e) => handleScrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#hero"
            className="group lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center"
            onClick={(e) => handleScrollTo(e, "hero")}
          >
            <div className="relative shrink-0 h-10 w-10 lg:h-37.5 lg:w-37.5">
              <Image
                src="/images/logo-black.jpg"
                alt="Logo"
                fill
                sizes="(min-width: 1024px) 150px, 40px"
                className="object-contain transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src="/images/logoereased.png"
                alt="Logo"
                fill
                sizes="(min-width: 1024px) 150px, 40px"
                className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap opacity-0 font-bold tracking-wide text-[#183EAB] transition-all duration-300 group-hover:ml-3 group-hover:max-w-30 group-hover:opacity-100">
              ROTA 14
            </span>
          </a>

          <span className="lg:hidden ml-3 flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-gray-600">
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#058240]" />
            {activeLabel}
          </span>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 uppercase text-sm tracking-widest">
            {rightItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={navLinkStyle(item.id)}
                onClick={(e) => handleScrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

        </div>
      </header>

      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Voltar ao topo"
        className={`
          fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center
          rounded-full bg-[#058240] text-white shadow-lg shadow-black/10
          transition-all duration-300 hover:bg-[#046b34] active:scale-95
          ${
            showBackToTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }
        `}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}