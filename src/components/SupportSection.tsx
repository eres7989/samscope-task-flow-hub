
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus, MessageSquare, Clock, CheckCircle, AlertCircle, HelpCircle, FileText, Phone } from 'lucide-react';

const tickets = [
  { 
    id: 'SUP-001', 
    title: 'Unable to access client analytics dashboard', 
    category: 'Technical', 
    priority: 'High', 
    status: 'In Progress', 
    created: '2024-06-12', 
    updated: '2024-06-13',
    description: 'Getting error 403 when trying to access TechCorp analytics. Need immediate assistance.',
    assignedTo: 'Support Team A'
  },
  { 
    id: 'SUP-002', 
    title: 'Request for additional project access', 
    category: 'Access', 
    priority: 'Medium', 
    status: 'Pending', 
    created: '2024-06-11', 
    updated: '2024-06-11',
    description: 'Need access to Fashion Brand Co. new campaign project for task management.',
    assignedTo: 'Support Team B'
  },
  { 
    id: 'SUP-003', 
    title: 'Payroll discrepancy inquiry', 
    category: 'Billing', 
    priority: 'High', 
    status: 'Resolved', 
    created: '2024-06-09', 
    updated: '2024-06-10',
    description: 'Payment amount doesn\'t match expected calculation for May work.',
    assignedTo: 'Finance Team'
  },
  { 
    id: 'SUP-004', 
    title: 'Feature request: Email notifications', 
    category: 'Feature', 
    priority: 'Low', 
    status: 'Under Review', 
    created: '2024-06-08', 
    updated: '2024-06-12',
    description: 'Would like to receive email notifications for task assignments and deadlines.',
    assignedTo: 'Product Team'
  },
];

const faqs = [
  {
    category: 'Account',
    questions: [
      { q: 'How do I update my profile information?', a: 'Go to Settings > Profile and update your details. Changes are saved automatically.' },
      { q: 'How do I reset my password?', a: 'Click on "Forgot Password" on the login page and follow the email instructions.' },
      { q: 'How do I change my notification preferences?', a: 'Navigate to Settings > Notifications to customize your preferences.' }
    ]
  },
  {
    category: 'Projects',
    questions: [
      { q: 'How do I request access to a new project?', a: 'Submit a support ticket with category "Access" and specify the project details.' },
      { q: 'Where can I view project deadlines?', a: 'Check the Projects section or use the Calendar feature in your dashboard.' },
      { q: 'How do I update task status?', a: 'Go to Tasks section, select the task, and update the status from the dropdown menu.' }
    ]
  },
  {
    category: 'Billing',
    questions: [
      { q: 'When are payments processed?', a: 'Payments are processed bi-weekly on Fridays. Check Payroll section for details.' },
      { q: 'How do I view my earning history?', a: 'Navigate to Payroll > Transaction History to view all past payments.' },
      { q: 'What if I notice a payroll discrepancy?', a: 'Submit a support ticket with category "Billing" and include relevant details.' }
    ]
  }
];

export function SupportSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isNewTicketOpen, setIsNewTicketOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Under Review': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Resolved': return CheckCircle;
      case 'In Progress': return Clock;
      case 'Pending': return AlertCircle;
      case 'Under Review': return HelpCircle;
      default: return MessageSquare;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Support Center</h2>
          <p className="text-gray-600">Submit and track support tickets through our integrated system</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Phone className="h-4 w-4 mr-2" />
            Emergency Call
          </Button>
          <Dialog open={isNewTicketOpen} onOpenChange={setIsNewTicketOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                New Ticket
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create Support Ticket</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ticketTitle">Title</Label>
                  <Input id="ticketTitle" placeholder="Brief description of the issue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="access">Access Request</SelectItem>
                      <SelectItem value="billing">Billing Inquiry</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Detailed description of your issue or request..."
                    className="h-24"
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => setIsNewTicketOpen(false)} variant="outline" className="flex-1">
                    Cancel
                  </Button>
                  <Button onClick={() => setIsNewTicketOpen(false)} className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Submit Ticket
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Support Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{tickets.length}</div>
            <div className="text-sm text-gray-600">Total Tickets</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">{tickets.filter(t => t.status === 'In Progress' || t.status === 'Pending').length}</div>
            <div className="text-sm text-gray-600">Open Tickets</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{tickets.filter(t => t.status === 'Resolved').length}</div>
            <div className="text-sm text-gray-600">Resolved</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">24h</div>
            <div className="text-sm text-gray-600">Avg Response</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tickets" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="contact">Contact Info</TabsTrigger>
        </TabsList>

        {/* Tickets Tab */}
        <TabsContent value="tickets" className="space-y-4">
          {/* Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search tickets..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Under Review">Under Review</SelectItem>
                    <SelectItem value="Resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Tickets List */}
          <div className="grid gap-4">
            {filteredTickets.map((ticket) => {
              const StatusIcon = getStatusIcon(ticket.status);
              return (
                <Card key={ticket.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <StatusIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{ticket.title}</h3>
                            <Badge variant="outline">{ticket.id}</Badge>
                          </div>
                          <div className="flex items-center gap-3 mb-3">
                            <Badge className={getStatusColor(ticket.status)}>
                              {ticket.status}
                            </Badge>
                            <Badge className={getPriorityColor(ticket.priority)}>
                              {ticket.priority}
                            </Badge>
                            <Badge variant="outline">{ticket.category}</Badge>
                          </div>
                          <p className="text-gray-700 mb-3">{ticket.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                            <div>
                              <span className="font-medium">Created:</span> {ticket.created}
                            </div>
                            <div>
                              <span className="font-medium">Updated:</span> {ticket.updated}
                            </div>
                            <div>
                              <span className="font-medium">Assigned to:</span> {ticket.assignedTo}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Add Comment
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* FAQ Tab */}
        <TabsContent value="faq" className="space-y-4">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const faqId = `${categoryIndex}-${faqIndex}`;
                  return (
                    <div key={faqIndex} className="border rounded-lg">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === faqId ? null : faqId)}
                        className="w-full text-left p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-gray-900">{faq.q}</h4>
                          <span className="text-gray-400">
                            {expandedFaq === faqId ? '−' : '+'}
                          </span>
                        </div>
                      </button>
                      {expandedFaq === faqId && (
                        <div className="px-4 pb-4">
                          <p className="text-gray-700">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Emergency Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">24/7 Emergency Line</h4>
                  <p className="text-blue-600 font-medium">+1 (800) SAMSCOPE</p>
                  <p className="text-sm text-gray-600">For critical system issues and urgent support needs</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Business Hours Support</h4>
                  <p className="text-blue-600 font-medium">+1 (555) 123-HELP</p>
                  <p className="text-sm text-gray-600">Monday - Friday, 9AM - 6PM EST</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">General Support</h4>
                  <p className="text-blue-600 font-medium">support@samscope.com</p>
                  <p className="text-sm text-gray-600">Response within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Technical Issues</h4>
                  <p className="text-blue-600 font-medium">tech@samscope.com</p>
                  <p className="text-sm text-gray-600">Response within 4 hours</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Billing Inquiries</h4>
                  <p className="text-blue-600 font-medium">billing@samscope.com</p>
                  <p className="text-sm text-gray-600">Response within 24 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
