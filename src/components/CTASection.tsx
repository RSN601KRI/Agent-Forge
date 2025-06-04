
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Sparkles, ExternalLink, Zap } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <Card className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 border-0 text-white hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 via-blue-600/90 to-purple-600/90"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)] animate-pulse"></div>
          </div>
          
          <CardContent className="relative z-10 p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-10 w-10 text-white animate-pulse" />
                <div className="absolute inset-0 bg-white/10 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-x">
              Ready to Forge the Future of AI Commerce?
            </h2>
            
            <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of developers who are already building autonomous AI agents 
              that can think, transact, and transform the way business gets done.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="group relative overflow-hidden text-lg px-8 py-6 bg-white text-emerald-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/sdk-setup'}
              >
                <Code className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Try AgentForge SDKs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-emerald-50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                onClick={() => window.open('https://docs.agentforge.dev', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                View Documentation
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center group">
                <Zap className="h-8 w-8 mx-auto mb-3 text-yellow-300 group-hover:animate-bounce" />
                <h4 className="font-semibold mb-2">Lightning Fast</h4>
                <p className="text-sm text-emerald-100">Deploy AI agents in minutes, not months</p>
              </div>
              <div className="text-center group">
                <Code className="h-8 w-8 mx-auto mb-3 text-green-300 group-hover:animate-pulse" />
                <h4 className="font-semibold mb-2">Developer Friendly</h4>
                <p className="text-sm text-emerald-100">Simple SDKs with comprehensive documentation</p>
              </div>
              <div className="text-center group">
                <Sparkles className="h-8 w-8 mx-auto mb-3 text-purple-300 group-hover:animate-spin" />
                <h4 className="font-semibold mb-2">Enterprise Ready</h4>
                <p className="text-sm text-emerald-100">Bank-grade security and compliance built-in</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
