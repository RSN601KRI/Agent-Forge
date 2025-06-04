
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DollarSign, Plus, Users, TrendingUp, Percent, PieChart } from 'lucide-react';

const RevenueShare = () => {
  const [contributors, setContributors] = useState([
    {
      id: 1,
      name: "Alice Chen",
      role: "Lead Developer",
      contributionScore: 850,
      sharePercentage: 25,
      totalEarned: 18750,
      currency: "USDC",
      walletAddress: "0x742d...A4B9",
      status: "active"
    },
    {
      id: 2,
      name: "Bob Wilson",
      role: "Smart Contract Auditor",
      contributionScore: 720,
      sharePercentage: 20,
      totalEarned: 15000,
      currency: "USDC",
      walletAddress: "0x8C3E...F2D1",
      status: "active"
    },
    {
      id: 3,
      name: "Carol Martinez",
      role: "Product Designer",
      contributionScore: 650,
      sharePercentage: 18,
      totalEarned: 13500,
      currency: "USDC",
      walletAddress: "0x1F4A...C7E8",
      status: "active"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Marketing Lead",
      contributionScore: 580,
      sharePercentage: 15,
      totalEarned: 11250,
      currency: "USDC",
      walletAddress: "0x9B2C...D5A7",
      status: "active"
    }
  ]);

  const [revenuePool, setRevenuePool] = useState({
    totalRevenue: 125000,
    availableForDistribution: 75000,
    distributedThisMonth: 32500,
    pendingDistribution: 42500
  });

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newContributor, setNewContributor] = useState({
    name: '',
    role: '',
    sharePercentage: 10,
    walletAddress: ''
  });

  const handleAddContributor = () => {
    const contributor = {
      id: Date.now(),
      ...newContributor,
      contributionScore: 500,
      totalEarned: 0,
      currency: 'USDC',
      status: 'active'
    };
    
    setContributors([...contributors, contributor]);
    setNewContributor({ name: '', role: '', sharePercentage: 10, walletAddress: '' });
    setIsAddDialogOpen(false);
  };

  const distributeRevenue = () => {
    console.log('Triggering automated revenue distribution...');
    setRevenuePool(prev => ({
      ...prev,
      distributedThisMonth: prev.distributedThisMonth + prev.pendingDistribution,
      pendingDistribution: 0
    }));
  };

  const getContributionLevel = (score: number) => {
    if (score >= 800) return { level: 'Elite', color: 'text-purple-600' };
    if (score >= 600) return { level: 'Advanced', color: 'text-blue-600' };
    if (score >= 400) return { level: 'Intermediate', color: 'text-emerald-600' };
    return { level: 'Beginner', color: 'text-yellow-600' };
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Revenue Share Management</h1>
            <p className="text-muted-foreground">Automated profit distribution based on contribution metrics</p>
          </div>
          
          <div className="flex gap-3">
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="hover:bg-emerald-50">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Contributor
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Contributor</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={newContributor.name}
                      onChange={(e) => setNewContributor({...newContributor, name: e.target.value})}
                      placeholder="e.g., John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      value={newContributor.role}
                      onChange={(e) => setNewContributor({...newContributor, role: e.target.value})}
                      placeholder="e.g., Backend Developer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="share">Share Percentage (%)</Label>
                    <Input
                      id="share"
                      type="number"
                      value={newContributor.sharePercentage}
                      onChange={(e) => setNewContributor({...newContributor, sharePercentage: parseInt(e.target.value)})}
                      max={100}
                      min={1}
                    />
                  </div>
                  <div>
                    <Label htmlFor="wallet">Wallet Address</Label>
                    <Input
                      id="wallet"
                      value={newContributor.walletAddress}
                      onChange={(e) => setNewContributor({...newContributor, walletAddress: e.target.value})}
                      placeholder="0x..."
                    />
                  </div>
                  <Button 
                    onClick={handleAddContributor}
                    className="w-full bg-gradient-to-r from-emerald-600 to-blue-600"
                    disabled={!newContributor.name || !newContributor.role}
                  >
                    Add Contributor
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button 
              onClick={distributeRevenue}
              className="group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 bg-gradient-to-r from-emerald-600 to-blue-600"
            >
              <DollarSign className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Distribute Revenue
            </Button>
          </div>
        </div>

        {/* Revenue Pool Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                ${revenuePool.totalRevenue.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">All-time revenue</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Available
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ${revenuePool.availableForDistribution.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">Ready for distribution</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Distributed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                ${revenuePool.distributedThisMonth.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Percent className="h-5 w-5" />
                Pending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                ${revenuePool.pendingDistribution.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">Awaiting distribution</p>
            </CardContent>
          </Card>
        </div>

        {/* Contributors List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributors.map((contributor) => {
            const contributionLevel = getContributionLevel(contributor.contributionScore);
            return (
              <Card key={contributor.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border hover:border-emerald-500/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline" className={`${contributionLevel.color} border-0`}>
                        {contributionLevel.level}
                      </Badge>
                      <Badge variant="outline" className="bg-emerald-500 text-white border-0">
                        {contributor.sharePercentage}%
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">{contributor.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{contributor.role}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Total Earned</span>
                      <span className="text-lg font-bold text-emerald-600">
                        ${contributor.totalEarned.toLocaleString()} {contributor.currency}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-muted-foreground">Contribution Score</span>
                        <div className="font-semibold">{contributor.contributionScore}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Share</span>
                        <div className="font-semibold">{contributor.sharePercentage}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    <span>Wallet: {contributor.walletAddress}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-emerald-50">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      View Stats
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-blue-50">
                      <DollarSign className="mr-1 h-3 w-3" />
                      Pay Out
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RevenueShare;
