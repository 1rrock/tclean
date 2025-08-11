// 서비스 관련 타입
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  workTime: string;
  workers: number;
  includedServices: string[];
  additionalInfo?: string;
}

// 포트폴리오/시공사례 타입
export interface PortfolioItem {
  id: string;
  title: string;
  before: string;
  after: string;
  description: string;
  serviceType: string;
  workDate: string;
}

// 고객 후기 타입
export interface Review {
  id: string;
  content: string;
  author: string;
  rating: number;
  serviceType: string;
  date: string;
}

// FAQ 타입
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// 견적 문의 폼 타입
export interface QuoteFormData {
  area: string;
  structure: string;
  extension: boolean;
  preferredDate: string;
  specialRequests: string;
  contact: string;
}

// 분석 이벤트 타입
export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, unknown>;
}
