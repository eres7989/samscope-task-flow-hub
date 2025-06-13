
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { DashboardOverview } from '@/components/DashboardOverview';
import { TasksSection } from '@/components/TasksSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AnalyticsSection } from '@/components/AnalyticsSection';
import { ManagementSection } from '@/components/ManagementSection';
import { InboxSection } from '@/components/InboxSection';
import { LeadsSection } from '@/components/LeadsSection';
import { ReportsSection } from '@/components/ReportsSection';
import { SupportSection } from '@/components/SupportSection';
import { SettingsSection } from '@/components/SettingsSection';
import { PayrollSection } from '@/components/PayrollSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'management':
        return <ManagementSection />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'tasks':
        return <TasksSection />;
      case 'inbox':
        return <InboxSection />;
      case 'leads':
        return <LeadsSection />;
      case 'reports':
        return <ReportsSection />;
      case 'support':
        return <SupportSection />;
      case 'settings':
        return <SettingsSection />;
      case 'payroll':
        return <PayrollSection />;
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
