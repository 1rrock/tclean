'use client'
import { Container, NavLink, Button } from "../ui";
import { CONTACT_INFO, ANALYTICS_EVENTS } from "../constants";
import { track, scrollToSection } from "../utils";

export function Header() {
  const handleQuoteClick = () => {
    track(ANALYTICS_EVENTS.CTA_QUOTE_CLICK, { location: 'header' });
    window.open(CONTACT_INFO.formUrl, '_blank');
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#home"
            className="flex items-center gap-2 font-extrabold tracking-tight"
            onClick={() => handleNavClick('home')}
          >
           <img src="/logo.png" alt="로고" className="h-8 w-auto" />
          </a>

          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="#about" onClick={() => handleNavClick('about')}>
              회사 소개
            </NavLink>
            <NavLink href="#services" onClick={() => handleNavClick('services')}>
              서비스
            </NavLink>
            <NavLink href="#cases" onClick={() => handleNavClick('cases')}>
              시공 사례
            </NavLink>
            <NavLink href="#quote" onClick={() => handleNavClick('quote')}>
              견적 문의
            </NavLink>
            <NavLink href="#faq" onClick={() => handleNavClick('faq')}>
              문의·FAQ
            </NavLink>
          </nav>

          <Button onClick={handleQuoteClick} size="sm">
            견적 문의하기
          </Button>
        </div>
      </Container>
    </header>
  );
}
