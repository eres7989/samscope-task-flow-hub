
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Send, Phone, Video, Paperclip, MoreVertical, Star, Archive } from 'lucide-react';

const conversations = [
  { id: 1, name: 'Sarah Wilson', role: 'Project Manager', lastMessage: 'The client approved the new design...', time: '2 min ago', unread: 2, online: true },
  { id: 2, name: 'Mike Johnson', role: 'Developer', lastMessage: 'I need the API documentation for...', time: '15 min ago', unread: 0, online: true },
  { id: 3, name: 'Client - TechCorp', role: 'Client', lastMessage: 'When can we schedule the next...', time: '1 hour ago', unread: 1, online: false },
  { id: 4, name: 'Lisa Davis', role: 'Designer', lastMessage: 'Here are the updated mockups...', time: '3 hours ago', unread: 0, online: false },
  { id: 5, name: 'Tom Brown', role: 'Marketing', lastMessage: 'The campaign metrics look great!', time: '1 day ago', unread: 0, online: true },
];

const messages = [
  { id: 1, sender: 'Sarah Wilson', content: 'Hi John! I wanted to update you on the TechCorp project progress.', time: '10:30 AM', isOwn: false },
  { id: 2, sender: 'You', content: 'Great! How are things going with the redesign?', time: '10:32 AM', isOwn: true },
  { id: 3, sender: 'Sarah Wilson', content: 'The client approved the new design concepts. We can move forward with development.', time: '10:35 AM', isOwn: false },
  { id: 4, sender: 'You', content: 'Excellent news! I\'ll start working on the homepage implementation today.', time: '10:37 AM', isOwn: true },
  { id: 5, sender: 'Sarah Wilson', content: 'Perfect. Also, they want to schedule a review meeting for Friday. Are you available?', time: '10:40 AM', isOwn: false },
];

const teams = [
  { id: 1, name: 'TechCorp Project Team', members: 5, lastActivity: '2 min ago', avatar: 'TC' },
  { id: 2, name: 'Marketing Team', members: 8, lastActivity: '1 hour ago', avatar: 'MT' },
  { id: 3, name: 'Design Team', members: 4, lastActivity: '3 hours ago', avatar: 'DT' },
  { id: 4, name: 'Development Team', members: 6, lastActivity: '1 day ago', avatar: 'DV' },
];

export function InboxSection() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Inbox</h2>
          <p className="text-gray-600">Communication hub for team collaboration</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Send className="h-4 w-4 mr-2" />
          New Message
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tabs */}
          <Tabs defaultValue="direct" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="direct">Direct</TabsTrigger>
              <TabsTrigger value="teams">Teams</TabsTrigger>
            </TabsList>

            <TabsContent value="direct" className="space-y-2 max-h-[500px] overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <Card 
                  key={conversation.id} 
                  className={`p-3 cursor-pointer transition-colors ${
                    selectedConversation.id === conversation.id ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback>{conversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium truncate">{conversation.name}</h4>
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                      </div>
                      <p className="text-xs text-gray-500">{conversation.role}</p>
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                    </div>
                    {conversation.unread > 0 && (
                      <Badge className="bg-blue-600 text-white text-xs">{conversation.unread}</Badge>
                    )}
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="teams" className="space-y-2 max-h-[500px] overflow-y-auto">
              {teams.map((team) => (
                <Card key={team.id} className="p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10 bg-blue-600">
                      <AvatarFallback className="text-white">{team.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium truncate">{team.name}</h4>
                        <span className="text-xs text-gray-500">{team.lastActivity}</span>
                      </div>
                      <p className="text-xs text-gray-500">{team.members} members</p>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-3">
          <Card className="h-full flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>{selectedConversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {selectedConversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{selectedConversation.name}</h3>
                    <p className="text-sm text-gray-500">{selectedConversation.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Star className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isOwn 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.isOwn ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Message Input */}
            <div className="border-t p-4">
              <div className="flex items-end space-x-2">
                <Button variant="ghost" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Textarea
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 min-h-[40px] max-h-[120px] resize-none"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
