import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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
import { Award, IndianRupee, Clock, Calendar, CheckCircle } from 'lucide-react';
import { projects, agencies } from '@/data/dummyData';

export default function AgencyDashboard() {
  const agencyId = 1;
  const agency = agencies.find(a => a.id === agencyId) || agencies[0];
  const agencyProjects = projects.filter(p => p.agency === agency.name);

  const assignedProjects = agencyProjects.length;
  const completedProjects = agencyProjects.filter(p => p.status === 'Completed').length;
  const ongoingProjects = agencyProjects.filter(p => p.status === 'Ongoing').length;
  const delayedProjects = agencyProjects.filter(p => p.status === 'Delayed').length;

  const totalBudget = agencyProjects.reduce((sum, p) => sum + p.budget, 0);
  const totalReceived = agencyProjects.reduce((sum, p) => sum + p.fundReceived, 0);
  const totalPending = agencyProjects.reduce((sum, p) => sum + p.fundPending, 0);

  const projectStatusData = [
    { status: 'Completed', count: completedProjects },
    { status: 'Ongoing', count: ongoingProjects },
    { status: 'Delayed', count: delayedProjects },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Agency Dashboard</h1>
            <p className="text-slate-600">{agency.name} - Performance Overview</p>
          </div>
          <Badge
            variant="default"
            className={agency.reliabilityScore >= 90 ? 'bg-green-500 text-lg px-4 py-2' : 'bg-blue-500 text-lg px-4 py-2'}
          >
            Reliability Score: {agency.reliabilityScore}
          </Badge>
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
                  <p className="text-sm text-slate-500 font-medium">Assigned Projects</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{assignedProjects}</p>
                  <p className="text-xs text-green-600 mt-1">{completedProjects} completed</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
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
                  <p className="text-sm text-slate-500 font-medium">Funds Received</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">₹{(totalReceived / 10000000).toFixed(1)}Cr</p>
                  <p className="text-xs text-blue-600 mt-1">
                    {((totalReceived / totalBudget) * 100).toFixed(0)}% of total
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
                  <p className="text-sm text-slate-500 font-medium">Funds Pending</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">₹{(totalPending / 10000000).toFixed(1)}Cr</p>
                  <p className="text-xs text-orange-600 mt-1">Awaiting release</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
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
                  <p className="text-sm text-slate-500 font-medium">Performance</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{agency.reliabilityScore}</p>
                  <p className="text-xs text-green-600 mt-1">Reliability score</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600" />
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
              <CardTitle>Project Status Distribution</CardTitle>
              <CardDescription>Current status of assigned projects</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={projectStatusData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="status" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="count" fill="#3b82f6" name="Projects" radius={[8, 8, 0, 0]} />
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
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Key indicators of agency performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Completion Rate</span>
                    <span className="text-sm font-bold text-green-600">
                      {((completedProjects / assignedProjects) * 100).toFixed(0)}%
                    </span>
                  </div>
                  <Progress value={(completedProjects / assignedProjects) * 100} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Fund Utilization</span>
                    <span className="text-sm font-bold text-blue-600">
                      {((totalReceived / totalBudget) * 100).toFixed(0)}%
                    </span>
                  </div>
                  <Progress value={(totalReceived / totalBudget) * 100} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">On-Time Delivery</span>
                    <span className="text-sm font-bold text-teal-600">
                      {(((assignedProjects - delayedProjects) / assignedProjects) * 100).toFixed(0)}%
                    </span>
                  </div>
                  <Progress value={((assignedProjects - delayedProjects) / assignedProjects) * 100} className="h-2" />
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Reliability Score</span>
                    <Badge
                      variant="default"
                      className={agency.reliabilityScore >= 90 ? 'bg-green-500' : 'bg-blue-500'}
                    >
                      {agency.reliabilityScore}/100
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Assigned Projects</CardTitle>
            <CardDescription>Current projects with deadlines and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {agencyProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800">{project.name}</h4>
                      <p className="text-sm text-slate-500 mt-1">
                        {project.component} • {project.district}, {project.state}
                      </p>
                    </div>
                    <Badge
                      variant={
                        project.status === 'Completed'
                          ? 'default'
                          : project.status === 'Delayed'
                          ? 'destructive'
                          : 'secondary'
                      }
                      className={
                        project.status === 'Completed'
                          ? 'bg-green-500'
                          : project.status === 'Delayed'
                          ? ''
                          : 'bg-blue-500'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-slate-500">Deadline</p>
                      <p className="text-sm font-medium text-slate-800 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.endDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Budget</p>
                      <p className="text-sm font-medium text-slate-800">₹{(project.budget / 100000).toFixed(1)}L</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Received</p>
                      <p className="text-sm font-medium text-green-600">₹{(project.fundReceived / 100000).toFixed(1)}L</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Pending</p>
                      <p className="text-sm font-medium text-orange-600">₹{(project.fundPending / 100000).toFixed(1)}L</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Progress</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">
                          {project.milestonesCompleted}/{project.milestones} milestones
                        </span>
                        <span className="font-semibold text-slate-800">{project.progress}%</span>
                      </div>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
