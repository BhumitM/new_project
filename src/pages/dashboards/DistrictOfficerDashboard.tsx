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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MapPin, Building2, FolderKanban, IndianRupee, Calendar, CheckCircle } from 'lucide-react';
import { districtData, agencies, projects } from '@/data/dummyData';

export default function DistrictOfficerDashboard() {
  const [selectedDistrict, setSelectedDistrict] = useState('Mumbai');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const currentDistrict = districtData.find(d => d.district === selectedDistrict) || districtData[0];
  const districtAgencies = agencies.filter(a => a.district === selectedDistrict);
  const districtProjects = projects.filter(p => p.district === selectedDistrict);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">District Officer Dashboard</h1>
            <p className="text-slate-600">District-level project directory and monitoring</p>
          </div>
          <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
            <SelectTrigger className="w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {districtData.map(district => (
                <SelectItem key={district.district} value={district.district}>
                  {district.district}, {district.state}
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
                  <p className="text-sm text-slate-500 font-medium">District Projects</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{currentDistrict.projects}</p>
                  <p className="text-xs text-green-600 mt-1">{currentDistrict.completion}% avg completion</p>
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
                  <p className="text-3xl font-bold text-slate-800 mt-2">₹{(currentDistrict.budget / 10000000).toFixed(1)}Cr</p>
                  <p className="text-xs text-blue-600 mt-1">
                    ₹{(currentDistrict.utilized / 10000000).toFixed(1)}Cr utilized
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
                  <p className="text-3xl font-bold text-slate-800 mt-2">{currentDistrict.agencies}</p>
                  <p className="text-xs text-green-600 mt-1">
                    {districtAgencies.filter(a => a.status === 'Active').length} active
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
          <Card className="border-t-4 border-teal-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Location</p>
                  <p className="text-2xl font-bold text-slate-800 mt-2">{currentDistrict.district}</p>
                  <p className="text-xs text-slate-600 mt-1">{currentDistrict.state}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Project Timeline Tracker</CardTitle>
            <CardDescription>Monitor and update project status in your district</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {districtProjects.map((project, index) => (
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
                        <span className="font-medium">{project.component}</span> • {project.agency}
                      </p>
                    </div>
                    <div className="flex gap-2">
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
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-sm mb-3">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <IndianRupee className="w-4 h-4" />
                      <span>₹{(project.budget / 100000).toFixed(1)}L</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>{project.milestonesCompleted}/{project.milestones} milestones</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Progress</span>
                      <span className="font-semibold text-slate-800">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Update Status
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Local Agency History</CardTitle>
            <CardDescription>Agency performance and reliability in your district</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {districtAgencies.map((agency) => (
                <div
                  key={agency.id}
                  className="p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800">{agency.name}</h4>
                      <p className="text-sm text-slate-500">{agency.type}</p>
                    </div>
                    <Badge
                      variant={agency.reliabilityScore >= 90 ? 'default' : 'secondary'}
                      className={agency.reliabilityScore >= 90 ? 'bg-green-500' : 'bg-blue-500'}
                    >
                      {agency.reliabilityScore}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Total Projects:</span>
                      <span className="font-semibold">{agency.projects}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Completed:</span>
                      <span className="font-semibold text-green-600">{agency.completedProjects}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Delayed:</span>
                      <span className="font-semibold text-orange-600">{agency.delayedProjects}</span>
                    </div>
                    {agency.averageDelay > 0 && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Avg Delay:</span>
                        <span className="font-semibold text-red-600">{agency.averageDelay} days</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <Progress value={(agency.completedProjects / agency.projects) * 100} className="h-2" />
                    <p className="text-xs text-slate-500 mt-2">
                      Completion Rate: {((agency.completedProjects / agency.projects) * 100).toFixed(0)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.name}</DialogTitle>
            <DialogDescription>Project details and status</DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Component</p>
                  <p className="text-base text-slate-800">{selectedProject.component}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Phase</p>
                  <p className="text-base text-slate-800">{selectedProject.phase}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Budget</p>
                  <p className="text-base font-semibold text-slate-800">₹{(selectedProject.budget / 100000).toFixed(2)}L</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Utilized</p>
                  <p className="text-base font-semibold text-green-600">₹{(selectedProject.utilized / 100000).toFixed(2)}L</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-2">Progress</p>
                <Progress value={selectedProject.progress} className="h-3" />
                <p className="text-sm text-slate-600 mt-2">{selectedProject.progress}% Complete</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
