
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  BarChart3, 
  FolderOpen, 
  CheckSquare, 
  MessageSquare, 
  User, 
  FileText, 
  HeadphonesIcon,
  CreditCard,
  Menu,
  X,
  Bell
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
  { name: 'Management', icon: Users, id: 'management' },
  { name: 'Analytics', icon: BarChart3, id: 'analytics' },
  { name: 'Projects', icon: FolderOpen, id: 'projects' },
  { name: 'Tasks', icon: CheckSquare, id: 'tasks' },
  { name: 'Inbox', icon: MessageSquare, id: 'inbox' },
  { name: 'Leads', icon: User, id: 'leads' },
  { name: 'Reports', icon: FileText, id: 'reports' },
  { name: 'Support', icon: HeadphonesIcon, id: 'support' },
  { name: 'Settings', icon: Settings, id: 'settings' },
  { name: 'Payroll', icon: CreditCard, id: 'payroll' },
];

export function DashboardLayout({ children, activeSection, onSectionChange }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex w-full">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:flex lg:flex-col",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/f01b03ac-dc19-4751-bb09-2dde6ff09d74.png" 
                alt="Samscope Logo" 
                className="h-8 w-auto"
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </button>
            ))}
          </nav>

          {/* User profile */}
          <div className="p-4 border-t border-gray-200 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
                <p className="text-xs text-gray-500 truncate">Employee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="sticky top-0 z-40 flex h-16 bg-white border-b border-gray-200 shadow-sm flex-shrink-0">
          <div className="flex items-center justify-between w-full px-4 lg:px-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              
              <h1 className="text-xl font-semibold text-gray-900 capitalize">
                {activeSection.replace('-', ' ')}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
