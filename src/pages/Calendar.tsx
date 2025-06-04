
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Clock, Bot, DollarSign, Plus } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { useState } from 'react';

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = [
    {
      id: 1,
      title: "Affiliate Payout Processing",
      time: "09:00 AM",
      type: "automated",
      agent: "Payment Agent",
      status: "scheduled"
    },
    {
      id: 2,
      title: "Inventory Restock Check",
      time: "02:00 PM",
      type: "automated",
      agent: "Inventory Agent",
      status: "completed"
    },
    {
      id: 3,
      title: "Customer Support Review",
      time: "04:30 PM",
      type: "manual",
      agent: "Shopping Assistant",
      status: "in-progress"
    },
    {
      id: 4,
      title: "Bounty Distribution",
      time: "06:00 PM",
      type: "automated",
      agent: "Bounty Agent",
      status: "scheduled"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'scheduled': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'automated' ? Bot : CalendarIcon;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Agent Calendar</h1>
            <p className="text-muted-foreground">Schedule and monitor your AI agent activities</p>
          </div>
          <Button className="group hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            <Plus className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
            Schedule Task
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Select Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border-0"
                />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => {
                    const TypeIcon = getTypeIcon(event.type);
                    return (
                      <div key={event.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors group cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${event.type === 'automated' ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-purple-100 dark:bg-purple-900/30'}`}>
                            <TypeIcon className={`h-5 w-5 ${event.type === 'automated' ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'}`} />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-blue-600 transition-colors">{event.title}</h4>
                            <p className="text-sm text-muted-foreground">{event.agent} • {event.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={`${getStatusColor(event.status)} text-white border-0`}>
                            {event.status}
                          </Badge>
                          <Badge variant="outline">
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                  <p className="text-sm text-muted-foreground">Scheduled for this week</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">Automated Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                  <p className="text-sm text-muted-foreground">Running autonomously</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
