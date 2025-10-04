import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart,
  Bar,
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
import { IndianRupee, TrendingUp, TrendingDown, DollarSign, ChevronRight, Building2 } from 'lucide-react';
import { fundAllocation, stateData, districtData, projects } from '@/data/dummyData';

export default function FundFlowPage() {
  const [selectedView, setSelectedView] = useState<'national' | 'state' | 'district' | 'project'>('national');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const totalAllocated = fundAllocation.reduce((sum, item) => sum + item.allocated, 0);
  const totalUtilized = fundAllocation.reduce((sum, item) => sum + item.utilized, 0);
  const utilizationRate = ((totalUtilized / totalAllocated) * 100).toFixed(1);

  const stateWiseFunds = stateData.map(state => ({
    state: state.state,
    allocated: state.totalBudget,
    utilized: state.utilized,
  }));

  const filteredDistricts = selectedState
    ? districtData.filter(d => d.state === selectedState)
    : districtData;

  const filteredProjects = selectedDistrict
    ? projects.filter(p => p.district === selectedDistrict)
    : selectedState
    ? projects.filter(p => p.state === selectedState)
    : projects;

  const handleStateClick = (state: string) => {
    setSelectedState(state);
    setSelectedView('state');
  };

  const handleDistrictClick = (district: string) => {
    setSelectedDistrict(district);
    setSelectedView('district');
  };

  const handleBackToNational = () => {
    setSelectedState(null);
    setSelectedDistrict(null);
    setSelectedView('national');
  };

  const handleBackToState = () => {
    setSelectedDistrict(null);
    setSelectedView('state');
  };

  const COLORS = ['#22c55e', '#3b82f6', '#f59e0b'];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Fund Flow Analysis</h1>
            <div className="flex items-center gap-2">
              {selectedView !== 'national' && (
                <>
                  <Button variant="ghost" size="sm" onClick={handleBackToNational}>
                    National
                  </Button>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </>
              )}
              {selectedState && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBackToState}
                    className={selectedView === 'state' ? 'font-semibold' : ''}
                  >
                    {selectedState}
                  </Button>
                  {selectedDistrict && (
                    <>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-semibold text-slate-700">{selectedDistrict}</span>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="border-t-4 border-blue-500 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Total Allocated</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">₹{(totalAllocated / 10000000).toFixed(1)}Cr</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 text-blue-600" />
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
          <Card className="border-t-4 border-green-500 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Total Utilized</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">₹{(totalUtilized / 10000000).toFixed(1)}Cr</p>
                  <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {utilizationRate}% utilization
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
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
          <Card className="border-t-4 border-orange-500 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Remaining</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">
                    ₹{((totalAllocated - totalUtilized) / 10000000).toFixed(1)}Cr
                  </p>
                  <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    Available funds
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 text-orange-600" />
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
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle>Component-wise Fund Allocation</CardTitle>
              <CardDescription>Allocated vs Utilized funds by scheme component</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={fundAllocation}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="component" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) => `₹${(value / 10000000).toFixed(2)}Cr`}
                  />
                  <Legend />
                  <Bar dataKey="allocated" fill="#3b82f6" name="Allocated (₹)" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="utilized" fill="#22c55e" name="Utilized (₹)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle>Fund Distribution</CardTitle>
              <CardDescription>Total allocation across components</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={fundAllocation}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ component, allocated }) =>
                      `${component}: ₹${(allocated / 10000000).toFixed(1)}Cr`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="allocated"
                  >
                    {fundAllocation.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `₹${(value / 10000000).toFixed(2)}Cr`} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="national" value={selectedView} className="space-y-6">
        <TabsList className="grid w-full md:w-auto grid-cols-4 md:inline-grid">
          <TabsTrigger value="national" onClick={handleBackToNational}>National</TabsTrigger>
          <TabsTrigger value="state" disabled={!selectedState}>State Level</TabsTrigger>
          <TabsTrigger value="district" disabled={!selectedDistrict}>District Level</TabsTrigger>
          <TabsTrigger value="project" disabled={!selectedDistrict}>Project Level</TabsTrigger>
        </TabsList>

        <TabsContent value="national" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>State-wise Fund Allocation</CardTitle>
                <CardDescription>Click on a state to drill down into district-level data</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={stateWiseFunds} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" stroke="#64748b" />
                    <YAxis dataKey="state" type="category" stroke="#64748b" width={120} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => `₹${(value / 10000000).toFixed(2)}Cr`}
                    />
                    <Legend />
                    <Bar
                      dataKey="allocated"
                      fill="#3b82f6"
                      name="Allocated (₹)"
                      radius={[0, 8, 8, 0]}
                      cursor="pointer"
                      onClick={(data) => handleStateClick(data.state)}
                    />
                    <Bar
                      dataKey="utilized"
                      fill="#22c55e"
                      name="Utilized (₹)"
                      radius={[0, 8, 8, 0]}
                      cursor="pointer"
                      onClick={(data) => handleStateClick(data.state)}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="state" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>District-wise Fund Allocation - {selectedState}</CardTitle>
                <CardDescription>Click on a district to view project-level details</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={filteredDistricts}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="district" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => `₹${(value / 10000000).toFixed(2)}Cr`}
                    />
                    <Legend />
                    <Bar
                      dataKey="budget"
                      fill="#3b82f6"
                      name="Allocated (₹)"
                      radius={[8, 8, 0, 0]}
                      cursor="pointer"
                      onClick={(data) => handleDistrictClick(data.district)}
                    />
                    <Bar
                      dataKey="utilized"
                      fill="#22c55e"
                      name="Utilized (₹)"
                      radius={[8, 8, 0, 0]}
                      cursor="pointer"
                      onClick={(data) => handleDistrictClick(data.district)}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="district" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Project-level Fund Flow - {selectedDistrict}</CardTitle>
                <CardDescription>Detailed breakdown of funds by project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800">{project.name}</h4>
                          <p className="text-sm text-slate-500">{project.component}</p>
                        </div>
                        <Badge
                          variant={project.status === 'Completed' ? 'default' : 'secondary'}
                          className={project.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-4 gap-3 text-sm">
                        <div>
                          <p className="text-xs text-slate-500">Budget</p>
                          <p className="font-semibold text-slate-800">₹{(project.budget / 100000).toFixed(1)}L</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Utilized</p>
                          <p className="font-semibold text-green-600">₹{(project.utilized / 100000).toFixed(1)}L</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Received</p>
                          <p className="font-semibold text-blue-600">₹{(project.fundReceived / 100000).toFixed(1)}L</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Pending</p>
                          <p className="font-semibold text-orange-600">₹{(project.fundPending / 100000).toFixed(1)}L</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="project" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Detailed Project Breakdown</CardTitle>
                <CardDescription>View individual project fund flow</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-slate-500">
                  <Building2 className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                  <p>Select a project from the district view to see detailed breakdown</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Utilization Rate by Component</CardTitle>
            <CardDescription>Percentage of allocated funds utilized</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {fundAllocation.map((item, index) => {
                const rate = (item.utilized / item.allocated) * 100;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className="font-medium text-slate-800">{item.component}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-slate-800">{rate.toFixed(1)}%</p>
                        <p className="text-xs text-slate-500">
                          ₹{(item.utilized / 10000000).toFixed(1)}Cr / ₹{(item.allocated / 10000000).toFixed(1)}Cr
                        </p>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full transition-all duration-500"
                        style={{
                          width: `${rate}%`,
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
