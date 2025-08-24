'use client'
import { Container, Section } from "../../shared/ui";

interface InfoCard {
  id: string;
  title: string;
  subtitle?: string;
  items: InfoItem[];
  highlight?: boolean;
  highlightText?: string;
}

interface InfoItem {
  label: string;
  description?: string;
  icon?: string;
}

const INFO_CARDS: InfoCard[] = [
  {
    id: "basic-scope",
    title: "기본 청소 범위",
    subtitle: "모든 청소에 포함되는 기본 서비스",
    items: [
      { label: "현관", description: "신발장 내부 먼지 제거, 문틀/손잡이/바닥 오염 제거, 바닥 마감, 현관 센서·스위치 주변 정리" },
      { label: "방/거실/복도", description: "벽면, 문틀, 스위치, 콘센트, 몰딩 상단/하단 먼지 제거, 바닥 전용 장비 마감" },
      { label: "창문/창틀/샷시", description: "내창 기준 창틀, 샷시, 방충망 스팀 청소, 도배풀/테이프 자국 제거 ※외창 작업불가" },
      { label: "주방", description: "수납장 전체 탈거 후 내부/외부 청소, 후드/필터 기름때 제거, 조리대/싱크볼 살균" },
      { label: "욕실/화장실", description: "거울, 수전, 샤워기, 세면대, 양변기 오염 제거, 벽면/바닥 타일 고온 스팀 살균" },
      { label: "베란다/실외기실", description: "바닥, 난간, 창틀, 배수구, 방충망 전체 청소, 곰팡이/시멘트 가루 제거" },
      { label: "수납장", description: "싱크대, 붙박이장, 신발장, 욕실 수납장 탈거 후 먼지 제거 및 살균" },
    ]
  },
  {
    id: "quality-details",
    title: "청소 품질 디테일",
    subtitle: "더 나은 청소를 위한 특별한 케어",
    items: [
      { label: "살균/소독 케어", description: "고온 스팀 살균, 100% 원액 피톤치드로 탈취 및 마감", icon: "🦠" },
      { label: "장비/도구 기준", description: "컬비 청소기, 미코플러스 바닥 장비, 재사용 없는 새 걸레만 사용", icon: "🧹" },
      { label: "세제 사용", description: "독일 키엘사의 친환경 세제 사용", icon: "🧴" },
    ]
  },
  {
    id: "residence-info",
    title: "거주청소 참고사항",
    subtitle: "원활한 작업을 위한 안내",
    items: [
      { label: "수납장/가전 내부", description: "물건이 있을 경우 내부 작업이 제한될 수 있습니다" },
      { label: "가구 이동", description: "작은 짐은 최대한 옮겨가며 청소, 이동 어려운 가구는 제외될 수 있습니다" },
      { label: "사전 정리", description: "짐을 한쪽으로 정리해주시면 훨씬 원활하게 작업이 진행됩니다" },
    ]
  },
  {
    id: "additional-cost",
    title: "추가 비용 발생 상황",
    subtitle: "정찰제 운영, 사전 안내 후 진행",
    highlight: true,
    highlightText: "사전 협의 필수",
    items: [
      { label: "심한 곰팡이", description: "벽 전체에 곰팡이가 퍼져 장시간 제거 작업이 필요한 경우", icon: "🍄" },
      { label: "니코틴 타르 변색", description: "집 전 범위에 퍼진 니코틴 타르로 장시간 탈취·세척이 필요한 경우", icon: "🚬" },
      { label: "샷시 스티커 제거", description: "샤시·문·가구 등 넓은 범위 스티커 제거에 장시간이 필요한 경우", icon: "🏷️" },
      { label: "폐기물 다량 방치", description: "생활 쓰레기, 이사 잔재물 등이 다수 남아 정리 및 수거 작업이 필요한 경우", icon: "🗑️" },
      { label: "준공청소 미실시", description: "폐기물, 마스킹 테이프, 시트지 등 정리가 전혀 안 된 상태", icon: "🏗️" },
      { label: "공간 구조 차이", description: "실제 평수나 베란다, 화장실 등 구성이 사전 안내와 다른 경우", icon: "📏" },
    ]
  },
  {
    id: "waste-info",
    title: "쓰레기 수거 안내",
    subtitle: "지역별 종량제 봉투 차이로 인한 안내",
    items: [
      { label: "수거 방식", description: "작업 후 한 곳에 모아 현관 밖으로 배출" },
      { label: "포함 범위", description: "기존 생활 쓰레기, 공사·인테리어 후 남은 자재나 포장재 등" },
      { label: "봉투 구비", description: "지역마다 종량제 봉투 규격이 달라 모든 지역 봉투 상시 구비 어려움" },
    ]
  },
  {
    id: "cancellation",
    title: "취소 및 위약금",
    subtitle: "하루 한 집 전담 시스템으로 인한 안내",
    highlight: true,
    highlightText: "예약금 입금 후 적용",
    items: [
      { label: "3일 전까지", description: "전액 환불", icon: "✅" },
      { label: "2일 전", description: "총 청소비용의 20% 위약금", icon: "⚠️" },
      { label: "1일 전", description: "총 청소비용의 30% 위약금", icon: "⚠️" },
      { label: "당일", description: "총 청소비용의 50% 위약금", icon: "❌" },
    ]
  },
  {
    id: "payment",
    title: "결제 관련 안내",
    subtitle: "부가가치세 일반과세 사업자",
    items: [
      { label: "세금계산서/현금영수증", description: "발급 시 부가세 10% 별도 추가" },
      { label: "예시", description: "청소비용 550,000원 → 세금계산서 발행 시 총 605,000원" },
    ]
  }
];

function InfoCard({ card }: { card: InfoCard }) {
  return (
    <div className={`bg-white rounded-2xl border-2 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
      card.highlight ? 'border-primary/30' : 'border-muted/20'
    }`}>
      {/* Header */}
      <div className={`p-6 ${card.highlight ? 'bg-primary/5' : 'bg-muted/10'}`}>
        <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
        {card.subtitle && (
          <p className="text-sm text-accent">{card.subtitle}</p>
        )}
        {card.highlightText && (
          <div className="mt-3">
            <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
              {card.highlightText}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-0">
        {card.items.map((item, index) => (
          <div
            key={index}
            className={`flex items-start justify-between p-4 border-b border-muted/10 last:border-b-0 hover:bg-muted/5 transition-colors duration-200 ${
              index % 2 === 1 ? 'bg-muted/3' : ''
            }`}
          >
            <div className="flex items-start gap-3 flex-1">
              {item.icon && (
                <span className="text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
              )}
              <div className="flex-1">
                <div className="font-medium text-primary text-sm mb-1">
                  {item.label}
                </div>
                {item.description && (
                  <div className="text-xs text-accent leading-relaxed">
                    {item.description}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {INFO_CARDS.map((card) => (
            <InfoCard key={card.id} card={card} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-muted/20 rounded-lg p-6">
            <p className="text-sm text-accent">
              <span className="font-medium text-primary">※ 안내사항</span><br/>
              모든 예외 사항은 작업 전 미리 안내드리고, 동의하신 경우에만 진행합니다.<br/>
              가전 내부 청소는 기본 청소 범위에 포함되지 않습니다.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
