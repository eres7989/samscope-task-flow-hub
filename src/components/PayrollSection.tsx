import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  DollarSign, 
  Download, 
  Calendar, 
  TrendingUp, 
  CreditCard, 
  Clock, 
  Check,
  AlertCircle,
  Banknote,
  PiggyBank,
  Receipt,
  FileText
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const payrollData = [
  { month: 'Jan', earnings: 3200, hours: 160, projects: 4 },
  { month: 'Feb', earnings: 3450, hours: 172, projects: 5 },
  { month: 'Mar', earnings: 3100, hours: 155, projects: 3 },
  { month: 'Apr', earnings: 3800, hours: 190, projects: 6 },
  { month: 'May', earnings: 3650, hours: 182, projects: 5 },
  { month: 'Jun', earnings: 4200, hours: 210, projects: 7 },
];

const paymentHistory = [
  { id: 1, date: '2024-06-07', amount: 2100, type: 'Bi-weekly', status: 'Completed', method: 'Bank Transfer' },
  { id: 2, date: '2024-05-24', amount: 2100, type: 'Bi-weekly', status: 'Completed', method: 'Bank Transfer' },
  { id: 3, date: '2024-05-10', amount: 1950, type: 'Bi-weekly', status: 'Completed', method: 'Bank Transfer' },
  { id: 4, date: '2024-04-26', amount: 1900, type: 'Bi-weekly', status: 'Completed', method: 'Bank Transfer' },
  { id: 5, date: '2024-04-12', amount: 1900, type: 'Bi-weekly', status: 'Completed', method: 'Bank Transfer' },
];

const pendingRequests = [
  { id: 1, amount: 500, requestDate: '2024-06-12', expectedDate: '2024-06-15', status: 'Processing', type: 'Partial Withdrawal' },
  { id: 2, amount: 1200, requestDate: '2024-06-10', expectedDate: '2024-06-14', status: 'Approved', type: 'Emergency Withdrawal' },
];

export function PayrollSection() {
  const [selectedPeriod, setSelectedPeriod] = useState('current-month');
  const [isWithdrawDialogOpen, setIsWithdrawDialogOpen] = useState(false);

  const currentBalance = 4200;
  const availableForWithdrawal = 3800;
  const totalEarnings = payrollData.reduce((sum, item) => sum + item.earnings, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Approved': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Payroll System</h2>
          <p className="text-gray-600">View earnings and manage secure payments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Reports
          </Button>
          <Dialog open={isWithdrawDialogOpen} onOpenChange={setIsWithdrawDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                <Banknote className="h-4 w-4 mr-2" />
                Request Withdrawal
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Request Withdrawal</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Available Balance:</strong> ${availableForWithdrawal.toLocaleString()}
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="withdrawAmount">Withdrawal Amount</Label>
                  <Input id="withdrawAmount" type="number" placeholder="Enter amount" max={availableForWithdrawal} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="withdrawMethod">Payment Method</Label>
                  <Select defaultValue="bank-transfer">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="check">Check</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="withdrawType">Withdrawal Type</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (3-5 business days)</SelectItem>
                      <SelectItem value="expedited">Expedited (1-2 business days) - $5 fee</SelectItem>
                      <SelectItem value="emergency">Emergency (Same day) - $15 fee</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => setIsWithdrawDialogOpen(false)} variant="outline" className="flex-1">
                    Cancel
                  </Button>
                  <Button onClick={() => setIsWithdrawDialogOpen(false)} className="flex-1 bg-green-600 hover:bg-green-700">
                    Submit Request
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current Balance</p>
                <p className="text-2xl font-bold text-green-600">${currentBalance.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-full bg-green-50">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Available for Withdrawal</p>
                <p className="text-2xl font-bold text-blue-600">${availableForWithdrawal.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-50">
                <PiggyBank className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Earnings (YTD)</p>
                <p className="text-2xl font-bold text-purple-600">${totalEarnings.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-full bg-purple-50">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Next Payment</p>
                <p className="text-2xl font-bold text-orange-600">Jun 21</p>
              </div>
              <div className="p-3 rounded-full bg-orange-50">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Earnings Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={payrollData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="earnings" stroke="#10B981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={payrollData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="hours" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-green-800">Next Payment</h4>
                    <p className="text-sm text-green-600">June 21, 2024</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Scheduled</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-800">Following Payment</h4>
                    <p className="text-sm text-gray-600">July 5, 2024</p>
                  </div>
                  <Badge variant="outline">Upcoming</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Monthly Goal Progress</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Bonus Qualification</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="text-sm text-gray-600">
                  <p>You're on track to earn a performance bonus this month!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Payment History Tab */}
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current-month">Current Month</SelectItem>
                    <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                    <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                    <SelectItem value="current-year">Current Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {paymentHistory.map((payment) => (
              <Card key={payment.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <Receipt className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">${payment.amount.toLocaleString()}</h3>
                        <p className="text-gray-600">{payment.type} Payment</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                          <span>Date: {payment.date}</span>
                          <span>Method: {payment.method}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(payment.status)}>
                        {payment.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Receipt
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Withdrawals Tab */}
        <TabsContent value="withdrawals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Withdrawal Requests</CardTitle>
            </CardHeader>
            <CardContent>
              {pendingRequests.length > 0 ? (
                <div className="space-y-4">
                  {pendingRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-yellow-50 rounded-lg">
                          <Clock className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">${request.amount.toLocaleString()}</h4>
                          <p className="text-sm text-gray-600">{request.type}</p>
                          <p className="text-xs text-gray-500">
                            Requested: {request.requestDate} • Expected: {request.expectedDate}
                          </p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(request.status)}>
                        {request.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Banknote className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Withdrawal Requests</h3>
                  <p className="text-gray-600">Your withdrawal requests will appear here once submitted.</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Withdrawal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Withdrawal Options</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Standard: 3-5 business days (Free)</li>
                  <li>• Expedited: 1-2 business days ($5 fee)</li>
                  <li>• Emergency: Same day ($15 fee)</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Important Notes</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Minimum withdrawal amount: $50</li>
                  <li>• Maximum daily withdrawal: $5,000</li>
                  <li>• Withdrawals are processed Monday-Friday</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-blue-50 rounded-lg inline-block mb-4">
                  <Receipt className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Tax Documents (W-2)</h3>
                <p className="text-sm text-gray-600 mb-4">Annual tax documentation</p>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Download 2024
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-green-50 rounded-lg inline-block mb-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Pay Stubs</h3>
                <p className="text-sm text-gray-600 mb-4">Detailed payment breakdowns</p>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  View All
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-purple-50 rounded-lg inline-block mb-4">
                  <CreditCard className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Banking Information</h3>
                <p className="text-sm text-gray-600 mb-4">Direct deposit details</p>
                <Button variant="outline" size="sm">
                  Update Info
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-orange-50 rounded-lg inline-block mb-4">
                  <AlertCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Payment Policies</h3>
                <p className="text-sm text-gray-600 mb-4">Terms and conditions</p>
                <Button variant="outline" size="sm">
                  View Policy
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
