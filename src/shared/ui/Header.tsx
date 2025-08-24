'use client'
import { Container, NavLink, Button } from "../ui";
import { CONTACT_INFO, ANALYTICS_EVENTS } from "../constants";
import { track, scrollToSection } from "../utils";
import Image from "next/image";

export function Header() {
  const handleQuoteClick = () => {
    track(ANALYTICS_EVENTS.CTA_QUOTE_CLICK, { location: 'header' });
    window.open(CONTACT_INFO.formUrl, '_blank');
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-muted bg-[#0B256B] backdrop-blur-md shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#home"
            className="flex h-[70%] items-center gap-2 font-extrabold tracking-tight text-primary hover:text-primary-dark transition-colors"
            onClick={() => handleNavClick('home')}
          >
           <Image src="/logo.svg" alt="로고" width={120} height={40} className="h-full w-auto" />
          </a>

          <nav className="hidden h-full items-center gap-10 sm:flex">
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

          <Button onClick={handleQuoteClick} size="md" className="btn-primary text-sm">
            견적 문의하기
          </Button>
        </div>
      </Container>
    </header>
  );
}
