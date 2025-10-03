import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { FolderKanban, IndianRupee, TriangleAlert as AlertTriangle, TrendingUp, CircleCheck as CheckCircle, Clock, CircleAlert as AlertCircle } from 'lucide-react';
import { projects, fundAllocation, monthlyProgress, alerts } from '@/data/dummyData';

export default function DashboardHome() {
  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const delayedProjects = projects.filter(p => p.status === 'Delayed').length;

  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
  const totalUtilized = projects.reduce((sum, p) => sum + p.utilized, 0);
  const utilizationRate = ((totalUtilized / totalBudget) * 100).toFixed(1);

  const COLORS = ['#22c55e', '#3b82f6', '#f59e0b'];

  const componentData = [
    { name: 'Adarsh Gram', value: projects.filter(p => p.component === 'Adarsh Gram').length },
    { name: 'GIA', value: projects.filter(p => p.component === 'GIA').length },
    { name: 'Hostel', value: projects.filter(p => p.component === 'Hostel').length },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Dashboard Overview</h1>
        <p className="text-slate-600">Real-time monitoring of PM-AJAY projects and fund allocation</p>
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
                  <p className="text-3xl font-bold text-slate-800 mt-2">{totalProjects}</p>
                  <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +12% from last month
                  </p>
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
                  <p className="text-sm text-slate-500 font-medium">Total Funds</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">₹{(totalBudget / 10000000).toFixed(1)}Cr</p>
                  <p className="text-xs text-blue-600 mt-1">
                    {utilizationRate}% utilized
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
                  <p className="text-sm text-slate-500 font-medium">Delayed Projects</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{delayedProjects}</p>
                  <p className="text-xs text-orange-600 mt-1">
                    Requires attention
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
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
          <Card className="border-t-4 border-purple-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Completion Rate</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{((completedProjects / totalProjects) * 100).toFixed(0)}%</p>
                  <p className="text-xs text-green-600 mt-1">
                    {completedProjects} completed
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
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
              <CardTitle>Monthly Progress</CardTitle>
              <CardDescription>Project completion and fund utilization trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyProgress}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis yAxisId="left" stroke="#64748b" />
                  <YAxis yAxisId="right" orientation="right" stroke="#64748b" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="projects"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    name="Projects"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="funds"
                    stroke="#22c55e"
                    strokeWidth={3}
                    name="Funds (₹)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle>Component Distribution</CardTitle>
              <CardDescription>Projects by scheme component</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={componentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {componentData.map((_entry, index) => (
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
              <CardTitle>Project Timeline Tracker</CardTitle>
              <CardDescription>Top 5 projects with progress status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.slice(0, 5).map((project) => (
                <div key={project.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-800">{project.name}</p>
                      <p className="text-xs text-slate-500">{project.district}, {project.state}</p>
                    </div>
                    <Badge
                      variant={
                        project.status === 'Completed'
                          ? 'default'
                          : project.status === 'Delayed'
                          ? 'destructive'
                          : 'secondary'
                      }
                      className="ml-2"
                    >
                      {project.progress}%
                    </Badge>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              ))}
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
              <CardTitle>Alerts & Notifications</CardTitle>
              <CardDescription>Recent updates and warnings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded-lg border-l-4 ${
                    alert.type === 'warning'
                      ? 'bg-orange-50 border-orange-500'
                      : alert.type === 'success'
                      ? 'bg-green-50 border-green-500'
                      : 'bg-blue-50 border-blue-500'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {alert.type === 'warning' ? (
                      <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                    ) : alert.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    ) : (
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm text-slate-800">{alert.message}</p>
                      <p className="text-xs text-slate-500 mt-1">{alert.date}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {alert.priority}
                    </Badge>
                  </div>
                </div>
              ))}
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
            <CardTitle>Fund Allocation vs Utilization</CardTitle>
            <CardDescription>Component-wise fund tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fundAllocation}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="component" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                />
                <Legend />
                <Bar dataKey="allocated" fill="#3b82f6" name="Allocated (₹)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="utilized" fill="#22c55e" name="Utilized (₹)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
