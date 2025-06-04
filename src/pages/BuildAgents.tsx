
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, DollarSign, Users, FileText, RefreshCw, TrendingUp, Plus, Settings, Play } from 'lucide-react';

const BuildAgents = () => {
  const agents = [
    {
      id: 1,
      name: "Bounty Funding Agent",
      description: "Automatically funds bounties and manages milestone payments for contributors",
      status: "active",
      icon: DollarSign,
      features: ["Auto-fund bounties", "Milestone tracking", "Payment verification"],
      walletBalance: "$12,450",
      monthlyVolume: "$45,200",
      color: "green"
    },
    {
      id: 2,
      name: "Payroll Management Bot",
      description: "Runs automated payroll for team members with smart contract execution",
      status: "active", 
      icon: Users,
      features: ["Weekly payroll", "Tax calculations", "Multi-currency support"],
      walletBalance: "$8,750",
      monthlyVolume: "$28,900",
      color: "blue"
    },
    {
      id: 3,
      name: "Invoice Payment Trigger",
      description: "Automatically processes invoice payments when conditions are met",
      status: "active",
      icon: FileText,
      features: ["Auto-approval", "Payment scheduling", "Vendor management"],
      walletBalance: "$15,200",
      monthlyVolume: "$67,800",
      color: "purple"
    },
    {
      id: 4,
      name: "Refund Processing Agent",
      description: "Handles failed task refunds and dispute resolution automatically",
      status: "active",
      icon: RefreshCw,
      features: ["Failed task detection", "Auto-refunds", "Dispute handling"],
      walletBalance: "$3,420",
      monthlyVolume: "$12,100",
      color: "orange"
    },
    {
      id: 5,
      name: "Profit Splitting Bot",
      description: "Distributes profits among contributors based on contribution metrics",
      status: "active",
      icon: TrendingUp,
      features: ["Revenue tracking", "Fair distribution", "Contributor scoring"],
      walletBalance: "$22,100",
      monthlyVolume: "$89,500",
      color: "pink"
    }
  ];

  const quickActions = [
    {
      title: "Clone Template",
      description: "Get started with pre-built agent templates",
      action: () => window.open('https://github.com/payman-ai/agent-templates', '_blank'),
      color: "blue"
    },
    {
      title: "SDK Setup",
      description: "Install and configure Payman SDK",
      action: () => window.open('https://sdk.payman.dev/setup', '_blank'),
      color: "green"
    },
    {
      title: "View Docs",
      description: "Complete documentation and examples",
      action: () => window.open('https://docs.payman.dev', '_blank'),
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Build Agents Dashboard</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fund bounties, run payroll, trigger payments, handle refunds, and split profits — 
            all using the same Payman wallet SDK
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border hover:border-blue-500/50 hover:shadow-blue-500/20 cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {action.title}
                </h3>
                <p className="text-muted-foreground mb-4">{action.description}</p>
                <Button 
                  onClick={action.action}
                  className={`w-full bg-${action.color}-600 hover:bg-${action.color}-700 transition-all duration-300`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {agents.map((agent) => (
            <Card key={agent.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border hover:border-blue-500/50 hover:shadow-blue-500/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-${agent.color}-100 dark:bg-${agent.color}-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <agent.icon className={`h-6 w-6 text-${agent.color}-600 dark:text-${agent.color}-400`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {agent.name}
                      </CardTitle>
                      <Badge variant="outline" className="bg-green-500 text-white border-0 mt-1">
                        {agent.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{agent.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <span className="text-xs text-muted-foreground">Wallet Balance</span>
                    <div className="font-bold text-green-600">{agent.walletBalance}</div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <span className="text-xs text-muted-foreground">Monthly Volume</span>
                    <div className="font-bold">{agent.monthlyVolume}</div>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Features:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {agent.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SDK Integration CTA */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Bot className="h-12 w-12 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Own Agents?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              All these agents use the same Payman wallet SDK. Start building your autonomous 
              commerce agents today with our comprehensive toolkit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="group"
                onClick={() => window.open('https://sdk.payman.dev', '_blank')}
              >
                <Plus className="mr-2 h-4 w-4" />
                Create New Agent
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.open('https://docs.payman.dev/agents', '_blank')}
              >
                View Agent Examples
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuildAgents;
