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
		before: "https://img.freepik.com/free-photo/green-sofa-white-living-room-with-free-space_43614-834.jpg?t=st=1755093534~exp=1755097134~hmac=1860479789793ef064957f54453bb41f41b82fbc45db044e05cec1e7d5d3cc8b&w=360",
		after: "https://img.freepik.com/premium-photo/modern-living-room-interior-with-sofa-green-plants-lamp-table-white-wall_41470-843.jpg",
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
		before: "https://img.freepik.com/free-photo/blank-living-room-interior-with-free-space_43614-932.jpg?t=st=1755093618~exp=1755097218~hmac=5c87d519c9dc1362c902cb7fe098f405ba68f9ab47e600cc94a91834530a6646&w=740",
		after: "https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?ga=GA1.1.1492176853.1755093505&semt=ais_hybrid&w=740&q=80",
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
