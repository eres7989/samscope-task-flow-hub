
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Search, Plus, Phone, Mail, Calendar, DollarSign, TrendingUp, Users, Target } from 'lucide-react';

const leads = [
  { 
    id: 1, 
    name: 'Alice Johnson', 
    company: 'Tech Solutions Inc.', 
    email: 'alice@techsolutions.com', 
    phone: '+1 (555) 123-4567', 
    status: 'Hot', 
    value: '$25,000', 
    source: 'Website', 
    assignedTo: 'John Doe',
    lastContact: '2024-06-12',
    notes: 'Interested in our premium package. Follow up on Friday.'
  },
  { 
    id: 2, 
    name: 'Robert Chen', 
    company: 'Digital Marketing Co.', 
    email: 'robert@digitalmarketing.com', 
    phone: '+1 (555) 987-6543', 
    status: 'Warm', 
    value: '$15,000', 
    source: 'LinkedIn', 
    assignedTo: 'Sarah Wilson',
    lastContact: '2024-06-11',
    notes: 'Requested demo for next week. Sent pricing information.'
  },
  { 
    id: 3, 
    name: 'Maria Garcia', 
    company: 'E-commerce Plus', 
    email: 'maria@ecommerceplus.com', 
    phone: '+1 (555) 456-7890', 
    status: 'Cold', 
    value: '$8,000', 
    source: 'Referral', 
    assignedTo: 'Mike Johnson',
    lastContact: '2024-06-09',
    notes: 'Initial contact made. Waiting for budget approval.'
  },
  { 
    id: 4, 
    name: 'David Williams', 
    company: 'Startup Innovations', 
    email: 'david@startupinnovations.com', 
    phone: '+1 (555) 321-0987', 
    status: 'Hot', 
    value: '$35,000', 
    source: 'Google Ads', 
    assignedTo: 'Lisa Davis',
    lastContact: '2024-06-13',
    notes: 'Very interested. Scheduled proposal presentation for Monday.'
  },
];

export function LeadsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot': return 'bg-red-100 text-red-800';
      case 'Warm': return 'bg-yellow-100 text-yellow-800';
      case 'Cold': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalLeadValue = leads.reduce((sum, lead) => {
    return sum + parseInt(lead.value.replace(/[$,]/g, ''));
  }, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Lead Management</h2>
          <p className="text-gray-600">Track and manage sales leads through Samscope's system</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Lead
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Lead</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="leadName">Lead Name</Label>
                <Input id="leadName" placeholder="Enter lead name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Enter company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="value">Estimated Value</Label>
                <Input id="value" placeholder="e.g., $10,000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="source">Source</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select lead source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="google-ads">Google Ads</SelectItem>
                    <SelectItem value="social-media">Social Media</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Add any additional notes..." />
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setIsAddDialogOpen(false)} variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button onClick={() => setIsAddDialogOpen(false)} className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Add Lead
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-600">{leads.length}</div>
            <div className="text-sm text-gray-600">Total Leads</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="h-8 w-8 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-red-600">{leads.filter(l => l.status === 'Hot').length}</div>
            <div className="text-sm text-gray-600">Hot Leads</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-600">${totalLeadValue.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Pipeline Value</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-600">23%</div>
            <div className="text-sm text-gray-600">Conversion Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search leads..."
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
                <SelectItem value="Hot">Hot</SelectItem>
                <SelectItem value="Warm">Warm</SelectItem>
                <SelectItem value="Cold">Cold</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Leads List */}
      <div className="grid gap-4">
        {filteredLeads.map((lead) => (
          <Card key={lead.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{lead.name}</h3>
                      <p className="text-gray-600">{lead.company}</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                      <Badge variant="outline">{lead.value}</Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="truncate">{lead.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-green-600" />
                      <span>{lead.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      <span>Last: {lead.lastContact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-orange-600" />
                      <span>Source: {lead.source}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 mb-1"><strong>Assigned to:</strong> {lead.assignedTo}</p>
                    <p className="text-sm text-gray-700"><strong>Notes:</strong> {lead.notes}</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 lg:w-40">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </Button>
                  <Button size="sm" variant="outline">
                    Edit Lead
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredLeads.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No leads found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or add a new lead.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
