import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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
import { Search, FolderKanban, Eye, Calendar, IndianRupee, MapPin } from 'lucide-react';
import { projects } from '@/data/dummyData';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [componentFilter, setComponentFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [stateFilter, setStateFilter] = useState('all');
  const [districtFilter, setDistrictFilter] = useState('all');
  const [fundSizeFilter, setFundSizeFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.agency.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesComponent = componentFilter === 'all' || project.component === componentFilter;
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesState = stateFilter === 'all' || project.state === stateFilter;
    const matchesDistrict = districtFilter === 'all' || project.district === districtFilter;

    let matchesFundSize = true;
    if (fundSizeFilter === 'small') matchesFundSize = project.budget < 3000000;
    else if (fundSizeFilter === 'medium') matchesFundSize = project.budget >= 3000000 && project.budget < 7000000;
    else if (fundSizeFilter === 'large') matchesFundSize = project.budget >= 7000000;

    return matchesSearch && matchesComponent && matchesStatus && matchesState && matchesDistrict && matchesFundSize;
  });

  const uniqueStates = [...new Set(projects.map(p => p.state))];
  const uniqueDistricts = [...new Set(projects.map(p => p.district))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'Ongoing':
        return 'bg-blue-500';
      case 'Delayed':
        return 'bg-red-500';
      default:
        return 'bg-slate-500';
    }
  };

  const getComponentColor = (component: string) => {
    switch (component) {
      case 'Adarsh Gram':
        return 'bg-green-100 text-green-700';
      case 'GIA':
        return 'bg-blue-100 text-blue-700';
      case 'Hostel':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Projects</h1>
        <p className="text-slate-600">Comprehensive project tracking and monitoring</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid md:grid-cols-4 gap-6"
      >
        <Card className="border-t-4 border-blue-500 shadow-lg">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-slate-500 font-medium">Total Projects</p>
              <p className="text-3xl font-bold text-slate-800 mt-2">{projects.length}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-green-500 shadow-lg">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-slate-500 font-medium">Completed</p>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {projects.filter(p => p.status === 'Completed').length}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-blue-500 shadow-lg">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-slate-500 font-medium">Ongoing</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">
                {projects.filter(p => p.status === 'Ongoing').length}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-red-500 shadow-lg">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-slate-500 font-medium">Delayed</p>
              <p className="text-3xl font-bold text-red-600 mt-2">
                {projects.filter(p => p.status === 'Delayed').length}
              </p>
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Project Directory</CardTitle>
                <CardDescription>View and filter all PM-AJAY projects</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search by project name, district, state, or agency..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={componentFilter} onValueChange={setComponentFilter}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Component" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Components</SelectItem>
                    <SelectItem value="Adarsh Gram">Adarsh Gram</SelectItem>
                    <SelectItem value="GIA">GIA</SelectItem>
                    <SelectItem value="Hostel">Hostel</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Ongoing">Ongoing</SelectItem>
                    <SelectItem value="Delayed">Delayed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <Select value={stateFilter} onValueChange={setStateFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    {uniqueStates.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={districtFilter} onValueChange={setDistrictFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by District" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Districts</SelectItem>
                    {uniqueDistricts.map(district => (
                      <SelectItem key={district} value={district}>{district}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={fundSizeFilter} onValueChange={setFundSizeFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Fund Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    <SelectItem value="small">Small (&lt;₹30L)</SelectItem>
                    <SelectItem value="medium">Medium (₹30L-₹70L)</SelectItem>
                    <SelectItem value="large">Large (&gt;₹70L)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                    <CardContent className="pt-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="font-bold text-lg text-slate-800 mb-2">{project.name}</h3>
                              <div className="flex flex-wrap gap-2">
                                <Badge className={getComponentColor(project.component)}>
                                  {project.component}
                                </Badge>
                                <Badge className={getStatusColor(project.status)}>
                                  {project.status}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {project.phase}
                                </Badge>
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedProject(project)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              Details
                            </Button>
                          </div>

                          <div className="grid md:grid-cols-4 gap-3 text-sm">
                            <div className="flex items-center gap-2 text-slate-600">
                              <MapPin className="w-4 h-4" />
                              <span>{project.district}, {project.state}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600">
                              <Calendar className="w-4 h-4" />
                              <span>{project.startDate}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600">
                              <IndianRupee className="w-4 h-4" />
                              <span>₹{(project.budget / 100000).toFixed(1)}L</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600">
                              <FolderKanban className="w-4 h-4" />
                              <span>{project.phase}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-600">Progress</span>
                              <span className="font-semibold text-slate-800">{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                            <div className="grid md:grid-cols-3 gap-2 text-xs text-slate-500 mt-2">
                              <span>Utilized: ₹{(project.utilized / 100000).toFixed(1)}L</span>
                              <span>Pending: ₹{(project.fundPending / 100000).toFixed(1)}L</span>
                              <span className="md:col-span-1">Milestones: {project.milestonesCompleted}/{project.milestones}</span>
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              <span className="font-medium">Agency:</span> {project.agency}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <FolderKanban className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">No projects found</p>
                <p className="text-slate-500 text-sm mt-1">Try adjusting your search or filters</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.name}</DialogTitle>
            <DialogDescription>Detailed project information</DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge className={getComponentColor(selectedProject.component)}>
                  {selectedProject.component}
                </Badge>
                <Badge className={getStatusColor(selectedProject.status)}>
                  {selectedProject.status}
                </Badge>
                <Badge variant="outline">{selectedProject.phase}</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Location</p>
                    <p className="text-base text-slate-800">{selectedProject.district}, {selectedProject.state}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Implementing Agency</p>
                    <p className="text-base text-slate-800">{selectedProject.agency}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Project Timeline</p>
                    <p className="text-base text-slate-800">{selectedProject.startDate} to {selectedProject.endDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Project Phase</p>
                    <p className="text-base text-slate-800">{selectedProject.phase}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Budget Allocated</p>
                    <p className="text-base font-semibold text-slate-800">₹{(selectedProject.budget / 100000).toFixed(2)}L</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Amount Utilized</p>
                    <p className="text-base font-semibold text-green-600">₹{(selectedProject.utilized / 100000).toFixed(2)}L</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Funds Received</p>
                    <p className="text-base font-semibold text-blue-600">₹{(selectedProject.fundReceived / 100000).toFixed(2)}L</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Funds Pending</p>
                    <p className="text-base font-semibold text-orange-600">₹{(selectedProject.fundPending / 100000).toFixed(2)}L</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-2">Project Progress</p>
                  <Progress value={selectedProject.progress} className="h-3" />
                  <p className="text-sm text-slate-600 mt-2">{selectedProject.progress}% Complete</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-2">Milestones</p>
                  <div className="flex items-center gap-2">
                    <Progress value={(selectedProject.milestonesCompleted / selectedProject.milestones) * 100} className="h-3 flex-1" />
                    <span className="text-sm font-semibold text-slate-700">
                      {selectedProject.milestonesCompleted}/{selectedProject.milestones}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">Financial Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Budget:</span>
                    <span className="font-semibold">₹{(selectedProject.budget / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Utilized:</span>
                    <span className="font-semibold text-green-600">₹{(selectedProject.utilized / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Remaining:</span>
                    <span className="font-semibold text-blue-600">
                      ₹{((selectedProject.budget - selectedProject.utilized) / 100000).toFixed(2)}L
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-slate-600">Utilization Rate:</span>
                    <span className="font-semibold">
                      {((selectedProject.utilized / selectedProject.budget) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
