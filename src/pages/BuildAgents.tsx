
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bot, DollarSign, Users, Package, ShoppingCart, Zap, Plus, Edit3, Play, Pause, Settings, Trash2 } from 'lucide-react';

const BuildAgents = () => {
  const [agents, setAgents] = useState([
    {
      id: 1,
      name: "Bounty Fund Manager",
      description: "Automatically funds development bounties and processes milestone payments",
      type: "bounty_funding",
      status: "active",
      wallet: { balance: 15420, currency: "USDC" },
      volume: "$12,340",
      transactions: 89,
      icon: DollarSign,
      color: "emerald"
    },
    {
      id: 2,
      name: "Smart Payroll Agent",
      description: "Handles automated payroll distribution with tax calculations",
      type: "payroll",
      status: "active", 
      wallet: { balance: 8950, currency: "USDC" },
      volume: "$45,200",
      transactions: 156,
      icon: Users,
      color: "blue"
    },
    {
      id: 3,
      name: "Invoice Payment Bot",
      description: "Triggers automatic invoice payments based on approval workflows",
      type: "invoice_payment",
      status: "paused",
      wallet: { balance: 2100, currency: "USDC" },
      volume: "$8,900",
      transactions: 34,
      icon: Package,
      color: "purple"
    },
    {
      id: 4,
      name: "Refund Processor",
      description: "Automatically processes refunds for failed tasks and cancelled orders",
      type: "refund_processing",
      status: "active",
      wallet: { balance: 5670, currency: "USDC" },
      volume: "$3,200",
      transactions: 67,
      icon: ShoppingCart,
      color: "orange"
    },
    {
      id: 5,
      name: "Profit Splitter",
      description: "Distributes profits among contributors based on contribution metrics",
      type: "profit_splitting",
      status: "active",
      wallet: { balance: 22100, currency: "USDC" },
      volume: "$18,750",
      transactions: 245,
      icon: Bot,
      color: "pink"
    }
  ]);

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingAgent, setEditingAgent] = useState(null);
  const [newAgent, setNewAgent] = useState({
    name: '',
    description: '',
    type: '',
    initialBalance: 1000
  });

  const agentTypes = [
    { value: 'bounty_funding', label: 'Bounty Funding', icon: DollarSign },
    { value: 'payroll', label: 'Payroll Management', icon: Users },
    { value: 'invoice_payment', label: 'Invoice Payment', icon: Package },
    { value: 'refund_processing', label: 'Refund Processing', icon: ShoppingCart },
    { value: 'profit_splitting', label: 'Profit Splitting', icon: Bot }
  ];

  const handleCreateAgent = () => {
    const agent = {
      id: Date.now(),
      name: newAgent.name,
      description: newAgent.description,
      type: newAgent.type,
      status: 'active',
      wallet: { balance: newAgent.initialBalance, currency: 'USDC' },
      volume: '$0',
      transactions: 0,
      icon: agentTypes.find(t => t.value === newAgent.type)?.icon || Bot,
      color: 'emerald'
    };
    
    setAgents([...agents, agent]);
    setNewAgent({ name: '', description: '', type: '', initialBalance: 1000 });
    setIsCreateDialogOpen(false);
  };

  const handleEditAgent = (agent) => {
    setEditingAgent(agent);
    setNewAgent({
      name: agent.name,
      description: agent.description,
      type: agent.type,
      initialBalance: agent.wallet.balance
    });
    setIsCreateDialogOpen(true);
  };

  const handleUpdateAgent = () => {
    setAgents(agents.map(agent => 
      agent.id === editingAgent.id 
        ? { ...agent, name: newAgent.name, description: newAgent.description, type: newAgent.type }
        : agent
    ));
    setEditingAgent(null);
    setNewAgent({ name: '', description: '', type: '', initialBalance: 1000 });
    setIsCreateDialogOpen(false);
  };

  const handleDeleteAgent = (id) => {
    setAgents(agents.filter(agent => agent.id !== id));
  };

  const toggleAgentStatus = (id) => {
    setAgents(agents.map(agent =>
      agent.id === id 
        ? { ...agent, status: agent.status === 'active' ? 'paused' : 'active' }
        : agent
    ));
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-emerald-500' : 'bg-yellow-500';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">AI Agent Forge</h1>
            <p className="text-muted-foreground">Deploy and manage autonomous commerce agents</p>
          </div>
          
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 bg-gradient-to-r from-emerald-600 to-blue-600">
                <Plus className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                Deploy New Agent
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>{editingAgent ? 'Edit Agent' : 'Deploy New Agent'}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Agent Name</Label>
                  <Input
                    id="name"
                    value={newAgent.name}
                    onChange={(e) => setNewAgent({...newAgent, name: e.target.value})}
                    placeholder="e.g., Smart Bounty Manager"
                  />
                </div>
                <div>
                  <Label htmlFor="type">Agent Type</Label>
                  <Select value={newAgent.type} onValueChange={(value) => setNewAgent({...newAgent, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select agent type" />
                    </SelectTrigger>
                    <SelectContent>
                      {agentTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <type.icon className="h-4 w-4" />
                            {type.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newAgent.description}
                    onChange={(e) => setNewAgent({...newAgent, description: e.target.value})}
                    placeholder="Describe what this agent will do..."
                  />
                </div>
                {!editingAgent && (
                  <div>
                    <Label htmlFor="balance">Initial Wallet Balance (USDC)</Label>
                    <Input
                      id="balance"
                      type="number"
                      value={newAgent.initialBalance}
                      onChange={(e) => setNewAgent({...newAgent, initialBalance: parseInt(e.target.value)})}
                    />
                  </div>
                )}
                <Button 
                  onClick={editingAgent ? handleUpdateAgent : handleCreateAgent}
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600"
                  disabled={!newAgent.name || !newAgent.type}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  {editingAgent ? 'Update Agent' : 'Deploy Agent'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Card key={agent.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border hover:border-emerald-500/50 hover:shadow-emerald-500/20 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${agent.color}-400 to-${agent.color}-600`}></div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 bg-${agent.color}-100 dark:bg-${agent.color}-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <agent.icon className={`h-6 w-6 text-${agent.color}-600 dark:text-${agent.color}-400`} />
                  </div>
                  <div className="flex gap-1">
                    <Badge variant="outline" className={`${getStatusColor(agent.status)} text-white border-0`}>
                      {agent.status}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">{agent.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{agent.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Wallet Balance</span>
                    <span className="text-lg font-bold text-emerald-600">
                      ${agent.wallet.balance.toLocaleString()} {agent.wallet.currency}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-muted-foreground">Volume</span>
                      <div className="font-semibold">{agent.volume}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Transactions</span>
                      <div className="font-semibold">{agent.transactions}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn hover:bg-emerald-50 hover:border-emerald-300"
                    onClick={() => toggleAgentStatus(agent.id)}
                  >
                    {agent.status === 'active' ? (
                      <Pause className="mr-1 h-3 w-3 group-hover/btn:scale-110 transition-transform" />
                    ) : (
                      <Play className="mr-1 h-3 w-3 group-hover/btn:scale-110 transition-transform" />
                    )}
                    {agent.status === 'active' ? 'Pause' : 'Start'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleEditAgent(agent)}
                  >
                    <Edit3 className="h-3 w-3" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDeleteAgent(agent.id)}
                    className="hover:bg-red-50 hover:border-red-300"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AgentForge Wallet Section */}
        <Card className="mt-12 bg-gradient-to-r from-emerald-600 to-blue-600 border-0 text-white">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">🚀 AgentForge Wallet</h3>
                <p className="text-emerald-100 mb-4">Your autonomous commerce wallet</p>
                <div className="text-3xl font-bold">$54,240 USDC</div>
                <p className="text-sm text-emerald-200">Total across all agents</p>
              </div>
              <div className="text-right">
                <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Manage Wallet
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuildAgents;
