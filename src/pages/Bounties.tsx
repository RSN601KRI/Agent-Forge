
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DollarSign, Plus, Clock, CheckCircle, AlertCircle, Users } from 'lucide-react';

const Bounties = () => {
  const [bounties, setBounties] = useState([
    {
      id: 1,
      title: "Implement Smart Contract Audit Tool",
      description: "Build an automated smart contract auditing system with security vulnerability detection",
      amount: 5000,
      status: "open",
      difficulty: "hard",
      category: "blockchain",
      applicants: 12,
      deadline: "2024-07-15",
      tags: ["Solidity", "Security", "Web3"]
    },
    {
      id: 2,
      title: "Payment Gateway Integration",
      description: "Integrate multiple payment processors into the AgentForge platform",
      amount: 2500,
      status: "in-progress",
      difficulty: "medium",
      category: "backend",
      applicants: 8,
      deadline: "2024-06-30",
      tags: ["API", "Payments", "Node.js"]
    },
    {
      id: 3,
      title: "Mobile App UI/UX Redesign",
      description: "Complete redesign of the mobile application interface with modern design principles",
      amount: 3000,
      status: "completed",
      difficulty: "medium",
      category: "design",
      applicants: 15,
      deadline: "2024-06-01",
      tags: ["UI/UX", "Mobile", "Figma"]
    }
  ]);

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newBounty, setNewBounty] = useState({
    title: '',
    description: '',
    amount: 1000,
    difficulty: '',
    category: '',
    deadline: ''
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-emerald-500';
      case 'in-progress': return 'bg-blue-500';
      case 'completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'hard': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const handleCreateBounty = () => {
    const bounty = {
      id: Date.now(),
      ...newBounty,
      status: 'open',
      applicants: 0,
      tags: []
    };
    
    setBounties([...bounties, bounty]);
    setNewBounty({ title: '', description: '', amount: 1000, difficulty: '', category: '', deadline: '' });
    setIsCreateDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Bounty Management</h1>
            <p className="text-muted-foreground">Create and manage development bounties with automated funding</p>
          </div>
          
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 bg-gradient-to-r from-emerald-600 to-blue-600">
                <Plus className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                Create Bounty
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Bounty</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Bounty Title</Label>
                  <Input
                    id="title"
                    value={newBounty.title}
                    onChange={(e) => setNewBounty({...newBounty, title: e.target.value})}
                    placeholder="e.g., Build Payment Integration"
                  />
                </div>
                <div>
                  <Label htmlFor="amount">Reward Amount (USDC)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={newBounty.amount}
                    onChange={(e) => setNewBounty({...newBounty, amount: parseInt(e.target.value)})}
                  />
                </div>
                <div>
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <Select value={newBounty.difficulty} onValueChange={(value) => setNewBounty({...newBounty, difficulty: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={newBounty.category} onValueChange={(value) => setNewBounty({...newBounty, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frontend">Frontend</SelectItem>
                      <SelectItem value="backend">Backend</SelectItem>
                      <SelectItem value="blockchain">Blockchain</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={newBounty.deadline}
                    onChange={(e) => setNewBounty({...newBounty, deadline: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newBounty.description}
                    onChange={(e) => setNewBounty({...newBounty, description: e.target.value})}
                    placeholder="Describe the bounty requirements..."
                  />
                </div>
                <Button 
                  onClick={handleCreateBounty}
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600"
                  disabled={!newBounty.title || !newBounty.category}
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Create Bounty
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bounties.map((bounty) => (
            <Card key={bounty.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border hover:border-emerald-500/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge variant="outline" className={`${getStatusColor(bounty.status)} text-white border-0`}>
                      {bounty.status}
                    </Badge>
                    <Badge variant="outline" className={getDifficultyColor(bounty.difficulty)}>
                      {bounty.difficulty}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">${bounty.amount}</div>
                    <div className="text-xs text-muted-foreground">USDC</div>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">{bounty.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{bounty.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {bounty.tags?.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{bounty.applicants} applicants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{bounty.deadline}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full hover:bg-emerald-50">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-r from-emerald-600 to-blue-600 border-0 text-white">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">💰 Total Bounty Pool</h3>
                <p className="text-emerald-100 mb-4">Active bounties funding pool</p>
                <div className="text-3xl font-bold">$47,500 USDC</div>
                <p className="text-sm text-emerald-200">Across {bounties.length} bounties</p>
              </div>
              <div className="text-right">
                <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Fund Pool
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bounties;
