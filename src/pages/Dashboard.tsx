
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, DollarSign, Bot, Users, TrendingUp, Activity } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: "Active Agents",
      value: "12",
      icon: Bot,
      change: "+2.5%",
      trend: "up"
    },
    {
      title: "Total Revenue",
      value: "$24,500",
      icon: DollarSign,
      change: "+12.3%",
      trend: "up"
    },
    {
      title: "Transactions",
      value: "1,247",
      icon: Activity,
      change: "+8.1%",
      trend: "up"
    },
    {
      title: "Active Users",
      value: "348",
      icon: Users,
      change: "+4.7%",
      trend: "up"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Monitor your AI agents and commerce performance</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border hover:border-blue-500/50 hover:shadow-blue-500/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Shopping Agent #{i}</p>
                      <p className="text-sm text-muted-foreground">Processed payment of $127.50</p>
                    </div>
                    <span className="text-xs text-muted-foreground">2 min ago</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Success Rate</span>
                  <span className="font-bold text-green-600">98.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Avg Response Time</span>
                  <span className="font-bold">1.2s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customer Satisfaction</span>
                  <span className="font-bold text-blue-600">4.8/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cost Efficiency</span>
                  <span className="font-bold text-purple-600">+23%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
