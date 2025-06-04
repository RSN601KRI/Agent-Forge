
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-24 px-4 text-center bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            AI Commerce Revolution
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Payman
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
          Build AI Agents That Can Think and Transact
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Give developers the space to build autonomous agents that can help customers shop through chat, 
          automate affiliate payouts, restock inventory based on demand, and handle try-before-you-buy flows. 
          Anything where AI + money + commerce meet.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group">
            Start a new project
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="group">
            <Play className="mr-2 h-4 w-4" />
            View Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
