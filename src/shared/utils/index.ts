import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind CSS 클래스 병합 유틸리티
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 전화번호 포맷팅
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phone;
}

// 날짜 포맷팅
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// 스크롤 부드럽게 이동
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

// 분석 이벤트 추적
export function track(event: string, properties?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    // GTM
    const win = window as unknown as Record<string, unknown>;
    win.dataLayer = win.dataLayer || [];
    (win.dataLayer as unknown[]).push({ event, ...properties });

    // GA4
    const gtag = win.gtag;
    if (gtag && typeof gtag === 'function') {
      gtag('event', event, properties);
    }
  }
}

// 상수 재export (편의성을 위해)
export * from '../constants';
