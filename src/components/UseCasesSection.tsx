
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Repeat, Package, ShoppingCart, DollarSign, Users } from 'lucide-react';

const useCases = [
  {
    icon: MessageSquare,
    title: "Conversational Shopping Assistant",
    description: "Deploy AI agents that help customers find products, compare options, and complete purchases through natural chat interactions.",
    cta: "Build Shopping Agent"
  },
  {
    icon: Repeat,
    title: "Automated Affiliate Management",
    description: "Create agents that track performance, calculate commissions, and automatically distribute affiliate payouts to partners.",
    cta: "Setup Affiliate System"
  },
  {
    icon: Package,
    title: "Smart Inventory Management",
    description: "Build agents that monitor stock levels, predict demand patterns, and automatically reorder inventory when needed.",
    cta: "Deploy Inventory Agent"
  },
  {
    icon: ShoppingCart,
    title: "Try-Before-You-Buy Flows",
    description: "Implement sophisticated trial systems with automatic billing, return processing, and customer retention workflows.",
    cta: "Create Trial System"
  },
  {
    icon: DollarSign,
    title: "Bounty & Payment Automation",
    description: "Set up agents that fund bounties, process milestone payments, and handle complex multi-party financial workflows.",
    cta: "Setup Payment Flows"
  },
  {
    icon: Users,
    title: "Contributor Profit Sharing",
    description: "Deploy agents that calculate earnings, split profits fairly, and automatically distribute payments to team members.",
    cta: "Build Profit Sharing"
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-World Use Cases
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore practical applications where AI agents can transform your commerce operations 
            with intelligent automation and seamless payment integration.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{useCase.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {useCase.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
