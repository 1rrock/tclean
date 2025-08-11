'use client'
import { Badge, Card, Container, Section } from "../../shared/ui";
import { Service } from "../../shared/types";

const SERVICES: Service[] = [
  {
    id: "move-in",
    title: "입주 청소",
    description: "새집 입주 전 완벽한 청소",
    features: ["스팀 청소", "피톤치드", "고급 장비"],
    workTime: "4~8시간",
    workers: 2,
    includedServices: ["벽지 미세먼지 제거", "창틀·몰딩·수납장 내부", "바닥·타일", "욕실", "주방", "창문"],
    additionalInfo: "추가비용 없음. 단, 쓰레기 다량 방치, 중공청소 미실시 후 입주청소 등 예외는 사전 안내 후 별도 협의."
  },
  {
    id: "move-out",
    title: "이사 청소",
    description: "이사 전후 깔끔한 마무리",
    features: ["스팀 청소", "피톤치드", "고급 장비"],
    workTime: "4~8시간",
    workers: 2,
    includedServices: ["벽지 미세먼지 제거", "창틀·몰딩·수납장 내부", "바닥·타일", "욕실", "주방", "창문"]
  },
  {
    id: "residential",
    title: "거주 청소",
    description: "살고 계시는 집의 정기 청소",
    features: ["스팀 청소", "피톤치드", "고급 장비"],
    workTime: "3~6시간",
    workers: 2,
    includedServices: ["먼지/때 제거", "주방·욕실 집중", "바닥·창문", "수납장 외부"]
  },
  {
    id: "post-renovation",
    title: "인테리어 후 청소",
    description: "공사 후 완벽한 마무리 청소",
    features: ["스팀 청소", "피톤치드", "고급 장비"],
    workTime: "6~10시간",
    workers: 3,
    includedServices: ["중공 먼지 제거", "타일 분진 제거", "창틀·몰딩", "바닥 폴리싱"]
  }
];

export function ServicesSection() {
  return (
    <Section id="services" className="bg-slate-50 py-16">
      <Container>
        <h2 className="text-2xl font-bold sm:text-3xl">서비스 소개</h2>
        <p className="mt-2 text-sm text-gray-600">사이 청소는 진행하지 않습니다.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <Card key={service.id} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <div className="mt-1 text-sm text-gray-600">
                    작업 시간 {service.workTime} · 인원 {service.workers}~{service.workers + 2}인
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <Badge key={feature}>{feature}</Badge>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium">작업 범위</h4>
                <ul className="mt-2 grid list-disc grid-cols-2 gap-x-6 gap-y-1 pl-5 text-sm">
                  {service.includedServices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {service.additionalInfo && (
                  <p className="mt-4 text-xs text-gray-600">{service.additionalInfo}</p>
                )}

                <p className="mt-1 text-xs text-gray-600">
                  에어컨 청소 가능(분해 청소 별도 금액 안내)
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
