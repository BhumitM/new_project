import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { IndianRupee, FolderKanban, Building2, TrendingUp, Clock } from 'lucide-react';
import { stateData, agencies, projects } from '@/data/dummyData';

export default function StateGovtDashboard() {
  const [selectedState, setSelectedState] = useState('Maharashtra');

  const currentState = stateData.find(s => s.state === selectedState) || stateData[0];
  const stateAgencies = agencies.filter(a => a.state === selectedState);
  const stateProjects = projects.filter(p => p.state === selectedState);

  const componentData = Object.entries(currentState.components).map(([component, count]) => ({
    component,
    projects: count,
  }));

  const delayedProjects = stateProjects.filter(p => p.status === 'Delayed');
  const completionRate = ((currentState.completed / currentState.totalProjects) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">State Government Dashboard</h1>
            <p className="text-slate-600">State-level fund flow and project management</p>
          </div>
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger className="w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {stateData.map(state => (
                <SelectItem key={state.state} value={state.state}>
                  {state.state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="border-t-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Total Projects</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{currentState.totalProjects}</p>
                  <p className="text-xs text-green-600 mt-1">{completionRate}% completed</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FolderKanban className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-t-4 border-green-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Total Budget</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">₹{(currentState.totalBudget / 10000000).toFixed(1)}Cr</p>
                  <p className="text-xs text-blue-600 mt-1">
                    {((currentState.utilized / currentState.totalBudget) * 100).toFixed(1)}% utilized
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="border-t-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Local Agencies</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{stateAgencies.length}</p>
                  <p className="text-xs text-green-600 mt-1">
                    {stateAgencies.filter(a => a.status === 'Active').length} active
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="border-t-4 border-red-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Delayed Projects</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{currentState.delayed}</p>
                  <p className="text-xs text-orange-600 mt-1">Needs attention</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Component-wise Projects</CardTitle>
              <CardDescription>Distribution across scheme components</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={componentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="component" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="projects" fill="#3b82f6" name="Projects" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Project Status Overview</CardTitle>
              <CardDescription>Current status distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Completed</span>
                    <Badge className="bg-green-500">{currentState.completed}</Badge>
                  </div>
                  <Progress
                    value={(currentState.completed / currentState.totalProjects) * 100}
                    className="h-2"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Ongoing</span>
                    <Badge className="bg-blue-500">{currentState.ongoing}</Badge>
                  </div>
                  <Progress
                    value={(currentState.ongoing / currentState.totalProjects) * 100}
                    className="h-2"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Delayed</span>
                    <Badge className="bg-red-500">{currentState.delayed}</Badge>
                  </div>
                  <Progress
                    value={(currentState.delayed / currentState.totalProjects) * 100}
                    className="h-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Executing Agencies</CardTitle>
              <CardDescription>Agency reliability and performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {stateAgencies.slice(0, 5).map((agency) => (
                <div
                  key={agency.id}
                  className="p-3 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 text-sm">{agency.name}</h4>
                      <p className="text-xs text-slate-500">{agency.type}</p>
                    </div>
                    <Badge
                      variant={agency.reliabilityScore >= 90 ? 'default' : 'secondary'}
                      className={agency.reliabilityScore >= 90 ? 'bg-green-500' : 'bg-blue-500'}
                    >
                      Score: {agency.reliabilityScore}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>{agency.projects} projects</span>
                    <span>{agency.completedProjects} completed</span>
                    {agency.delayedProjects > 0 && (
                      <span className="text-orange-600">{agency.delayedProjects} delayed</span>
                    )}
                  </div>
                </div>
              ))}
              {stateAgencies.length === 0 && (
                <div className="text-center py-8 text-slate-500">
                  <Building2 className="w-12 h-12 mx-auto mb-2 text-slate-300" />
                  <p>No agencies found for this state</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Project Approvals & Delays</CardTitle>
              <CardDescription>Projects requiring attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {delayedProjects.length > 0 ? (
                delayedProjects.slice(0, 5).map((project) => (
                  <div
                    key={project.id}
                    className="p-3 rounded-lg bg-red-50 border border-red-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 text-sm">{project.name}</h4>
                        <p className="text-xs text-slate-500">{project.district}</p>
                      </div>
                      <Badge variant="destructive">Delayed</Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600">Progress: {project.progress}%</span>
                      <Button variant="outline" size="sm" className="h-7 text-xs">
                        Review
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-500">
                  <TrendingUp className="w-12 h-12 mx-auto mb-2 text-green-400" />
                  <p>All projects on track!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
