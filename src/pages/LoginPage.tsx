import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Lock, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const defaultRole = searchParams.get('role') || 'ministry';

  const [role, setRole] = useState(defaultRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const roles = [
    { value: 'ministry', label: 'Ministry Level', color: 'from-blue-600 to-blue-700' },
    { value: 'state', label: 'State Level', color: 'from-green-600 to-green-700' },
    { value: 'district', label: 'District Level', color: 'from-orange-600 to-orange-700' },
    { value: 'agency', label: 'Agency Level', color: 'from-purple-600 to-purple-700' },
    { value: 'public', label: 'Public Access', color: 'from-slate-600 to-slate-700' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const selectedRoleData = roles.find(r => r.value === role) || roles[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-700 via-blue-600 to-green-600 text-white py-4 shadow-lg"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">PM-AJAY</h1>
              <p className="text-blue-100 text-xs">Agency Mapping System</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-2xl border-t-4 border-blue-500">
            <CardHeader className="space-y-4">
              <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${selectedRoleData.color} flex items-center justify-center shadow-lg`}>
                <Lock className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-center text-slate-800">Welcome Back</CardTitle>
              <CardDescription className="text-center text-base">
                Sign in to access the PM-AJAY dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="role">Select Role</Label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger id="role" className="h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map(r => (
                        <SelectItem key={r.value} value={r.value}>
                          {r.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@gov.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-300" />
                    <span className="text-slate-600">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  className={`w-full h-12 bg-gradient-to-r ${selectedRoleData.color} hover:opacity-90 text-white text-lg shadow-lg`}
                >
                  Sign In
                </Button>

                <div className="text-center pt-4">
                  <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-slate-500 mt-6">
            For technical support, contact: support@pmajay.gov.in
          </p>
        </motion.div>
      </div>
    </div>
  );
}
