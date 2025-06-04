
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, MessageSquare, Package, ShoppingCart, DollarSign, Users, Plus, Settings, Play, Pause } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Shopping Assistant",
      description: "AI agent that helps customers find and purchase products through natural conversation",
      status: "active",
      type: "Shopping Agent",
      icon: MessageSquare,
      revenue: "$5,240",
      users: 156,
      color: "blue"
    },
    {
      id: 2,
      name: "Inventory Management Bot",
      description: "Automatically monitors stock levels and reorders products based on demand patterns",
      status: "active",
      type: "Inventory Agent",
      icon: Package,
      revenue: "$8,120",
      users: 89,
      color: "green"
    },
    {
      id: 3,
      name: "Affiliate Payout System",
      description: "Calculates and distributes affiliate commissions automatically",
      status: "paused",
      type: "Payment Agent",
      icon: DollarSign,
      revenue: "$3,890",
      users: 245,
      color: "purple"
    },
    {
      id: 4,
      name: "Try-Before-Buy Manager",
      description: "Handles trial periods, billing, and return processing for customers",
      status: "active",
      type: "Trial Agent",
      icon: ShoppingCart,
      revenue: "$2,150",
      users: 67,
      color: "orange"
    },
    {
      id: 5,
      name: "Team Profit Sharing",
      description: "Automatically calculates and distributes profits among team members",
      status: "active",
      type: "Finance Agent",
      icon: Users,
      revenue: "$4,520",
      users: 34,
      color: "pink"
    },
    {
      id: 6,
      name: "Bounty Management System",
      description: "Funds bounties and processes milestone payments for contributors",
      status: "development",
      type: "Bounty Agent",
      icon: Bot,
      revenue: "$0",
      users: 0,
      color: "indigo"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'paused': return 'bg-yellow-500';
      case 'development': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">AI Agent Projects</h1>
            <p className="text-muted-foreground">Manage and monitor your autonomous commerce agents</p>
          </div>
          <Button className="group hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            <Plus className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
            New Project
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border hover:border-blue-500/50 hover:shadow-blue-500/20 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${project.color}-400 to-${project.color}-600`}></div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 bg-${project.color}-100 dark:bg-${project.color}-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className={`h-6 w-6 text-${project.color}-600 dark:text-${project.color}-400`} />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className={`${getStatusColor(project.status)} text-white border-0`}>
                      {project.status}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{project.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium">{project.type}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Revenue</span>
                    <div className="font-bold text-green-600">{project.revenue}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Users</span>
                    <div className="font-bold">{project.users}</div>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 group/btn hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950">
                    <Play className="mr-1 h-3 w-3 group-hover/btn:scale-110 transition-transform" />
                    Run
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 group/btn hover:bg-orange-50 hover:border-orange-300 dark:hover:bg-orange-950">
                    <Pause className="mr-1 h-3 w-3 group-hover/btn:scale-110 transition-transform" />
                    Pause
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
