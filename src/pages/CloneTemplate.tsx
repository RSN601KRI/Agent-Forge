
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, Copy, Download, Github, Star, Eye, GitFork } from 'lucide-react';

const CloneTemplate = () => {
  const templates = [
    {
      id: 1,
      name: "Bounty Manager Agent",
      description: "Complete bounty management system with funding, milestone tracking, and automatic payouts",
      language: "TypeScript",
      stars: 156,
      forks: 23,
      views: 1204,
      features: ["Auto-funding", "Milestone payments", "Contributor management"],
      repoUrl: "https://github.com/payman-ai/bounty-agent-template",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      name: "Payroll Automation Bot",
      description: "Automated payroll system with tax calculations and multi-currency support",
      language: "Python",
      stars: 89,
      forks: 15,
      views: 892,
      features: ["Weekly payroll", "Tax handling", "Multi-currency"],
      repoUrl: "https://github.com/payman-ai/payroll-agent-template",
      difficulty: "Advanced"
    },
    {
      id: 3,
      name: "Invoice Payment Trigger",
      description: "Smart invoice processing with auto-approval and vendor management",
      language: "JavaScript",
      stars: 234,
      forks: 41,
      views: 1567,
      features: ["Auto-approval", "Vendor sync", "Payment scheduling"],
      repoUrl: "https://github.com/payman-ai/invoice-agent-template",
      difficulty: "Beginner"
    },
    {
      id: 4,
      name: "Refund Processing Agent",
      description: "Handles failed transactions and automates refund processing",
      language: "TypeScript",
      stars: 67,
      forks: 12,
      views: 543,
      features: ["Failure detection", "Auto-refunds", "Dispute resolution"],
      repoUrl: "https://github.com/payman-ai/refund-agent-template",
      difficulty: "Intermediate"
    },
    {
      id: 5,
      name: "Profit Sharing Bot",
      description: "Distributes profits based on contribution metrics and performance",
      language: "Python",
      stars: 198,
      forks: 34,
      views: 1123,
      features: ["Revenue tracking", "Fair distribution", "Performance metrics"],
      repoUrl: "https://github.com/payman-ai/profit-sharing-template",
      difficulty: "Advanced"
    },
    {
      id: 6,
      name: "Multi-Agent Orchestrator",
      description: "Coordinates multiple agents and manages cross-agent communication",
      language: "TypeScript",
      stars: 312,
      forks: 56,
      views: 2103,
      features: ["Agent coordination", "Message routing", "State management"],
      repoUrl: "https://github.com/payman-ai/orchestrator-template",
      difficulty: "Expert"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Advanced': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'Expert': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'TypeScript': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'JavaScript': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Python': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Agent Templates</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clone and customize pre-built agent templates to kickstart your autonomous commerce solutions
          </p>
        </div>

        {/* Quick Start Banner */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Bot className="h-8 w-8 text-blue-600" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">Quick Start Guide</h3>
                <p className="text-muted-foreground">
                  1. Choose a template → 2. Clone repository → 3. Configure Payman SDK → 4. Deploy your agent
                </p>
              </div>
              <Button onClick={() => window.open('https://docs.payman.dev/quickstart', '_blank')}>
                View Guide
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border hover:border-blue-500/50 hover:shadow-blue-500/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors mb-2">
                      {template.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-3">
                  <Badge className={getDifficultyColor(template.difficulty)}>
                    {template.difficulty}
                  </Badge>
                  <Badge className={getLanguageColor(template.language)}>
                    {template.language}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{template.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{template.forks}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{template.views}</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Features:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {template.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 group/btn"
                    onClick={() => window.open(template.repoUrl, '_blank')}
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Clone
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(`git clone ${template.repoUrl}`);
                    }}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(`${template.repoUrl}/archive/main.zip`, '_blank')}
                  >
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SDK Setup CTA */}
        <Card className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 border-0 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Follow our step-by-step setup guide to configure the Payman SDK and deploy your first agent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="group"
                onClick={() => window.open('https://sdk.payman.dev/setup', '_blank')}
              >
                SDK Setup Guide
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-green-600"
                onClick={() => window.open('https://docs.payman.dev', '_blank')}
              >
                Full Documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CloneTemplate;
