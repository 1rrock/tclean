'use client'
import { Card, Container, Section } from "../../shared/ui";
import BeforeAfter from "../../shared/ui/BeforeAfter";
import { PortfolioItem } from "../../shared/types";
import { track, ANALYTICS_EVENTS } from "../../shared/utils";

const PORTFOLIO_CASES: PortfolioItem[] = [
	{
		id: "case-1",
		title: "신축 33평 입주청소",
		description: "곰팡이 제거 & 피톤치드 마감",
		before: "https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=1080&auto=format&fit=crop",
		after: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1080&auto=format&fit=crop",
		serviceType: "입주청소",
		workDate: "2024-03-15",
	},
	{
		id: "case-2",
		title: "이사 전 청소",
		description: "주방 후드 기름때 클리닝",
		before: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1080&auto=format&fit=crop",
		after: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1080&auto=format&fit=crop",
		serviceType: "이사청소",
		workDate: "2024-03-10",
	},
	{
		id: "case-3",
		title: "거주청소",
		description: "욕실 실리콘 곰팡이 제거",
		before: "https://images.unsplash.com/photo-1523419409543-44b0aef0c260?q=80&w=1080&auto=format&fit=crop",
		after: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1080&auto=format&fit=crop",
		serviceType: "거주청소",
		workDate: "2024-03-05",
	},
];

export function PortfolioSection() {
	const handleCaseView = (caseId: string) => {
		track(ANALYTICS_EVENTS.PORTFOLIO_VIEW, { case_id: caseId });
	};

	return (
		<Section id="cases" className="py-16">
			<Container>
				<h2 className="text-2xl font-bold sm:text-3xl">시공 사례</h2>

				<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
					{PORTFOLIO_CASES.map((portfolioCase) => (
						<Card
							key={portfolioCase.id}
							className="overflow-hidden"
							onClick={() => handleCaseView(portfolioCase.id)}
						>
							<div className="relative aspect-[4/3] w-full">
								<BeforeAfter
									before={portfolioCase.before}
									after={portfolioCase.after}
								/>
							</div>
							<div className="p-4">
								<h3 className="font-medium text-sm mb-1">
									{portfolioCase.title}
								</h3>
								<p className="text-sm text-gray-600">
									{portfolioCase.description}
								</p>
							</div>
						</Card>
					))}
				</div>

				<blockquote className="mt-8 rounded-2xl border bg-white/70 p-6 text-sm text-gray-700">
					&ldquo;입주 전 먼지가 걱정이었는데, 창틀부터 수납장 내부까지 완벽했습니다. 피톤치드 향도 좋아요!&rdquo; – 고객 후기
				</blockquote>
			</Container>
		</Section>
	);
}
