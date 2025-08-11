'use client'
import { Button, Card, Container, Section } from "../../shared/ui";
import { CONTACT_INFO, ANALYTICS_EVENTS } from "../../shared/constants";
import { track } from "../../shared/utils";

export function QuoteSection() {
  const handleQuoteFormClick = () => {
    track(ANALYTICS_EVENTS.CTA_QUOTE_CLICK, { location: 'quote' });
    window.open(CONTACT_INFO.formUrl, '_blank');
  };

  const handleKakaoClick = () => {
    track(ANALYTICS_EVENTS.CTA_KAKAO_CLICK, { location: 'quote' });
    window.open(CONTACT_INFO.kakaoUrl, '_blank');
  };

  return (
    <Section id="quote" className="bg-emerald-50 py-16">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">견적 문의</h2>
            <p className="mt-2 text-sm text-gray-700">
              평수, 구조, 확장 여부, 희망 날짜, 특이사항을 남겨주시면 빠르게 답변드립니다.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>추가비용 없음 (예외 사전 안내)</li>
              <li>하루 한 집만 진행</li>
              <li>스팀·피톤치드 포함</li>
            </ul>
          </div>

          <Card className="p-6">
            <Button
              onClick={handleQuoteFormClick}
              className="w-full"
              size="lg"
            >
              구글폼으로 이동하기
            </Button>
            <p className="mt-3 text-center text-xs text-gray-600">
              폼 내용: 평수, 구조, 확장 여부, 희망 날짜, 특이사항
            </p>

            <div className="mt-6 text-center">
              <Button
                onClick={handleKakaoClick}
                variant="outline"
                className="bg-yellow-400 border-yellow-400 hover:bg-yellow-500 text-gray-900"
              >
                💬 카카오톡 채널 상담
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
