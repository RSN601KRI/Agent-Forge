
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-24 px-4 text-center bg-gradient-to-b from-background via-emerald-50/30 to-purple-50/30 dark:from-background dark:via-emerald-950/20 dark:to-purple-950/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm uppercase tracking-wide bg-emerald-50 dark:bg-emerald-950/50 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-800 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
            <Sparkles className="h-4 w-4 animate-pulse" />
            Autonomous AI Agents That Think, Pay & Execute
          </span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
          AgentForge
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8 hover:text-emerald-600 transition-colors duration-300">
          The Future of Intelligent Commerce Automation
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Deploy autonomous AI agents that revolutionize commerce through intelligent conversations, 
          automate complex payment workflows, manage affiliate systems, and handle sophisticated 
          try-before-you-buy experiences. Where artificial intelligence meets financial innovation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-purple-600 hover:to-emerald-600 text-lg px-8 py-6 hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/build-agents'}
          >
            <Zap className="mr-2 h-5 w-5 group-hover:animate-spin" />
            Deploy Your First Agent
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="group text-lg px-8 py-6 border-2 hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-950/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/clone-template'}
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            Clone Agent Template
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
