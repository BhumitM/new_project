import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Award, TrendingUp, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Clock } from 'lucide-react';
import { agencies, agencyHistory } from '@/data/dummyData';
import { Progress } from '@/components/ui/progress';

export default function AgencyHistoryPage() {
  const [selectedAgencyId, setSelectedAgencyId] = useState<number | null>(agencies[0]?.id || null);

  const selectedAgency = agencies.find(a => a.id === selectedAgencyId);
  const history = agencyHistory.filter(h => h.agencyId === selectedAgencyId);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Agency Performance History</h1>
            <p className="text-slate-600">Track agency work record, delays, and completion rates</p>
          </div>
          <Select
            value={selectedAgencyId?.toString()}
            onValueChange={(value) => setSelectedAgencyId(parseInt(value))}
          >
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select Agency" />
            </SelectTrigger>
            <SelectContent>
              {agencies.map(agency => (
                <SelectItem key={agency.id} value={agency.id.toString()}>
                  {agency.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      {selectedAgency && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="shadow-lg border-t-4 border-blue-500">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-blue-600" />
                      <p className="text-sm text-slate-500 font-medium">Reliability Score</p>
                    </div>
                    <p className="text-3xl font-bold text-slate-800">{selectedAgency.reliabilityScore}</p>
                    <Progress value={selectedAgency.reliabilityScore} className="h-2 mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-sm text-slate-500 font-medium">Completion Rate</p>
                    </div>
                    <p className="text-3xl font-bold text-green-600">
                      {((selectedAgency.completedProjects / selectedAgency.projects) * 100).toFixed(0)}%
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      {selectedAgency.completedProjects}/{selectedAgency.projects} projects
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      <p className="text-sm text-slate-500 font-medium">Delayed Projects</p>
                    </div>
                    <p className="text-3xl font-bold text-orange-600">{selectedAgency.delayedProjects}</p>
                    <p className="text-xs text-slate-500 mt-2">
                      {((selectedAgency.delayedProjects / selectedAgency.projects) * 100).toFixed(0)}% of total
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-red-600" />
                      <p className="text-sm text-slate-500 font-medium">Avg Delay</p>
                    </div>
                    <p className="text-3xl font-bold text-red-600">{selectedAgency.averageDelay}</p>
                    <p className="text-xs text-slate-500 mt-2">days</p>
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
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Project History</CardTitle>
                <CardDescription>Past work record and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                {history.length > 0 ? (
                  <div className="space-y-4">
                    {history.map((record, index) => (
                      <motion.div
                        key={record.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-800">{record.projectName}</h4>
                            <p className="text-sm text-slate-500 mt-1">Year: {record.year}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-500">{record.status}</Badge>
                            <Badge variant="outline">Rating: {record.rating}</Badge>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-xs text-slate-500">Status</p>
                            <div className="flex items-center gap-2 mt-1">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <p className="text-sm font-medium text-slate-800">{record.status}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Delay</p>
                            <div className="flex items-center gap-2 mt-1">
                              {record.delay > 0 ? (
                                <>
                                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                                  <p className="text-sm font-medium text-orange-600">{record.delay} days</p>
                                </>
                              ) : (
                                <>
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  <p className="text-sm font-medium text-green-600">On time</p>
                                </>
                              )}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Performance Rating</p>
                            <div className="mt-1">
                              <Progress value={record.rating} className="h-2" />
                              <p className="text-sm font-medium text-slate-800 mt-1">{record.rating}/100</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <TrendingUp className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">No historical data available</p>
                    <p className="text-slate-500 text-sm mt-1">Past project records will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Agency Information</CardTitle>
                <CardDescription>Details and contact information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Location</p>
                      <p className="text-base text-slate-800">{selectedAgency.district}, {selectedAgency.state}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">Type</p>
                      <Badge className={selectedAgency.type === 'Implementing' ? 'bg-green-500' : 'bg-blue-500'}>
                        {selectedAgency.type}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">Status</p>
                      <Badge className={selectedAgency.status === 'Active' ? 'bg-green-500' : 'bg-slate-400'}>
                        {selectedAgency.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Contact Person</p>
                      <p className="text-base text-slate-800">{selectedAgency.contactPerson}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">Email</p>
                      <a href={`mailto:${selectedAgency.email}`} className="text-base text-blue-600 hover:underline">
                        {selectedAgency.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">Phone</p>
                      <a href={`tel:${selectedAgency.phone}`} className="text-base text-green-600 hover:underline">
                        {selectedAgency.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </div>
  );
}
