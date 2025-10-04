import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Map, IndianRupee, TrendingUp, Building2, Award, AlertTriangle } from 'lucide-react';
import { stateData, componentPerformance, agencies } from '@/data/dummyData';

export default function CentralMinistryDashboard() {
  const totalProjects = stateData.reduce((sum, s) => sum + s.totalProjects, 0);
  const totalBudget = stateData.reduce((sum, s) => sum + s.totalBudget, 0);
  const totalUtilized = stateData.reduce((sum, s) => sum + s.utilized, 0);
  const totalCompleted = stateData.reduce((sum, s) => sum + s.completed, 0);

  const stateComparison = stateData.map(state => ({
    state: state.state,
    projects: state.totalProjects,
    completion: ((state.completed / state.totalProjects) * 100).toFixed(0),
    utilization: ((state.utilized / state.totalBudget) * 100).toFixed(0),
  }));

  const topPerformingStates = [...stateData]
    .sort((a, b) => (b.completed / b.totalProjects) - (a.completed / a.totalProjects))
    .slice(0, 5);

  const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Central Ministry Dashboard</h1>
        <p className="text-slate-600">National overview of PM-AJAY implementation across all states</p>
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
                  <p className="text-sm text-slate-500 font-medium">Total States</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{stateData.length}</p>
                  <p className="text-xs text-green-600 mt-1">{totalProjects} projects</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Map className="w-6 h-6 text-blue-600" />
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
                  <p className="text-3xl font-bold text-slate-800 mt-2">₹{(totalBudget / 10000000).toFixed(1)}Cr</p>
                  <p className="text-xs text-blue-600 mt-1">{((totalUtilized / totalBudget) * 100).toFixed(1)}% utilized</p>
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
                  <p className="text-sm text-slate-500 font-medium">Total Agencies</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{agencies.length}</p>
                  <p className="text-xs text-green-600 mt-1">{agencies.filter(a => a.status === 'Active').length} active</p>
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
          <Card className="border-t-4 border-teal-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Completion Rate</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{((totalCompleted / totalProjects) * 100).toFixed(0)}%</p>
                  <p className="text-xs text-green-600 mt-1">{totalCompleted} completed</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="lg:col-span-2"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>State-wise Comparison</CardTitle>
              <CardDescription>Project count and completion rate across states</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={stateComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="state" stroke="#64748b" angle={-45} textAnchor="end" height={100} />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="projects" fill="#3b82f6" name="Total Projects" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="completion" fill="#22c55e" name="Completion %" radius={[8, 8, 0, 0]} />
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
              <CardTitle>Component Distribution</CardTitle>
              <CardDescription>Projects across scheme components</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={componentPerformance}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ component, totalProjects }) => `${component}: ${totalProjects}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="totalProjects"
                  >
                    {componentPerformance.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
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
              <CardTitle>Top Performing States</CardTitle>
              <CardDescription>States with highest completion rates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topPerformingStates.map((state, index) => {
                const completionRate = (state.completed / state.totalProjects) * 100;
                return (
                  <div key={state.state} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">{state.state}</p>
                          <p className="text-xs text-slate-500">
                            {state.completed}/{state.totalProjects} projects completed
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-500">{completionRate.toFixed(0)}%</Badge>
                    </div>
                    <Progress value={completionRate} className="h-2" />
                  </div>
                );
              })}
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
              <CardTitle>Cross-State Fund Allocation</CardTitle>
              <CardDescription>Budget utilization across states</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={stateData.slice(0, 5)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="state" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                    formatter={(value: number) => `₹${(value / 10000000).toFixed(1)}Cr`}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="totalBudget" stroke="#3b82f6" strokeWidth={2} name="Allocated" />
                  <Line type="monotone" dataKey="utilized" stroke="#22c55e" strokeWidth={2} name="Utilized" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Agency Performance Overview</CardTitle>
            <CardDescription>Top agencies by reliability score</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...agencies]
                .sort((a, b) => b.reliabilityScore - a.reliabilityScore)
                .slice(0, 4)
                .map((agency) => (
                  <div
                    key={agency.id}
                    className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      <Badge
                        variant={agency.reliabilityScore >= 90 ? 'default' : 'secondary'}
                        className={agency.reliabilityScore >= 90 ? 'bg-green-500' : 'bg-blue-500'}
                      >
                        {agency.reliabilityScore}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-slate-800 text-sm mb-1">{agency.name}</h4>
                    <p className="text-xs text-slate-500">{agency.state}</p>
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-600">Projects:</span>
                        <span className="font-semibold">{agency.projects}</span>
                      </div>
                      {agency.delayedProjects > 0 && (
                        <div className="flex items-center gap-1 text-xs text-orange-600 mt-1">
                          <AlertTriangle className="w-3 h-3" />
                          {agency.delayedProjects} delayed
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
