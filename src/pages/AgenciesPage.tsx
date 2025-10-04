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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Search, Filter, Building2, Mail, Phone, Eye, Award, TrendingUp, AlertTriangle } from 'lucide-react';
import { agencies, agencyHistory } from '@/data/dummyData';

export default function AgenciesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [stateFilter, setStateFilter] = useState('all');
  const [districtFilter, setDistrictFilter] = useState('all');
  const [componentFilter, setComponentFilter] = useState('all');
  const [selectedAgency, setSelectedAgency] = useState<typeof agencies[0] | null>(null);

  const filteredAgencies = agencies.filter((agency) => {
    const matchesSearch =
      agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.contactPerson.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = typeFilter === 'all' || agency.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || agency.status === statusFilter;
    const matchesState = stateFilter === 'all' || agency.state === stateFilter;
    const matchesDistrict = districtFilter === 'all' || agency.district === districtFilter;

    return matchesSearch && matchesType && matchesStatus && matchesState && matchesDistrict;
  });

  const uniqueStates = [...new Set(agencies.map(a => a.state))];
  const uniqueDistricts = [...new Set(agencies.map(a => a.district))];
  const agencyHistoryData = agencyHistory.filter(h => h.agencyId === selectedAgency?.id);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Agencies</h1>
        <p className="text-slate-600">Implementing and Executing agencies across India</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <Card className="border-t-4 border-blue-500 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">Total Agencies</p>
                <p className="text-3xl font-bold text-slate-800 mt-2">{agencies.length}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-green-500 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">Implementing</p>
                <p className="text-3xl font-bold text-slate-800 mt-2">
                  {agencies.filter(a => a.type === 'Implementing').length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-orange-500 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">Executing</p>
                <p className="text-3xl font-bold text-slate-800 mt-2">
                  {agencies.filter(a => a.type === 'Executing').length}
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
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Agency Directory</CardTitle>
                <CardDescription>Search and filter agencies by type, status, or location</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-slate-500" />
                <span className="text-sm text-slate-600">{filteredAgencies.length} results</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search by name, district, or contact person..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Implementing">Implementing</SelectItem>
                    <SelectItem value="Executing">Executing</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <Select value={stateFilter} onValueChange={setStateFilter}>
                  <SelectTrigger className="w-full md:w-52">
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
                  <SelectTrigger className="w-full md:w-52">
                    <SelectValue placeholder="Filter by District" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Districts</SelectItem>
                    {uniqueDistricts.map(district => (
                      <SelectItem key={district} value={district}>{district}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={componentFilter} onValueChange={setComponentFilter}>
                  <SelectTrigger className="w-full md:w-52">
                    <SelectValue placeholder="Component" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Components</SelectItem>
                    <SelectItem value="Adarsh Gram">Adarsh Gram</SelectItem>
                    <SelectItem value="GIA">GIA</SelectItem>
                    <SelectItem value="Hostel">Hostel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-semibold">Agency Name</TableHead>
                    <TableHead className="font-semibold">Type</TableHead>
                    <TableHead className="font-semibold">Location</TableHead>
                    <TableHead className="font-semibold">Reliability</TableHead>
                    <TableHead className="font-semibold">Projects</TableHead>
                    <TableHead className="font-semibold">Contact</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAgencies.map((agency, index) => (
                    <motion.tr
                      key={agency.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <TableCell className="font-medium">{agency.name}</TableCell>
                      <TableCell>
                        <Badge
                          variant={agency.type === 'Implementing' ? 'default' : 'secondary'}
                          className={
                            agency.type === 'Implementing'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700'
                          }
                        >
                          {agency.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm font-medium">{agency.district}</p>
                          <p className="text-xs text-slate-500">{agency.state}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-blue-600" />
                          <Badge
                            variant={agency.reliabilityScore >= 90 ? 'default' : 'secondary'}
                            className={agency.reliabilityScore >= 90 ? 'bg-green-500' : 'bg-blue-500'}
                          >
                            {agency.reliabilityScore}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <span className="font-semibold text-blue-600">{agency.projects}</span>
                          <p className="text-xs text-slate-500">
                            {agency.completedProjects} completed
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-sm">{agency.contactPerson}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <a
                              href={`mailto:${agency.email}`}
                              className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                            >
                              <Mail className="w-3 h-3" />
                            </a>
                            <a
                              href={`tel:${agency.phone}`}
                              className="text-xs text-green-600 hover:underline flex items-center gap-1"
                            >
                              <Phone className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={agency.status === 'Active' ? 'default' : 'secondary'}
                          className={
                            agency.status === 'Active'
                              ? 'bg-green-500'
                              : 'bg-slate-400'
                          }
                        >
                          {agency.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedAgency(agency)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredAgencies.length === 0 && (
              <div className="text-center py-12">
                <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">No agencies found</p>
                <p className="text-slate-500 text-sm mt-1">Try adjusting your search or filters</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={!!selectedAgency} onOpenChange={() => setSelectedAgency(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedAgency?.name}</DialogTitle>
            <DialogDescription>Agency details and performance history</DialogDescription>
          </DialogHeader>
          {selectedAgency && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Location</p>
                  <p className="text-base text-slate-800">{selectedAgency.district}, {selectedAgency.state}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Type</p>
                  <p className="text-base text-slate-800">{selectedAgency.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Contact Person</p>
                  <p className="text-base text-slate-800">{selectedAgency.contactPerson}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Status</p>
                  <Badge className={selectedAgency.status === 'Active' ? 'bg-green-500' : 'bg-slate-400'}>
                    {selectedAgency.status}
                  </Badge>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Reliability Score
                  </h4>
                  <Badge
                    className={selectedAgency.reliabilityScore >= 90 ? 'bg-green-500 text-lg px-3 py-1' : 'bg-blue-500 text-lg px-3 py-1'}
                  >
                    {selectedAgency.reliabilityScore}/100
                  </Badge>
                </div>
                <Progress value={selectedAgency.reliabilityScore} className="h-3" />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-sm text-slate-600">Total Projects</p>
                  <p className="text-2xl font-bold text-slate-800 mt-1">{selectedAgency.projects}</p>
                </div>
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                  <p className="text-sm text-slate-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">{selectedAgency.completedProjects}</p>
                </div>
                <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                  <p className="text-sm text-slate-600">Delayed</p>
                  <p className="text-2xl font-bold text-orange-600 mt-1">{selectedAgency.delayedProjects}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Project History
                </h4>
                {agencyHistoryData.length > 0 ? (
                  <div className="space-y-2">
                    {agencyHistoryData.map(record => (
                      <div key={record.id} className="p-3 rounded-lg border border-slate-200">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-slate-800">{record.projectName}</p>
                            <p className="text-sm text-slate-500">Year: {record.year}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-500">{record.status}</Badge>
                            <Badge variant="outline">Rating: {record.rating}</Badge>
                          </div>
                        </div>
                        {record.delay > 0 && (
                          <div className="flex items-center gap-1 text-sm text-orange-600 mt-2">
                            <AlertTriangle className="w-4 h-4" />
                            Delay: {record.delay} days
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 text-sm">No historical data available</p>
                )}
              </div>

              {selectedAgency.averageDelay > 0 && (
                <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="font-semibold text-slate-800">Average Delay</p>
                      <p className="text-sm text-slate-600">{selectedAgency.averageDelay} days across projects</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
