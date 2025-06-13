
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  FolderOpen, 
  CheckSquare, 
  Clock, 
  PlayCircle, 
  TestTube, 
  Check, 
  MessageSquare,
  TrendingUp,
  DollarSign,
  Star,
  Calendar,
  Users
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const statsData = [
  { name: 'Total Projects', value: 12, icon: FolderOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'Total Tasks', value: 87, icon: CheckSquare, color: 'text-green-600', bg: 'bg-green-50' },
  { name: 'Not Started', value: 8, icon: Clock, color: 'text-gray-600', bg: 'bg-gray-50' },
  { name: 'In Progress', value: 23, icon: PlayCircle, color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { name: 'Testing', value: 15, icon: TestTube, color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'Completed', value: 35, icon: Check, color: 'text-green-600', bg: 'bg-green-50' },
  { name: 'Awaiting Feedback', value: 6, icon: MessageSquare, color: 'text-orange-600', bg: 'bg-orange-50' },
  { name: 'Total Earnings', value: '$12,450', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50' },
];

const performanceData = [
  { month: 'Jan', tasks: 65, score: 4.2 },
  { month: 'Feb', tasks: 78, score: 4.5 },
  { month: 'Mar', tasks: 82, score: 4.3 },
  { month: 'Apr', tasks: 95, score: 4.7 },
  { month: 'May', tasks: 87, score: 4.6 },
  { month: 'Jun', tasks: 92, score: 4.8 },
];

const taskDistribution = [
  { name: 'Completed', value: 35, color: '#10B981' },
  { name: 'In Progress', value: 23, color: '#F59E0B' },
  { name: 'Testing', value: 15, color: '#8B5CF6' },
  { name: 'Not Started', value: 8, color: '#6B7280' },
  { name: 'Awaiting Feedback', value: 6, color: '#F97316' },
];

const recentTasks = [
  { id: 1, title: 'Website Redesign - Homepage', client: 'TechCorp', status: 'In Progress', priority: 'High', dueDate: '2024-06-15' },
  { id: 2, title: 'Social Media Campaign', client: 'FashionBrand', status: 'Testing', priority: 'Medium', dueDate: '2024-06-18' },
  { id: 3, title: 'SEO Optimization', client: 'LocalBiz', status: 'Completed', priority: 'Low', dueDate: '2024-06-12' },
  { id: 4, title: 'Content Strategy', client: 'StartupX', status: 'Awaiting Feedback', priority: 'High', dueDate: '2024-06-20' },
];

const kpiData = [
  { name: 'Task Completion Rate', value: 89, target: 85 },
  { name: 'Client Satisfaction', value: 94, target: 90 },
  { name: 'On-Time Delivery', value: 92, target: 95 },
  { name: 'Quality Score', value: 96, target: 90 },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
        <p className="text-blue-100">Here's your performance overview for today</p>
        <div className="mt-4 flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4" />
            <span className="text-sm">Average Score: 4.6/5</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bg}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Performance Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="tasks" stroke="#3B82F6" strokeWidth={3} />
                <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Task Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Task Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={taskDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {taskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* KPIs and Recent Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* KPIs */}
        <Card>
          <CardHeader>
            <CardTitle>Key Performance Indicators</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {kpiData.map((kpi, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{kpi.name}</span>
                  <span className="text-muted-foreground">{kpi.value}% / {kpi.target}%</span>
                </div>
                <Progress value={kpi.value} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Recently Assigned Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{task.title}</h4>
                    <p className="text-xs text-muted-foreground">{task.client}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={task.status === 'Completed' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {task.status}
                    </Badge>
                    <Badge 
                      variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {task.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
