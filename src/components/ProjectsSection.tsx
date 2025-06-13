
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Users, DollarSign, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'E-commerce Platform Redesign',
    client: 'TechCorp Inc.',
    status: 'In Progress',
    progress: 75,
    budget: '$45,000',
    startDate: '2024-03-01',
    endDate: '2024-06-30',
    team: ['JD', 'SM', 'MJ'],
    tasksCompleted: 15,
    totalTasks: 20,
    description: 'Complete redesign of the e-commerce platform with modern UI/UX'
  },
  {
    id: 2,
    name: 'Digital Marketing Campaign',
    client: 'Fashion Brand Co.',
    status: 'Testing',
    progress: 90,
    budget: '$25,000',
    startDate: '2024-04-15',
    endDate: '2024-07-15',
    team: ['SW', 'TB', 'LD'],
    tasksCompleted: 18,
    totalTasks: 20,
    description: 'Comprehensive digital marketing strategy and implementation'
  },
  {
    id: 3,
    name: 'SEO Optimization Suite',
    client: 'Local Business',
    status: 'Completed',
    progress: 100,
    budget: '$15,000',
    startDate: '2024-02-01',
    endDate: '2024-05-01',
    team: ['JD', 'MJ'],
    tasksCompleted: 12,
    totalTasks: 12,
    description: 'Complete SEO audit and optimization for improved search rankings'
  },
  {
    id: 4,
    name: 'Mobile App Development',
    client: 'StartupX',
    status: 'Planning',
    progress: 25,
    budget: '$60,000',
    startDate: '2024-06-01',
    endDate: '2024-12-01',
    team: ['SW', 'TB', 'LD', 'JD'],
    tasksCompleted: 3,
    totalTasks: 12,
    description: 'Native mobile application development for iOS and Android'
  }
];

export function ProjectsSection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Testing': return 'bg-purple-100 text-purple-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Projects Overview</h2>
          <p className="text-gray-600">Manage and track all your assigned projects</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <TrendingUp className="h-4 w-4 mr-2" />
          View Analytics
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-1">{project.name}</CardTitle>
                  <p className="text-sm text-gray-600">{project.client}</p>
                </div>
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-700">{project.description}</p>
              
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Progress</span>
                  <span className="text-gray-600">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project.progress)}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span className="font-medium">{project.budget}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span>{project.tasksCompleted}/{project.totalTasks} Tasks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-600" />
                  <span>{project.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-600" />
                  <span>{project.endDate}</span>
                </div>
              </div>

              {/* Team */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium">Team:</span>
                  <div className="flex -space-x-2">
                    {project.team.map((member, index) => (
                      <Avatar key={index} className="w-6 h-6 border-2 border-white">
                        <AvatarFallback className="text-xs">{member}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-600">Active Projects</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">1</div>
            <div className="text-sm text-gray-600">Completed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">72%</div>
            <div className="text-sm text-gray-600">Avg Progress</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">$145K</div>
            <div className="text-sm text-gray-600">Total Budget</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
