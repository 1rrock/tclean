'use client'
import { Badge, Card, Container, Section } from "../../shared/ui";
import Image from "next/image";

const COMPANY_INFO = {
  name: "믿고 맡기는 청소",
  philosophy: [
    "하루 한 집 집중 작업으로 품질 우선",
    "모서리·몰딩·틈새까지 디테일 청소",
  ],
  equipment: [
    { name: "컬비 청소기", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=640&auto=format&fit=crop" },
    { name: "스팀기", img: "https://images.unsplash.com/photo-1581579188871-c5f5c6a4f5a5?q=80&w=640&auto=format&fit=crop" },
    { name: "친환경 약품", img: "https://images.unsplash.com/photo-1581578017429-1b0c6c6c15ba?q=80&w=640&auto=format&fit=crop" },
    { name: "피톤치드", img: "https://images.unsplash.com/photo-1581579188871-1b0c6c6c15ba?q=80&w=640&auto=format&fit=crop" },
  ],
  team: [
    {
      role: "대표",
      name: "김하루",
      photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=640&auto=format&fit=crop",
      intro: "청소 품질은 타협하지 않습니다."
    },
    {
      role: "팀장",
      name: "이디테일",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop",
      intro: "보이지 않는 먼지까지 챙깁니다."
    },
  ],
};

export function AboutSection() {
  return (
    <Section id="about" className="py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold sm:text-3xl">회사 소개</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="p-6 md:col-span-2">
            <h3 className="text-lg font-semibold">운영 철학</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              {COMPANY_INFO.philosophy.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {COMPANY_INFO.equipment.map((equipment) => (
                <figure key={equipment.name} className="text-center">
                  <Image
                    src={equipment.img}
                    alt={equipment.name}
                    className="h-24 w-full rounded-lg object-cover"
                  />
                  <figcaption className="mt-2 text-xs text-gray-700">
                    {equipment.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">팀 소개</h3>
            <div className="mt-4 space-y-4">
              {COMPANY_INFO.team.map((member) => (
                <div key={member.name} className="flex items-center gap-3">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium">
                      {member.role} · {member.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {member.intro}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
