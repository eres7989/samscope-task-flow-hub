
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { DashboardOverview } from '@/components/DashboardOverview';
import { TasksSection } from '@/components/TasksSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AnalyticsSection } from '@/components/AnalyticsSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'tasks':
        return <TasksSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'management':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Management</h2>
            <p className="text-gray-600">Manage client content, advertisements, leads, and sales data.</p>
            <div className="mt-8 p-8 bg-blue-50 rounded-lg">
              <p className="text-blue-800">This section will display client-specific data when access is granted.</p>
            </div>
          </div>
        );
      case 'inbox':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Inbox</h2>
            <p className="text-gray-600">Communication hub for messaging team members and clients.</p>
            <div className="mt-8 p-8 bg-green-50 rounded-lg">
              <p className="text-green-800">Real-time messaging system for efficient collaboration.</p>
            </div>
          </div>
        );
      case 'leads':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Lead Management</h2>
            <p className="text-gray-600">Add and manage sales leads through Samscope's lead management system.</p>
            <div className="mt-8 p-8 bg-yellow-50 rounded-lg">
              <p className="text-yellow-800">Comprehensive lead tracking and management tools.</p>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Reports</h2>
            <p className="text-gray-600">Access client reports when permissions are granted.</p>
            <div className="mt-8 p-8 bg-purple-50 rounded-lg">
              <p className="text-purple-800">Detailed reporting and insights for client campaigns.</p>
            </div>
          </div>
        );
      case 'support':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Support Center</h2>
            <p className="text-gray-600">Submit and track support tickets through our integrated system.</p>
            <div className="mt-8 p-8 bg-red-50 rounded-lg">
              <p className="text-red-800">24/7 support ticketing system for all your needs.</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Settings</h2>
            <p className="text-gray-600">Configure and personalize your account settings and preferences.</p>
            <div className="mt-8 p-8 bg-gray-50 rounded-lg">
              <p className="text-gray-800">Customize your dashboard experience and account preferences.</p>
            </div>
          </div>
        );
      case 'payroll':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payroll System</h2>
            <p className="text-gray-600">View earnings and process secure payments.</p>
            <div className="mt-8 p-8 bg-green-50 rounded-lg">
              <p className="text-green-800">Secure payment processing with transaction history and withdrawal requests.</p>
            </div>
          </div>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <DashboardLayout 
      activeSection={activeSection} 
      onSectionChange={setActiveSection}
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default Index;
