
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build the Future of Commerce?
            </h2>
            
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building autonomous AI agents 
              that can think, transact, and transform the way business gets done.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                <Code className="mr-2 h-4 w-4" />
                Try Payman SDKs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                View Documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
