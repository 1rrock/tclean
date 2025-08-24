'use client'
import { motion } from "framer-motion";
import { Badge, Button, Container, Section } from "../../shared/ui";
import { CONTACT_INFO, ANALYTICS_EVENTS } from "../../shared/constants";
import { track } from "../../shared/utils";

const COMPANY_PHILOSOPHY = ["하루 한 집", "디테일 청소", "정찰제 운영"];

export function HeroSection() {
  const handleQuoteClick = () => {
    track(ANALYTICS_EVENTS.HERO_CTA_CLICK, { location: 'hero' });
    window.open(CONTACT_INFO.formUrl, '_blank');
  };

  const handleServicesClick = () => {
    track('cta_services_view');
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1564540574859-0dfb63985947?q=80&w=1800&auto=format&fit=crop"
          className="h-full w-full object-cover opacity-20"
          alt="현장 작업 배경"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-primary/10" />
      </div>

      <Container>
        <div className="flex min-h-[72vh] flex-col items-start justify-center py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold leading-tight text-primary sm:text-5xl"
          >
            하루 한 집만 작업하는{" "} <br />
            <span className="gradient-primary text-white bg-clip-text px-1">프리미엄 청소</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-accent max-w-2xl leading-relaxed"
          >
              믿고 맡길 수 있는 정직한 청소업체! 믿고 맡기는 청소입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {COMPANY_PHILOSOPHY.map((philosophy) => (
              <Badge key={philosophy}>{philosophy}</Badge>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex gap-3"
          >
            <Button onClick={handleQuoteClick} size="md" className="btn-primary">
              지금 견적 문의하기
            </Button>
            <Button onClick={handleServicesClick} className="btn-primary" variant="outline" size="md">
              서비스 보러가기
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
