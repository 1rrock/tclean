'use client'
import { Container, Section } from "../../shared/ui";
import { useAccordion } from "../../shared/hooks/useAccordion";

interface InfoItem {
  id: string;
  title: string;
  content: string;
  icon: string;
}

const INFO_DATA: InfoItem[] = [
  {
    id: "info-1",
    title: "기본 청소 범위",
    icon: "✅",
    content: `1. 현관
- 신발장 내부 먼지 제거 
- 문틀, 손잡이, 바닥 오염 제거 
- 바닥 마감
- 현관 센서·스위치 주변 정리

2. 방/거실/복도 
- 벽면, 문틀, 스위치, 콘센트 
- 몰딩 상단, 하단, 문틀 주변 틈새 먼지 제거 
- 바닥 이물질 제거 
- 바닥 전용 장비로 마감 청소 (미코플러스 사용)

3. 창문/창틀/샷시 ※ 외창(바깥 유리)은 작업 불가 
- 내창 기준 창틀, 샷시, 방충망 스팀 청소 
- 이물질, 먼지, 실리콘 위 분진 제거 
- 도배풀/테이프 자국 제거

4. 주방 
- 수납장 전 구역 탈거 후 내부/외부 먼지 제거 
- 후드, 후드 필터 탈거 후 기름때 제거 
- 조리대, 상판, 싱크볼, 배수구 살균 
- 타일 벽면 오염 제거 및 스팀 마감

5. 욕실/화장실 
- 거울, 수전, 샤워기, 선반, 세면대, 양변기 오염 제거 
- 벽면 및 바닥 타일 고온 스팀 살균 
- 배수구 탈거 청소 / 환풍구 커버 탈거 청소

6. 베란다/실외기실 
- 바닥, 난간, 창틀, 배수구, 방충망 등
(탈거 가능한 부분 전체 청소) 
- 곰팡이, 시멘트 가루, 먼지 제거

7. 수납장 
- 싱크대, 붙박이장, 신발장, 욕실 수납장 등 
- 탈거 후 먼지 제거 및 살균

※ 가전 내부 청소는 포함 되지 않습니다.`
  },
  {
    id: "info-2",
    title: "청소 품질을 높이는 디테일",
    icon: "✅",
    content: `✔ 살균/소독 케어
- 고온 스팀 살균
- 100% 원액 피톤치드로 탈취 및 마감

✔ 장비/도구 기준
- 컬비 청소기 사용
- 미코플러스 바닥 장비 사용
- 재사용 없는 새 걸레만 사용

✔ 세제 사용
- 독일 키엘사의 친환경 세제 사용`
  },
  {
    id: "info-3",
    title: "거주청소 참고사항",
    icon: "✅",
    content: `• 수납장이나 가전 내부에 물건이 있을 경우, 내부 작업은 제한될 수 있습니다.

• 작은 짐들은 최대한 옮겨가며 청소 도와드리며, 이동이 어려운 가구나 물건은 제외될 수 있습니다.

• 방해되지 않도록 짐을 한쪽으로 정리해주시면 훨씬 원활하게 작업이 진행됩니다.`
  },
  {
    id: "info-4",
    title: "추가 비용이 발생할 수 있는 상황 안내",
    icon: "✅",
    content: `저희는 모든 청소 작업을 정찰제로 운영하고 있으며,
별도 안내 없이 추가 비용을 청구하지 않습니다.
다만 아래와 같은 불가피한 상황에서는 작업 여건에 따라
추가 금액이 발생할 수 있는 점 미리 안내드립니다.

📌 심한 곰팡이
벽 전체에 곰팡이가 퍼져 장시간 제거 작업이 필요한 경우

📌 니코틴 타르 변색
흡연으로 인한 니코틴 타르 변색이 집 전 범위에 퍼져 장시간 탈취·세척이 필요한 경우

📌 샷시 전체 스티커 제거
샤시·문·가구 등에 넓은 범위로 스티커나 끈끈이가 붙어 있어 제거에 장시간이 필요한 경우

📌 거주청소의 경우
폐기물이 다량 남아 있는 경우
생활 쓰레기, 이사 잔재물 등이 다수 남아 있으면 청소 이전에 정리 및 수거 작업이 필요합니다.

📌 인테리어(공사 후) 청소의 경우
준공청소가 전혀 이루어지지 않은 경우
폐기물, 마스킹 테이프, 시트지, 먼지 등 정리가 전혀 안 된 상태는 청소 외 추가 정리가 선행되어야 하며 인력 및 시간이 더 필요합니다.

📌 공간 구조가 사전 안내와 다른 경우
실제 평수 차이
예약 시 안내해주신 면적과 현장 실제 면적이 다를 경우
베란다, 화장실 등 구성 차이
예를 들어 "베란다 2개"로 안내받았으나 실제로는 3개인 경우 등

📌 건물 구조로 인한 추가 작업
엘리베이터 미설치 또는 고장 등으로 계단 이용 시
장비가 무겁고 크기가 있어 계단으로 이동 시 작업 난이도가 크게 올라갑니다.
작업 차량에서 작업 위치까지 거리가 매우 먼 경우
반복적인 장비 운반이 필요해 인력 소모가 크기 때문에 상황에 따라 추가 비용이 발생할 수 있습니다.

※ 모든 예외 사항은 작업 전 미리 안내드리고, 동의하신 경우에만 진행합니다.`
  },
  {
    id: "info-5",
    title: "쓰레기 수거 안내",
    icon: "✅",
    content: `저희는 작업 특성상 수도권 전 지역을 이동하며 청소를 진행하고 있습니다.

지역마다 종량제 봉투 규격이 달라 모든 지역의 봉투를 상시 구비하기 어려워 청소 시 집안에서 나오는 쓰레기는 작업 후 한 곳에 모아 현관 밖으로 빼드리고 있습니다.

이 쓰레기에는 기존 거주자가 남긴 생활 쓰레기, 공사·인테리어 후 남은 자재나 포장재 등이 포함될 수 있습니다.`
  },
  {
    id: "info-6",
    title: "취소 및 위약금 안내",
    icon: "✅",
    content: `갑작스러운 일정 변경이 생길 수 있다는 점
저희도 충분히 공감합니다.

다만 저희는 하루 한 집만 책임지는
전담 시스템으로 운영되다 보니,
하루 일정이 취소될 경우 준비된
인력과 장비에 대한 손실이 커집니다.

아래 기준에 따라 위약금이 발생할 수 있는 점
너그러운 이해 부탁드립니다 🙏

📌 취소 시점에 따른 위약금
• 3일 전까지: 전액 환불
• 2일 전: 총 청소비용의 20%
• 1일 전: 총 청소비용의 30%
• 당일: 총 청소비용의 50%

📎 예시 안내
총 청소비용이 60만원일 경우:
2일 전 취소 → 위약금 12만원
1일 전 취소→ 위약금 18만원
당일 취소→ 위약금 30만원

※ 위약금은 예약 확정(예약금 입금 후)부터 적용됩니다.`
  },
  {
    id: "info-7",
    title: "결제 관련 안내",
    icon: "✅",
    content: `저희는 부가가치세(VAT) 일반과세 사업자로,
세금계산서 또는 현금영수증 발급을 희망하시는 경우,
부가세 10%가 별도 추가됩니다.

예)
청소비용 550,000원 → 세금계산서 발행 시 총 605,000원`
  }
];

function InfoAccordionItem({ item }: { item: InfoItem }) {
  const { isOpen, toggle, contentRef, contentStyle } = useAccordion();

  return (
    <div className="border border-muted/30 rounded-lg mb-4 overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm">
      <button
        onClick={toggle}
        className="flex w-full cursor-pointer items-center justify-between p-6 text-left hover:bg-primary/5 transition-all duration-300"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{item.icon}</span>
          <span className="font-semibold text-primary text-base">{item.title}</span>
        </div>
        <span
          className={`ml-4 text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ⌃
        </span>
      </button>
      <div ref={contentRef} style={contentStyle} className="accordion-content">
        <div className="px-6 pb-6 bg-muted/20">
          <div className="text-sm text-accent leading-relaxed whitespace-pre-line border-l-2 border-primary/20 pl-4">
            {item.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InfoSection() {
  return (
    <Section id="info" className="py-16 bg-gradient-to-br from-muted/10 to-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-4">
            예약 전 안내사항
          </h2>
          <p className="text-accent max-w-2xl mx-auto">
            청소 서비스 예약 전 꼭 확인해주세요. 원활한 서비스 제공을 위한 중요한 안내사항입니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {INFO_DATA.map((item) => (
            <InfoAccordionItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
