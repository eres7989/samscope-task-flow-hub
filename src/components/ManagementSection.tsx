
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus, Eye, Edit, TrendingUp, Users, DollarSign, FileText, Calendar } from 'lucide-react';

const clients = [
  { id: 1, name: 'TechCorp Inc.', status: 'Active', campaigns: 5, leads: 23, revenue: '$45,000', lastActivity: '2024-06-12' },
  { id: 2, name: 'Fashion Brand Co.', status: 'Active', campaigns: 3, leads: 18, revenue: '$32,000', lastActivity: '2024-06-13' },
  { id: 3, name: 'Local Business', status: 'Paused', campaigns: 2, leads: 12, revenue: '$15,000', lastActivity: '2024-06-10' },
  { id: 4, name: 'StartupX', status: 'Active', campaigns: 4, leads: 31, revenue: '$28,000', lastActivity: '2024-06-13' },
];

const campaigns = [
  { id: 1, name: 'Summer Sale Campaign', client: 'Fashion Brand Co.', type: 'Social Media', status: 'Active', budget: '$5,000', spent: '$3,200', performance: 85 },
  { id: 2, name: 'Product Launch', client: 'TechCorp Inc.', type: 'Google Ads', status: 'Active', budget: '$8,000', spent: '$6,100', performance: 92 },
  { id: 3, name: 'Brand Awareness', client: 'Local Business', type: 'Facebook Ads', status: 'Paused', budget: '$3,000', spent: '$2,800', performance: 78 },
  { id: 4, name: 'Lead Generation', client: 'StartupX', type: 'LinkedIn Ads', status: 'Active', budget: '$4,500', spent: '$2,900', performance: 88 },
];

const advertisements = [
  { id: 1, title: 'Summer Collection Ad', client: 'Fashion Brand Co.', platform: 'Instagram', impressions: '125K', clicks: '3.2K', ctr: '2.56%', spend: '$1,200' },
  { id: 2, title: 'Tech Product Demo', client: 'TechCorp Inc.', platform: 'YouTube', impressions: '89K', clicks: '4.1K', ctr: '4.61%', spend: '$2,100' },
  { id: 3, title: 'Local Service Promo', client: 'Local Business', platform: 'Facebook', impressions: '67K', clicks: '1.8K', ctr: '2.69%', spend: '$890' },
];

export function ManagementSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState('all');

  const filteredData = (data: any[]) => {
    return data.filter(item => {
      const matchesSearch = item.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.client?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesClient = selectedClient === 'all' || item.client === selectedClient || item.name === selectedClient;
      return matchesSearch && matchesClient;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Client Management</h2>
          <p className="text-gray-600">Manage client content, advertisements, leads, and sales data</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search clients, campaigns, or ads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedClient} onValueChange={setSelectedClient}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Clients</SelectItem>
                {clients.map(client => (
                  <SelectItem key={client.id} value={client.name}>{client.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different sections */}
      <Tabs defaultValue="clients" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="advertisements">Advertisements</TabsTrigger>
          <TabsTrigger value="sales">Sales Data</TabsTrigger>
        </TabsList>

        {/* Clients Tab */}
        <TabsContent value="clients" className="space-y-4">
          <div className="grid gap-4">
            {filteredData(clients).map((client) => (
              <Card key={client.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold">{client.name}</h3>
                        <Badge variant={client.status === 'Active' ? 'default' : 'secondary'}>
                          {client.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                          <span>{client.campaigns} Campaigns</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-green-600" />
                          <span>{client.leads} Leads</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-yellow-600" />
                          <span>{client.revenue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-600" />
                          <span>{client.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Manage
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Campaigns Tab */}
        <TabsContent value="campaigns" className="space-y-4">
          <div className="grid gap-4">
            {filteredData(campaigns).map((campaign) => (
              <Card key={campaign.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold">{campaign.name}</h3>
                        <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                          {campaign.status}
                        </Badge>
                        <Badge variant="outline">{campaign.type}</Badge>
                      </div>
                      <p className="text-gray-600 mb-3">Client: {campaign.client}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Budget:</span>
                          <div className="font-medium">{campaign.budget}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Spent:</span>
                          <div className="font-medium">{campaign.spent}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Performance:</span>
                          <div className="font-medium">{campaign.performance}%</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${campaign.performance}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button size="sm">Edit Campaign</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Advertisements Tab */}
        <TabsContent value="advertisements" className="space-y-4">
          <div className="grid gap-4">
            {filteredData(advertisements).map((ad) => (
              <Card key={ad.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold">{ad.title}</h3>
                        <Badge variant="outline">{ad.platform}</Badge>
                      </div>
                      <p className="text-gray-600 mb-3">Client: {ad.client}</p>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Impressions:</span>
                          <div className="font-medium">{ad.impressions}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Clicks:</span>
                          <div className="font-medium">{ad.clicks}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">CTR:</span>
                          <div className="font-medium">{ad.ctr}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Spend:</span>
                          <div className="font-medium">{ad.spend}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Ad</Button>
                      <Button size="sm">Edit</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Sales Data Tab */}
        <TabsContent value="sales" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">$120K</div>
                <div className="text-sm text-gray-600">Total Revenue</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">84</div>
                <div className="text-sm text-gray-600">Total Leads</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">23</div>
                <div className="text-sm text-gray-600">Conversions</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">27%</div>
                <div className="text-sm text-gray-600">Conversion Rate</div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Sales Data Access Required</h3>
              <p className="text-gray-600">Detailed sales analytics will be available once client provides access permissions.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
