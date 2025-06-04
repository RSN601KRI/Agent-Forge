
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, CreditCard, Zap, Shield, BarChart3, Workflow } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    description: "Build intelligent agents that can understand customer needs and execute complex commerce workflows automatically."
  },
  {
    icon: CreditCard,
    title: "Real Payment Access",
    description: "Integrate USDC/USD payments seamlessly with our secure wallet SDK for real-world transactions."
  },
  {
    icon: Workflow,
    title: "Wildcard Agent Toolkit",
    description: "Fund bounties, run payroll, trigger invoice payments, refund failed tasks, and split profits with contributors."
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Automate inventory restocking, affiliate payouts, and try-before-you-buy flows with intelligent triggers."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get real-time insights into your AI agent performance and commerce metrics with detailed reporting."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with multi-signature wallets and comprehensive audit trails for all transactions."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful AI Commerce Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build creative, functional AI-powered commerce tools 
            that can handle real payments and transactions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
