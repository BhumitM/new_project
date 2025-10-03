import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
import { IndianRupee, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { fundAllocation } from '@/data/dummyData';

export default function FundFlowPage() {
  const totalAllocated = fundAllocation.reduce((sum, item) => sum + item.allocated, 0);
  const totalUtilized = fundAllocation.reduce((sum, item) => sum + item.utilized, 0);
  const utilizationRate = ((totalUtilized / totalAllocated) * 100).toFixed(1);

  const stateWiseFunds = [
    { state: 'Delhi', allocated: 8500000, utilized: 6500000 },
    { state: 'Maharashtra', allocated: 12000000, utilized: 9700000 },
    { state: 'Jharkhand', allocated: 5000000, utilized: 5000000 },
    { state: 'Rajasthan', allocated: 9000000, utilized: 5100000 },
    { state: 'West Bengal', allocated: 6000000, utilized: 3000000 },
    { state: 'Others', allocated: 12000000, utilized: 6200000 },
  ];

  const COLORS = ['#22c55e', '#3b82f6', '#f59e0b'];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Fund Flow Analysis</h1>
        <p className="text-slate-600">Track fund allocation and utilization across all projects</p>
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>State-wise Fund Allocation</CardTitle>
            <CardDescription>Comparative analysis of fund allocation and utilization across states</CardDescription>
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
                <Bar dataKey="allocated" fill="#3b82f6" name="Allocated (₹)" radius={[0, 8, 8, 0]} />
                <Bar dataKey="utilized" fill="#22c55e" name="Utilized (₹)" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

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
