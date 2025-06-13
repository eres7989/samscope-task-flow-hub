
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Eye, Users, MousePointer, DollarSign, BarChart3, PieChart } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const websiteTraffic = [
  { month: 'Jan', visitors: 12400, pageViews: 45600, conversions: 340 },
  { month: 'Feb', visitors: 15200, pageViews: 52800, conversions: 420 },
  { month: 'Mar', visitors: 18900, pageViews: 61200, conversions: 510 },
  { month: 'Apr', visitors: 22100, pageViews: 71500, conversions: 630 },
  { month: 'May', visitors: 26800, pageViews: 84200, conversions: 750 },
  { month: 'Jun', visitors: 31200, pageViews: 96800, conversions: 890 },
];

const socialMediaData = [
  { platform: 'Facebook', followers: 45200, engagement: 4.2, reach: 125000 },
  { platform: 'Instagram', followers: 38900, engagement: 6.8, reach: 89000 },
  { platform: 'Twitter', followers: 22100, engagement: 3.1, reach: 56000 },
  { platform: 'LinkedIn', followers: 15600, engagement: 5.4, reach: 42000 },
  { platform: 'YouTube', followers: 12400, engagement: 7.2, reach: 78000 },
];

const campaignPerformance = [
  { name: 'Spring Sale', impressions: 125000, clicks: 3400, conversions: 240, roi: 320 },
  { name: 'Summer Launch', impressions: 89000, clicks: 2800, conversions: 180, roi: 280 },
  { name: 'Brand Awareness', impressions: 156000, clicks: 4200, conversions: 190, roi: 190 },
  { name: 'Holiday Special', impressions: 78000, clicks: 2100, conversions: 160, roi: 410 },
];

const trafficSources = [
  { name: 'Organic Search', value: 45, color: '#3B82F6' },
  { name: 'Direct', value: 25, color: '#10B981' },
  { name: 'Social Media', value: 15, color: '#F59E0B' },
  { name: 'Paid Search', value: 10, color: '#EF4444' },
  { name: 'Email', value: 5, color: '#8B5CF6' },
];

export function AnalyticsSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
          <p className="text-gray-600">Monitor performance across all client campaigns</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Visitors</p>
                <p className="text-2xl font-bold">126.5K</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+12.5%</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-blue-50">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Page Views</p>
                <p className="text-2xl font-bold">412.1K</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+8.2%</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-green-50">
                <MousePointer className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Conversions</p>
                <p className="text-2xl font-bold">2,847</p>
                <div className="flex items-center mt-1">
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-sm text-red-500">-2.1%</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-purple-50">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">$89.4K</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+15.3%</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-yellow-50">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Website Traffic Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Website Traffic Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={websiteTraffic}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="visitors" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="pageViews" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={trafficSources}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {trafficSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Social Media Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Social Media Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {socialMediaData.map((platform) => (
              <div key={platform.platform} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">{platform.platform}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Followers:</span>
                    <span className="font-medium">{platform.followers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Engagement:</span>
                    <span className="font-medium">{platform.engagement}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reach:</span>
                    <span className="font-medium">{platform.reach.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Campaign Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaignPerformance.map((campaign, index) => (
              <div key={index} className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 bg-gray-50 rounded-lg gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold">{campaign.name}</h4>
                  <div className="flex gap-6 mt-2 text-sm text-gray-600">
                    <span>Impressions: {campaign.impressions.toLocaleString()}</span>
                    <span>Clicks: {campaign.clicks.toLocaleString()}</span>
                    <span>Conversions: {campaign.conversions}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={campaign.roi > 300 ? 'default' : 'secondary'}>
                    ROI: {campaign.roi}%
                  </Badge>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
