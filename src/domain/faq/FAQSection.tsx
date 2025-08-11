'use client'
import { Container, Section } from "../../shared/ui";
import { useAccordion } from "../../shared/hooks/useAccordion";
import { FAQ } from "../../shared/types";

const FAQ_DATA: FAQ[] = [
  {
    id: "faq-1",
    question: "작업 시간은 얼마나 걸리나요?",
    answer: "평수와 상태에 따라 다르지만 보통 4~8시간 내외입니다.",
    category: "작업시간"
  },
  {
    id: "faq-2",
    question: "예약은 언제 하는 게 좋나요?",
    answer: "희망 날짜 최소 3~7일 전에 문의 주시면 원활합니다.",
    category: "예약"
  },
  {
    id: "faq-3",
    question: "추가비용이 있나요?",
    answer: "원칙적으로 없습니다. 다만 쓰레기 다량 방치, 중공청소 미실시 등 예외는 사전 안내 후 협의합니다.",
    category: "비용"
  },
  {
    id: "faq-4",
    question: "어떤 장비를 사용하나요?",
    answer: "컬비 청소기, 스팀기, 친환경 약품, 피톤치드 등을 사용합니다.",
    category: "장비"
  }
];

function AccordionItem({ faq }: { faq: FAQ }) {
  const { isOpen, toggle, contentRef, contentStyle } = useAccordion();

  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={toggle}
        className="flex w-full cursor-pointer items-center justify-between p-5 text-left text-sm font-medium hover:bg-gray-50/50 transition-colors"
        aria-expanded={isOpen}
      >
        {faq.question}
        <span
          className={`ml-4 text-gray-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ⌃
        </span>
      </button>
      <div ref={contentRef} style={contentStyle}>
        <div className="px-5 pb-5">
          <p className="text-sm text-gray-700">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <Section id="faq" className="py-16">
      <Container>
        <h2 className="text-2xl font-bold sm:text-3xl">문의 · FAQ</h2>

        <div className="mt-6 rounded-2xl border bg-white/70">
          {FAQ_DATA.map((faq) => (
            <AccordionItem key={faq.id} faq={faq} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
