
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Download, Eye, FileText, TrendingUp, BarChart3, PieChart, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const reports = [
  { 
    id: 1, 
    title: 'Monthly Performance Report - TechCorp', 
    client: 'TechCorp Inc.', 
    type: 'Performance', 
    date: '2024-06-01', 
    status: 'Available',
    description: 'Comprehensive analysis of campaign performance and ROI metrics'
  },
  { 
    id: 2, 
    title: 'Social Media Analytics - Fashion Brand', 
    client: 'Fashion Brand Co.', 
    type: 'Analytics', 
    date: '2024-05-28', 
    status: 'Available',
    description: 'Social media engagement, reach, and conversion analysis'
  },
  { 
    id: 3, 
    title: 'SEO Performance Report - Local Business', 
    client: 'Local Business', 
    type: 'SEO', 
    date: '2024-05-25', 
    status: 'Pending',
    description: 'Search engine optimization results and keyword rankings'
  },
  { 
    id: 4, 
    title: 'Lead Generation Report - StartupX', 
    client: 'StartupX', 
    type: 'Lead Gen', 
    date: '2024-05-20', 
    status: 'Available',
    description: 'Lead quality analysis and conversion funnel performance'
  },
];

const monthlyData = [
  { month: 'Jan', revenue: 45000, leads: 120, conversions: 25 },
  { month: 'Feb', revenue: 52000, leads: 145, conversions: 32 },
  { month: 'Mar', revenue: 48000, leads: 135, conversions: 28 },
  { month: 'Apr', revenue: 61000, leads: 168, conversions: 38 },
  { month: 'May', revenue: 58000, leads: 155, conversions: 35 },
  { month: 'Jun', revenue: 67000, leads: 182, conversions: 42 },
];

const clientPerformance = [
  { client: 'TechCorp', revenue: 85000, satisfaction: 95 },
  { client: 'Fashion Brand', revenue: 62000, satisfaction: 88 },
  { client: 'Local Business', revenue: 34000, satisfaction: 92 },
  { client: 'StartupX', revenue: 48000, satisfaction: 87 },
];

export function ReportsSection() {
  const [selectedClient, setSelectedClient] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('last-6-months');

  const filteredReports = reports.filter(report => 
    selectedClient === 'all' || report.client === selectedClient
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getReportIcon = (type: string) => {
    switch (type) {
      case 'Performance': return TrendingUp;
      case 'Analytics': return BarChart3;
      case 'SEO': return FileText;
      case 'Lead Gen': return Users;
      default: return FileText;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Client Reports</h2>
          <p className="text-gray-600">Access detailed client reports and analytics when permissions are granted</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Report
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedClient} onValueChange={setSelectedClient}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Clients</SelectItem>
                <SelectItem value="TechCorp Inc.">TechCorp Inc.</SelectItem>
                <SelectItem value="Fashion Brand Co.">Fashion Brand Co.</SelectItem>
                <SelectItem value="Local Business">Local Business</SelectItem>
                <SelectItem value="StartupX">StartupX</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="reports" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="reports">Available Reports</TabsTrigger>
          <TabsTrigger value="analytics">Analytics Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
        </TabsList>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4">
            {filteredReports.map((report) => {
              const IconComponent = getReportIcon(report.type);
              return (
                <Card key={report.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                            <Badge className={getStatusColor(report.status)}>
                              {report.status}
                            </Badge>
                            <Badge variant="outline">{report.type}</Badge>
                          </div>
                          <p className="text-gray-600 mb-2">Client: {report.client}</p>
                          <p className="text-sm text-gray-700 mb-3">{report.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>Generated: {report.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {report.status === 'Available' ? (
                          <>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </>
                        ) : (
                          <Button variant="outline" size="sm" disabled>
                            Processing...
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Analytics Overview Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">$229K</div>
                <div className="text-sm text-gray-600">Total Revenue</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">905</div>
                <div className="text-sm text-gray-600">Total Leads</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">200</div>
                <div className="text-sm text-gray-600">Conversions</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} />
                  <Line type="monotone" dataKey="leads" stroke="#10B981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Performance Metrics Tab */}
        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Client Revenue Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={clientPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="client" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Client Satisfaction Scores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {clientPerformance.map((client, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{client.client}</span>
                      <span className="text-gray-600">{client.satisfaction}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${client.satisfaction}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6 text-center">
              <PieChart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Detailed Analytics Available</h3>
              <p className="text-gray-600">Advanced performance metrics and detailed analytics will be displayed when client grants access permissions.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
