import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Search, Filter, Building2, Mail, Phone, Eye } from 'lucide-react';
import { agencies } from '@/data/dummyData';

export default function AgenciesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredAgencies = agencies.filter((agency) => {
    const matchesSearch =
      agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.contactPerson.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = typeFilter === 'all' || agency.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || agency.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

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
            <div className="flex flex-col md:flex-row gap-4 mb-6">
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
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Agency Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Implementing">Implementing</SelectItem>
                  <SelectItem value="Executing">Executing</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-lg border border-slate-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="font-semibold">Agency Name</TableHead>
                    <TableHead className="font-semibold">Type</TableHead>
                    <TableHead className="font-semibold">District</TableHead>
                    <TableHead className="font-semibold">Projects</TableHead>
                    <TableHead className="font-semibold">Contact Person</TableHead>
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
                      <TableCell>{agency.district}</TableCell>
                      <TableCell>
                        <span className="font-semibold text-blue-600">{agency.projects}</span>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-sm">{agency.contactPerson}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <a
                              href={`mailto:${agency.email}`}
                              className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                            >
                              <Mail className="w-3 h-3" />
                              Email
                            </a>
                            <a
                              href={`tel:${agency.phone}`}
                              className="text-xs text-green-600 hover:underline flex items-center gap-1"
                            >
                              <Phone className="w-3 h-3" />
                              Call
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
                        <Button variant="ghost" size="sm">
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
    </div>
  );
}
