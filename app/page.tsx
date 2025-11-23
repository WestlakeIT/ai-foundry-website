import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Differentiator from '@/components/sections/Differentiator';
import PathwaysTeaser from '@/components/sections/PathwaysTeaser';
import NinetyDayGuarantee from '@/components/home/NinetyDayGuarantee';
import ChallengeSection from '@/components/sections/ChallengeSection';
import UrgencyCTA from '@/components/sections/UrgencyCTA';

export default function Page() {
  return (
    <>
      <Hero />
      <Stats />
      <Differentiator />
      <PathwaysTeaser />
      <NinetyDayGuarantee />
      <ChallengeSection />
      <UrgencyCTA />
    </>
  );
}

