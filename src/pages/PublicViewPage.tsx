import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { MapPin, CircleCheck as CheckCircle, Clock, ArrowLeft, Chrome as Home, GraduationCap, School } from 'lucide-react';
import { publicProjects, projects } from '@/data/dummyData';

export default function PublicViewPage() {
  const [selectedProject, setSelectedProject] = useState<typeof publicProjects[0] | null>(null);

  const completedProjects = projects.filter(p => p.status === 'Completed').length;
  const ongoingProjects = projects.filter(p => p.status === 'Ongoing').length;

  const componentIcons = {
    'Adarsh Gram': Home,
    'GIA': GraduationCap,
    'Hostel': School,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-700 via-blue-600 to-green-600 text-white py-4 shadow-lg"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">PM-AJAY Public View</h1>
                <p className="text-blue-100 text-xs">Real-time project monitoring</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="secondary" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <Card className="border-t-4 border-blue-500 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-slate-500 font-medium">Total Projects</p>
                <p className="text-4xl font-bold text-slate-800 mt-2">{projects.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-green-500 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm text-slate-500 font-medium">Completed</p>
                <p className="text-4xl font-bold text-green-600 mt-2">{completedProjects}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-blue-500 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm text-slate-500 font-medium">Ongoing</p>
                <p className="text-4xl font-bold text-blue-600 mt-2">{ongoingProjects}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Project Locations</CardTitle>
                <CardDescription>Interactive map showing PM-AJAY projects across India</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
                  <div className="aspect-video flex items-center justify-center">
                    <div className="relative w-full h-full p-8">
                      <div className="text-center space-y-4">
                        <MapPin className="w-16 h-16 text-blue-600 mx-auto" />
                        <p className="text-slate-600 font-medium">Interactive Map View</p>
                        <p className="text-sm text-slate-500">
                          Click on project markers to view details
                        </p>
                      </div>

                      {publicProjects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          className={`absolute cursor-pointer transform hover:scale-125 transition-transform`}
                          style={{
                            left: `${15 + index * 15}%`,
                            top: `${20 + (index % 3) * 20}%`,
                          }}
                          onClick={() => setSelectedProject(project)}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                              project.status === 'Completed'
                                ? 'bg-green-500'
                                : 'bg-blue-500 animate-pulse'
                            }`}
                          >
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedProject && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <h4 className="font-semibold text-slate-800 mb-2">{selectedProject.name}</h4>
                    <div className="space-y-2">
                      <Badge
                        className={
                          selectedProject.status === 'Completed'
                            ? 'bg-green-500'
                            : 'bg-blue-500'
                        }
                      >
                        {selectedProject.status}
                      </Badge>
                      <Progress value={selectedProject.completion} className="h-2" />
                      <p className="text-sm text-slate-600">{selectedProject.completion}% Complete</p>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>All Projects</CardTitle>
                <CardDescription>Complete list of PM-AJAY initiatives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    >
                      <Card className="hover:shadow-md transition-shadow border-l-4 border-blue-500">
                        <CardContent className="pt-4">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h4 className="font-semibold text-slate-800 mb-2">{project.name}</h4>
                                <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                                  {(() => {
                                    const Icon = componentIcons[project.component as keyof typeof componentIcons];
                                    return Icon ? <Icon className="w-4 h-4" /> : null;
                                  })()}
                                  <span>{project.component}</span>
                                  <span className="text-slate-400">•</span>
                                  <MapPin className="w-4 h-4" />
                                  <span>{project.district}, {project.state}</span>
                                </div>
                              </div>
                              <Badge
                                className={
                                  project.status === 'Completed'
                                    ? 'bg-green-500'
                                    : project.status === 'Delayed'
                                    ? 'bg-red-500'
                                    : 'bg-blue-500'
                                }
                              >
                                {project.status}
                              </Badge>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-600">Progress</span>
                                <span className="font-semibold text-slate-800">{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-2" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Card className="shadow-xl bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Transparency & Accountability</h3>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  PM-AJAY is committed to transparent implementation of tribal welfare projects.
                  All project information is updated in real-time for public access.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <Link to="/login">
                    <Button variant="secondary" size="lg">
                      Login to Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <footer className="bg-slate-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-300">© 2024 Ministry of Tribal Affairs, Government of India</p>
          <p className="text-slate-400 text-sm mt-2">PM-AJAY Agency Mapping System v1.0</p>
        </div>
      </footer>
    </div>
  );
}
