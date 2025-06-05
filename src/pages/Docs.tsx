
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book, ExternalLink, Code, Zap, Shield, DollarSign, Bot, Rocket } from 'lucide-react';

const Docs = () => {
  const sections = [
    {
      title: "Getting Started",
      icon: Rocket,
      items: [
        { name: "Introduction", url: "https://docs.paymanai.com/overview/introduction", type: "guide" },
        { name: "Quick Start", url: "https://docs.paymanai.com/developer/payman-sdk", type: "guide" },
        { name: "Setup & Installation", url: "https://docs.paymanai.com/developer/payman-sdk", type: "tutorial" }
      ]
    },
    {
      title: "Payman AI SDK",
      icon: Code,
      items: [
        { name: "SDK Documentation", url: "https://docs.paymanai.com/developer/payman-sdk", type: "reference" },
        { name: "API Reference", url: "https://docs.paymanai.com/developer/payman-sdk", type: "reference" },
        { name: "Code Examples", url: "https://docs.paymanai.com/developer/payman-sdk", type: "reference" }
      ]
    },
    {
      title: "AI Agents",
      icon: Bot,
      items: [
        { name: "Building Shopping Agents", url: "https://docs.paymanai.com/overview/introduction", type: "guide" },
        { name: "Payment Automation", url: "https://docs.paymanai.com/developer/payman-sdk", type: "guide" },
        { name: "Agent Workflows", url: "https://docs.paymanai.com/overview/introduction", type: "guide" }
      ]
    },
    {
      title: "Security & Payments",
      icon: Shield,
      items: [
        { name: "Security Overview", url: "https://docs.paymanai.com/overview/introduction", type: "guide" },
        { name: "Payment Processing", url: "https://docs.paymanai.com/developer/payman-sdk", type: "guide" },
        { name: "Compliance", url: "https://docs.paymanai.com/overview/introduction", type: "reference" }
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Payman AI SDK",
      description: "Get started with the official Payman AI SDK",
      icon: Zap,
      url: "https://docs.paymanai.com/developer/payman-sdk",
      color: "blue"
    },
    {
      title: "Introduction Guide",
      description: "Complete overview and getting started guide",
      icon: Book,
      url: "https://docs.paymanai.com/overview/introduction",
      color: "green"
    },
    {
      title: "Payment Integration",
      description: "AI-powered payment processing integration",
      icon: DollarSign,
      url: "https://docs.paymanai.com/developer/payman-sdk",
      color: "purple"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'tutorial': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'reference': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build autonomous AI agents with Payman AI SDK
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border hover:border-blue-500/50 hover:shadow-blue-500/20 cursor-pointer">
              <CardHeader>
                <div className={`w-12 h-12 bg-${link.color}-100 dark:bg-${link.color}-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className={`h-6 w-6 text-${link.color}-600 dark:text-${link.color}-400`} />
                </div>
                <CardTitle className="flex items-center justify-between group-hover:text-blue-600 transition-colors">
                  {link.title}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{link.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 group-hover:bg-blue-50 group-hover:border-blue-300 dark:group-hover:bg-blue-950"
                  onClick={() => window.open(link.url, '_blank')}
                >
                  Explore
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Documentation Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-white" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Book className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium group-hover:text-blue-600 transition-colors">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getTypeColor(item.type)}>
                          {item.type}
                        </Badge>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => window.open(item.url, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SDK Call-to-Action */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Build with Payman AI?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Start building autonomous AI agents today. The Payman AI SDK makes it easy to integrate 
              AI-powered commerce capabilities into your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="group"
                onClick={() => window.open('https://docs.paymanai.com/developer/payman-sdk', '_blank')}
              >
                <Code className="mr-2 h-4 w-4" />
                Try Payman AI SDK
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.open('https://docs.paymanai.com/overview/introduction', '_blank')}
              >
                View Full Documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Docs;
