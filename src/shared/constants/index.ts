// 기본 상수
export const SITE_CONFIG = {
  name: '믿고 맡기는 청소',
  description: '하루 한 집만 작업하는 프리미엄 청소',
  url: 'https://mclean.co.kr',
} as const;

// 연락처 정보
export const CONTACT_INFO = {
  kakaoUrl: 'https://pf.kakao.com/_xjxjxjxj',
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdTG4qtl2a2mRKGNo8y7ib3oL2lgNrRQySFUeyNTq39skc0DQ/viewform',
  businessInfo: {
    name: '믿고 맡기는 청소',
    representative: '장준섭',
    // businessNumber: '123-45-67890',
    address: '인천광역시 중구 흰바위로59번길 8 믿고 맡기는 청소',
    // phone: '010-1234-5678',
  },
} as const;

// GTM/GA 이벤트
export const ANALYTICS_EVENTS = {
  CTA_QUOTE_CLICK: 'cta_quote_click',
  CTA_KAKAO_CLICK: 'cta_kakao_click',
  HERO_CTA_CLICK: 'hero_cta_click',
  PORTFOLIO_VIEW: 'portfolio_view',
} as const;

// 서비스 타입
export const SERVICE_TYPES = {
  MOVE_IN: 'move-in',
  MOVE_OUT: 'move-out',
  RESIDENTIAL: 'residential',
  POST_RENOVATION: 'post-renovation',
} as const;
