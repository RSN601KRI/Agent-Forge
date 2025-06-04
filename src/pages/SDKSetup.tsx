import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Terminal, Package, CheckCircle, ExternalLink, Copy } from 'lucide-react';

const SDKSetup = () => {
  const steps = [
    {
      id: 1,
      title: "Install AgentForge SDK",
      description: "Add the AgentForge SDK to your project using your preferred package manager",
      code: "npm install @agentforge/sdk\n# or\nyarn add @agentforge/sdk\n# or\npnpm add @agentforge/sdk",
      language: "bash"
    },
    {
      id: 2,
      title: "Initialize SDK",
      description: "Set up the AgentForge SDK with your API credentials",
      code: `import { AgentForgeSDK } from '@agentforge/sdk';\n\nconst agentForge = new AgentForgeSDK({\n  apiKey: process.env.AGENTFORGE_API_KEY,\n  environment: 'production' // or 'sandbox'\n});`,
      language: "typescript"
    },
    {
      id: 3,
      title: "Create Your First Agent",
      description: "Build an autonomous agent that can handle transactions",
      code: `const bountyAgent = await agentForge.createAgent({\n  name: 'Smart Bounty Manager',\n  type: 'bounty_funding',\n  wallet: {\n    currency: 'USDC',\n    initialBalance: 1000\n  },\n  rules: {\n    autoApprove: true,\n    maxAmount: 500\n  }\n});`,
      language: "typescript"
    },
    {
      id: 4,
      title: "Deploy and Monitor",
      description: "Deploy your agent and monitor its transactions in real-time",
      code: `// Deploy the agent\nawait bountyAgent.deploy();\n\n// Monitor transactions\nbountyAgent.on('transaction', (tx) => {\n  console.log('New transaction:', tx);\n});`,
      language: "typescript"
    }
  ];

  const sdkFeatures = [
    {
      title: "Wallet Management",
      description: "Create and manage USDC wallets for your agents",
      icon: Package,
      docs: "https://docs.agentforge.dev/wallet-management"
    },
    {
      title: "Transaction Processing",
      description: "Handle payments, refunds, and transfers automatically",
      icon: CheckCircle,
      docs: "https://docs.agentforge.dev/transactions"
    },
    {
      title: "Agent Orchestration",
      description: "Coordinate multiple agents and manage workflows",
      icon: Terminal,
      docs: "https://docs.agentforge.dev/orchestration"
    },
    {
      title: "Real-time Monitoring",
      description: "Track agent performance and transaction status",
      icon: Code,
      docs: "https://docs.agentforge.dev/monitoring"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AgentForge SDK Setup</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with the AgentForge SDK in minutes. Build autonomous agents that can think and transact.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {sdkFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-4 text-center">
                <feature.icon className="h-8 w-8 mx-auto mb-2 text-emerald-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1 group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{feature.description}</p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs"
                  onClick={() => window.open(feature.docs, '_blank')}
                >
                  Learn More
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Setup Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card key={step.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  <Badge variant="outline">{step.language}</Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{step.code}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() => copyToClipboard(step.code)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Environment Setup */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              Environment Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Set up your environment variables for secure API key management:
            </p>
            <div className="relative">
              <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`# .env file\nAGENTFORGE_API_KEY=your_api_key_here\nAGENTFORGE_ENVIRONMENT=sandbox # or production\nAGENTFORGE_WEBHOOK_SECRET=your_webhook_secret`}</code>
              </pre>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8"
                onClick={() => copyToClipboard(`# .env file\nAGENTFORGE_API_KEY=your_api_key_here\nAGENTFORGE_ENVIRONMENT=sandbox # or production\nAGENTFORGE_WEBHOOK_SECRET=your_webhook_secret`)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps CTA */}
        <Card className="mt-12 bg-gradient-to-r from-emerald-600 to-blue-600 border-0 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Build?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Now that you have the SDK set up, explore our templates and documentation to build your first autonomous agent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="group"
                onClick={() => window.location.href = '/clone-template'}
              >
                Browse Templates
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600"
                onClick={() => window.open('https://docs.agentforge.dev/examples', '_blank')}
              >
                View Examples
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SDKSetup;
