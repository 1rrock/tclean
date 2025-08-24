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
    question: "어떤 장비를 사용하나요?",
    answer: "컬비 청소기, 스팀기, 친환경 약품, 피톤치드 등을 사용합니다.",
    category: "장비"
  }
];

function AccordionItem({ faq }: { faq: FAQ }) {
  const { isOpen, toggle, contentRef, contentStyle } = useAccordion();

  return (
    <div className="border-b border-muted last:border-b-0">
      <button
        onClick={toggle}
        className="flex w-full cursor-pointer items-center justify-between p-5 text-left text-sm font-medium text-primary hover:bg-primary/5 transition-all duration-300"
        aria-expanded={isOpen}
      >
        <p className="flex items-center gap-2"><span className="text-xl font-bold">Q</span> {faq.question}</p>
        <span
          className={`ml-4 text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div ref={contentRef} style={contentStyle} className="accordion-content">
        <div className="px-5 pb-5 bg-muted/30">
          <p className="text-sm text-accent leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <Section id="faq" className="py-16 bg-gradient-to-br from-white to-muted/20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-accent max-w-2xl mx-auto">
            고객님들이 가장 많이 궁금해하시는 내용들을 정리했습니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-muted bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden">
            {FAQ_DATA.map((faq) => (
              <AccordionItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
