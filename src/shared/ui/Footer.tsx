'use client'
import { Container } from "../ui";
import { CONTACT_INFO, SITE_CONFIG } from "../constants";
import { scrollToSection } from "../utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="grid gap-6 py-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-extrabold">
              <span>🧽</span>
              <span>{SITE_CONFIG.name}</span>
            </div>
            <p className="mt-2 text-xs text-gray-600">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>

          <div className="text-sm text-gray-700">
            <div className="font-semibold">사업자 정보</div>
            <p className="mt-2 text-xs leading-6 text-gray-600">
              상호: {CONTACT_INFO.businessInfo.name}<br/>
              대표: {CONTACT_INFO.businessInfo.representative}<br/>
              사업자번호: {CONTACT_INFO.businessInfo.businessNumber}<br/>
              주소: {CONTACT_INFO.businessInfo.address}<br/>
              연락처: {CONTACT_INFO.businessInfo.phone}
            </p>
          </div>

          <div className="text-sm text-gray-700">
            <div className="font-semibold">바로가기</div>
            <ul className="mt-2 space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:underline"
                >
                  회사 소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:underline"
                >
                  서비스
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('cases')}
                  className="hover:underline"
                >
                  시공 사례
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('quote')}
                  className="hover:underline"
                >
                  견적 문의
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('faq')}
                  className="hover:underline"
                >
                  문의·FAQ
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
