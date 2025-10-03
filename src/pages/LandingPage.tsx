import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Chrome as Home, School, GraduationCap, ArrowRight, Users, TrendingUp, MapPin } from 'lucide-react';

export default function LandingPage() {
  const components = [
    {
      icon: Home,
      title: "Adarsh Gram",
      description: "Model village development program focusing on comprehensive rural transformation with infrastructure, education, and livelihood support.",
      color: "from-green-500 to-green-600",
      projects: 24,
      beneficiaries: "15,000+"
    },
    {
      icon: GraduationCap,
      title: "Grant-in-Aid (GIA)",
      description: "Educational support scheme providing financial assistance to tribal students for quality education and skill development.",
      color: "from-blue-500 to-blue-600",
      projects: 18,
      beneficiaries: "8,500+"
    },
    {
      icon: School,
      title: "Hostel Development",
      description: "Construction and maintenance of residential facilities ensuring safe and conducive living environment for students.",
      color: "from-orange-500 to-orange-600",
      projects: 12,
      beneficiaries: "5,200+"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-700 via-blue-600 to-green-600 text-white py-6 shadow-lg"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <MapPin className="w-10 h-10 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">PM-AJAY</h1>
                <p className="text-blue-100 text-sm">Agency Mapping & Monitoring System</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-blue-100">Ministry of Tribal Affairs</p>
                <p className="text-xs text-blue-200">Government of India</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Empowering Tribal Communities
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive platform for monitoring and managing tribal welfare projects across India.
            Track progress, manage funds, and ensure accountability in real-time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {components.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-blue-500">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${component.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <component.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800">{component.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600 mb-6">
                    {component.description}
                  </CardDescription>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <p className="text-sm text-slate-500">Active Projects</p>
                      <p className="text-2xl font-bold text-slate-800">{component.projects}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">Beneficiaries</p>
                      <p className="text-2xl font-bold text-slate-800">{component.beneficiaries}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 mb-4 opacity-80" />
              <p className="text-4xl font-bold mb-2">54</p>
              <p className="text-blue-100">Total Projects</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white">
            <CardContent className="pt-6">
              <TrendingUp className="w-12 h-12 mb-4 opacity-80" />
              <p className="text-4xl font-bold mb-2">₹52.5Cr</p>
              <p className="text-green-100">Total Fund Allocation</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-600 to-orange-700 text-white">
            <CardContent className="pt-6">
              <MapPin className="w-12 h-12 mb-4 opacity-80" />
              <p className="text-4xl font-bold mb-2">28,700+</p>
              <p className="text-orange-100">Beneficiaries Reached</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Access the System</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Login based on your role to access dashboards, manage projects, track funds, and monitor progress.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/login?role=ministry">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                Ministry Login
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/login?role=state">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 shadow-lg">
                State Login
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/login?role=district">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 shadow-lg">
                District Login
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/login?role=agency">
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 shadow-lg">
                Agency Login
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/public">
              <Button size="lg" variant="secondary" className="shadow-lg">
                Public View
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
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
