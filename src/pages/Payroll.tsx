
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Plus, Calendar, DollarSign, CheckCircle, Clock } from 'lucide-react';

const Payroll = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      role: "Senior Developer",
      salary: 8500,
      currency: "USDC",
      paymentFrequency: "monthly",
      lastPayment: "2024-05-01",
      status: "active",
      walletAddress: "0x742d...A4B9"
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "UI/UX Designer",
      salary: 6000,
      currency: "USDC",
      paymentFrequency: "monthly",
      lastPayment: "2024-05-01",
      status: "active",
      walletAddress: "0x8C3E...F2D1"
    },
    {
      id: 3,
      name: "Carol Williams",
      role: "Project Manager",
      salary: 7200,
      currency: "USDC",
      paymentFrequency: "monthly",
      lastPayment: "2024-05-01",
      status: "pending",
      walletAddress: "0x1F4A...C7E8"
    }
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    role: '',
    salary: 5000,
    paymentFrequency: 'monthly',
    walletAddress: ''
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-500';
      case 'pending': return 'bg-yellow-500';
      case 'inactive': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const handleAddEmployee = () => {
    const employee = {
      id: Date.now(),
      ...newEmployee,
      currency: 'USDC',
      lastPayment: new Date().toISOString().split('T')[0],
      status: 'active'
    };
    
    setEmployees([...employees, employee]);
    setNewEmployee({ name: '', role: '', salary: 5000, paymentFrequency: 'monthly', walletAddress: '' });
    setIsAddDialogOpen(false);
  };

  const processPayroll = () => {
    console.log('Processing payroll for all employees...');
    // This would trigger the AI agent to process payments
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Payroll Management</h1>
            <p className="text-muted-foreground">Automated payroll processing with smart contracts</p>
          </div>
          
          <div className="flex gap-3">
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="hover:bg-emerald-50">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Employee
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Employee</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={newEmployee.name}
                      onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
                      placeholder="e.g., John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      value={newEmployee.role}
                      onChange={(e) => setNewEmployee({...newEmployee, role: e.target.value})}
                      placeholder="e.g., Frontend Developer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="salary">Monthly Salary (USDC)</Label>
                    <Input
                      id="salary"
                      type="number"
                      value={newEmployee.salary}
                      onChange={(e) => setNewEmployee({...newEmployee, salary: parseInt(e.target.value)})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="frequency">Payment Frequency</Label>
                    <Select value={newEmployee.paymentFrequency} onValueChange={(value) => setNewEmployee({...newEmployee, paymentFrequency: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="wallet">Wallet Address</Label>
                    <Input
                      id="wallet"
                      value={newEmployee.walletAddress}
                      onChange={(e) => setNewEmployee({...newEmployee, walletAddress: e.target.value})}
                      placeholder="0x..."
                    />
                  </div>
                  <Button 
                    onClick={handleAddEmployee}
                    className="w-full bg-gradient-to-r from-emerald-600 to-blue-600"
                    disabled={!newEmployee.name || !newEmployee.role}
                  >
                    Add Employee
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button 
              onClick={processPayroll}
              className="group hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 bg-gradient-to-r from-emerald-600 to-blue-600"
            >
              <DollarSign className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Process Payroll
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {employees.map((employee) => (
            <Card key={employee.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border hover:border-emerald-500/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <Badge variant="outline" className={`${getStatusColor(employee.status)} text-white border-0`}>
                    {employee.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">{employee.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{employee.role}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Monthly Salary</span>
                    <span className="text-lg font-bold text-emerald-600">
                      ${employee.salary.toLocaleString()} {employee.currency}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-muted-foreground">Frequency</span>
                      <div className="font-semibold capitalize">{employee.paymentFrequency}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Last Payment</span>
                      <div className="font-semibold">{employee.lastPayment}</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  <span>Wallet: {employee.walletAddress}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-emerald-50">
                    <Calendar className="mr-1 h-3 w-3" />
                    Schedule
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-blue-50">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Pay Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Monthly Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                ${employees.reduce((sum, emp) => sum + emp.salary, 0).toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">Total monthly payroll</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Active Employees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {employees.filter(emp => emp.status === 'active').length}
              </div>
              <p className="text-sm text-muted-foreground">Currently employed</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">Next Payroll</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600 mb-2">Jun 1</div>
              <p className="text-sm text-muted-foreground">Scheduled payment date</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
