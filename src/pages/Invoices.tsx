
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Invoice, Plus, Calendar, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Invoices = () => {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      invoiceNumber: "INV-2024-001",
      clientName: "TechCorp Solutions",
      amount: 12500,
      currency: "USDC",
      status: "paid",
      dueDate: "2024-05-15",
      issueDate: "2024-04-15",
      description: "Q1 Development Services",
      items: [
        { description: "Frontend Development", amount: 7500 },
        { description: "Backend API Integration", amount: 5000 }
      ]
    },
    {
      id: 2,
      invoiceNumber: "INV-2024-002",
      clientName: "StartupXYZ",
      amount: 8000,
      currency: "USDC",
      status: "pending",
      dueDate: "2024-06-20",
      issueDate: "2024-05-20",
      description: "Mobile App Development",
      items: [
        { description: "UI/UX Design", amount: 3000 },
        { description: "Mobile Development", amount: 5000 }
      ]
    },
    {
      id: 3,
      invoiceNumber: "INV-2024-003",
      clientName: "Enterprise Ltd",
      amount: 15000,
      currency: "USDC",
      status: "overdue",
      dueDate: "2024-05-30",
      issueDate: "2024-04-30",
      description: "Smart Contract Audit",
      items: [
        { description: "Security Audit", amount: 10000 },
        { description: "Documentation", amount: 5000 }
      ]
    }
  ]);

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    clientName: '',
    amount: 5000,
    description: '',
    dueDate: ''
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-emerald-500';
      case 'pending': return 'bg-yellow-500';
      case 'overdue': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return CheckCircle;
      case 'pending': return Clock;
      case 'overdue': return AlertCircle;
      default: return Clock;
    }
  };

  const handleCreateInvoice = () => {
    const invoice = {
      id: Date.now(),
      invoiceNumber: `INV-2024-${String(invoices.length + 1).padStart(3, '0')}`,
      ...newInvoice,
      currency: 'USDC',
      status: 'pending',
      issueDate: new Date().toISOString().split('T')[0],
      items: [
        { description: newInvoice.description, amount: newInvoice.amount }
      ]
    };
    
    setInvoices([...invoices, invoice]);
    setNewInvoice({ clientName: '', amount: 5000, description: '', dueDate: '' });
    setIsCreateDialogOpen(false);
  };

  const triggerPayment = (invoiceId: number) => {
    setInvoices(invoices.map(inv => 
      inv.id === invoiceId ? { ...inv, status: 'paid' } : inv
    ));
    console.log(`Triggering automated payment for invoice ${invoiceId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Invoice Management</h1>
            <p className="text-muted-foreground">Automated invoice processing and payment triggers</p>
          </div>
          
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 bg-gradient-to-r from-emerald-600 to-blue-600">
                <Plus className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                Create Invoice
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Invoice</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="client">Client Name</Label>
                  <Input
                    id="client"
                    value={newInvoice.clientName}
                    onChange={(e) => setNewInvoice({...newInvoice, clientName: e.target.value})}
                    placeholder="e.g., Acme Corporation"
                  />
                </div>
                <div>
                  <Label htmlFor="amount">Amount (USDC)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={newInvoice.amount}
                    onChange={(e) => setNewInvoice({...newInvoice, amount: parseInt(e.target.value)})}
                  />
                </div>
                <div>
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={newInvoice.dueDate}
                    onChange={(e) => setNewInvoice({...newInvoice, dueDate: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newInvoice.description}
                    onChange={(e) => setNewInvoice({...newInvoice, description: e.target.value})}
                    placeholder="Describe the services or products..."
                  />
                </div>
                <Button 
                  onClick={handleCreateInvoice}
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600"
                  disabled={!newInvoice.clientName || !newInvoice.description}
                >
                  <Invoice className="mr-2 h-4 w-4" />
                  Create Invoice
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {invoices.map((invoice) => {
            const StatusIcon = getStatusIcon(invoice.status);
            return (
              <Card key={invoice.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border hover:border-emerald-500/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Invoice className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline" className={`${getStatusColor(invoice.status)} text-white border-0`}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {invoice.status}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">{invoice.invoiceNumber}</CardTitle>
                  <p className="text-sm text-muted-foreground">{invoice.clientName}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Total Amount</span>
                      <span className="text-lg font-bold text-emerald-600">
                        ${invoice.amount.toLocaleString()} {invoice.currency}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-muted-foreground">Issue Date</span>
                        <div className="font-semibold">{invoice.issueDate}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Due Date</span>
                        <div className="font-semibold">{invoice.dueDate}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Description:</p>
                    <p className="text-xs text-muted-foreground">{invoice.description}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-blue-50">
                      <Calendar className="mr-1 h-3 w-3" />
                      View
                    </Button>
                    {invoice.status !== 'paid' && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-emerald-50"
                        onClick={() => triggerPayment(invoice.id)}
                      >
                        <DollarSign className="mr-1 h-3 w-3" />
                        Pay
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Total Outstanding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600 mb-2">
                ${invoices.filter(inv => inv.status !== 'paid').reduce((sum, inv) => sum + inv.amount, 0).toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">Unpaid invoices</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Paid This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                ${invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0).toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">Successfully collected</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {invoices.filter(inv => inv.status === 'pending').length}
              </div>
              <p className="text-sm text-muted-foreground">Awaiting payment</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Overdue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600 mb-2">
                {invoices.filter(inv => inv.status === 'overdue').length}
              </div>
              <p className="text-sm text-muted-foreground">Past due date</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
