
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import UseCasesSection from '@/components/UseCasesSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
