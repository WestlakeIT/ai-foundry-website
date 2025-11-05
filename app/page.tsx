import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Differentiator from '@/components/sections/Differentiator';
import PathwaysTeaser from '@/components/sections/PathwaysTeaser';
import NinetyDayGuarantee from '@/components/home/NinetyDayGuarantee';
import LiveTicker from '@/components/sections/LiveTicker';
import ChallengeSection from '@/components/sections/ChallengeSection';
import SocialProof from '@/components/sections/SocialProof';
import UrgencyCTA from '@/components/sections/UrgencyCTA';

export default function Page() {
  return (
    <>
      <Hero />
      <Stats />
      <Differentiator />
      <PathwaysTeaser />
      <NinetyDayGuarantee />
      <LiveTicker />
      <ChallengeSection />
      <SocialProof />
      <UrgencyCTA />
    </>
  );
}

