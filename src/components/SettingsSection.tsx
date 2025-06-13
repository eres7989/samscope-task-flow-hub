
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Save, 
  Camera, 
  Key,
  Smartphone,
  Mail,
  Calendar,
  Clock
} from 'lucide-react';

export function SettingsSection() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    taskUpdates: true,
    projectDeadlines: true,
    systemMaintenance: true,
    weeklyReports: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'team',
    activityStatus: true,
    emailVisibility: false,
    phoneVisibility: false
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
          <p className="text-gray-600">Configure and personalize your account settings and preferences</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="text-xl">JD</AvatarFallback>
                  </Avatar>
                  <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full p-2 h-8 w-8">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-gray-600">Employee ID: EMP-001</p>
                  <Badge className="mt-1">Active</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@samscope.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select defaultValue="development">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input id="position" defaultValue="Senior Developer" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell us about yourself..."
                  defaultValue="Experienced developer with expertise in React, Node.js, and modern web technologies. Passionate about creating efficient and scalable solutions."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Work Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" defaultValue="2023-01-15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="est">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern Time (EST)</SelectItem>
                      <SelectItem value="cst">Central Time (CST)</SelectItem>
                      <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                      <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workHours">Work Hours</Label>
                  <Select defaultValue="9-5">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9-5">9:00 AM - 5:00 PM</SelectItem>
                      <SelectItem value="8-4">8:00 AM - 4:00 PM</SelectItem>
                      <SelectItem value="10-6">10:00 AM - 6:00 PM</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="New York, NY" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-600" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Delivery Methods</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-gray-600" />
                      <div>
                        <Label htmlFor="email-notifications" className="text-sm font-medium">Email Notifications</Label>
                        <p className="text-xs text-gray-500">Receive notifications via email</p>
                      </div>
                    </div>
                    <Switch 
                      id="email-notifications"
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-4 w-4 text-gray-600" />
                      <div>
                        <Label htmlFor="push-notifications" className="text-sm font-medium">Push Notifications</Label>
                        <p className="text-xs text-gray-500">Receive browser push notifications</p>
                      </div>
                    </div>
                    <Switch 
                      id="push-notifications"
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-4 w-4 text-gray-600" />
                      <div>
                        <Label htmlFor="sms-notifications" className="text-sm font-medium">SMS Notifications</Label>
                        <p className="text-xs text-gray-500">Receive notifications via text message</p>
                      </div>
                    </div>
                    <Switch 
                      id="sms-notifications"
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, sms: checked }))}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Notification Types</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="task-updates" className="text-sm font-medium">Task Updates</Label>
                      <p className="text-xs text-gray-500">When tasks are assigned or updated</p>
                    </div>
                    <Switch 
                      id="task-updates"
                      checked={notifications.taskUpdates}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, taskUpdates: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="project-deadlines" className="text-sm font-medium">Project Deadlines</Label>
                      <p className="text-xs text-gray-500">Reminders for upcoming deadlines</p>
                    </div>
                    <Switch 
                      id="project-deadlines"
                      checked={notifications.projectDeadlines}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, projectDeadlines: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="system-maintenance" className="text-sm font-medium">System Maintenance</Label>
                      <p className="text-xs text-gray-500">Important system updates and maintenance</p>
                    </div>
                    <Switch 
                      id="system-maintenance"
                      checked={notifications.systemMaintenance}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, systemMaintenance: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="weekly-reports" className="text-sm font-medium">Weekly Reports</Label>
                      <p className="text-xs text-gray-500">Weekly performance and activity summaries</p>
                    </div>
                    <Switch 
                      id="weekly-reports"
                      checked={notifications.weeklyReports}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, weeklyReports: checked }))}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Password</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Key className="h-4 w-4 mr-2" />
                    Update Password
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-yellow-800">Two-Factor Authentication</h5>
                      <p className="text-sm text-yellow-600">Add an extra layer of security to your account</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable 2FA
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Active Sessions</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-sm text-gray-500">Chrome on Windows • New York, NY</p>
                      </div>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <div>
                        <p className="font-medium">Mobile Device</p>
                        <p className="text-sm text-gray-500">Safari on iPhone • 2 hours ago</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Revoke</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-blue-600" />
                Display Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select defaultValue="light">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateFormat">Date Format</Label>
                  <Select defaultValue="mm-dd-yyyy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeFormat">Time Format</Label>
                  <Select defaultValue="12h">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12h">12 Hour</SelectItem>
                      <SelectItem value="24h">24 Hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Calendar Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="defaultView">Default Calendar View</Label>
                <Select defaultValue="week">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="weekStart">Week Starts On</Label>
                <Select defaultValue="monday">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sunday">Sunday</SelectItem>
                    <SelectItem value="monday">Monday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Tab */}
        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                Privacy Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="profileVisibility">Profile Visibility</Label>
                  <Select 
                    value={privacy.profileVisibility} 
                    onValueChange={(value) => setPrivacy(prev => ({ ...prev, profileVisibility: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="team">Team Only</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="activity-status" className="text-sm font-medium">Show Activity Status</Label>
                      <p className="text-xs text-gray-500">Let others see when you're online</p>
                    </div>
                    <Switch 
                      id="activity-status"
                      checked={privacy.activityStatus}
                      onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, activityStatus: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-visibility" className="text-sm font-medium">Email Visibility</Label>
                      <p className="text-xs text-gray-500">Show email address in profile</p>
                    </div>
                    <Switch 
                      id="email-visibility"
                      checked={privacy.emailVisibility}
                      onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, emailVisibility: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="phone-visibility" className="text-sm font-medium">Phone Visibility</Label>
                      <p className="text-xs text-gray-500">Show phone number in profile</p>
                    </div>
                    <Switch 
                      id="phone-visibility"
                      checked={privacy.phoneVisibility}
                      onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, phoneVisibility: checked }))}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data & Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Download My Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Privacy Policy
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Terms of Service
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
