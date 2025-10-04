import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  LayoutDashboard,
  Building2,
  FolderKanban,
  TrendingUp,
  Eye,
  MapPin,
  Menu,
  X,
  Bell,
  Settings,
  LogOut,
  User,
  History,
} from 'lucide-react';
import { useUser, UserRole } from '@/contexts/UserContext';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { user, setUser } = useUser();

  const handleRoleChange = (role: UserRole) => {
    setUser({ ...user, role });
  };

  const getRoleName = (role: UserRole) => {
    const roleNames = {
      central_ministry: 'Central Ministry',
      state_govt: 'State Government',
      district_officer: 'District Officer',
      agency: 'Agency',
      public: 'Public',
    };
    return roleNames[role];
  };

  const baseNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Agencies', href: '/dashboard/agencies', icon: Building2 },
    { name: 'Projects', href: '/dashboard/projects', icon: FolderKanban },
    { name: 'Fund Flow', href: '/dashboard/funds', icon: TrendingUp },
  ];

  const navigation = user.role === 'district_officer'
    ? [...baseNavigation, { name: 'Agency History', href: '/dashboard/agency-history', icon: History }]
    : baseNavigation;

  navigation.push({ name: 'Public View', href: '/public', icon: Eye });

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm"
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X /> : <Menu />}
            </Button>
            <Link to="/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-slate-800">PM-AJAY</h1>
                <p className="text-xs text-slate-500">Agency Mapping System</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Select value={user.role} onValueChange={handleRoleChange}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="central_ministry">Central Ministry</SelectItem>
                  <SelectItem value="state_govt">State Government</SelectItem>
                  <SelectItem value="district_officer">District Officer</SelectItem>
                  <SelectItem value="agency">Agency</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-700 text-white text-sm">
                      {user.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden sm:block text-left">
                    <span className="text-sm font-medium block">{user.name}</span>
                    <span className="text-xs text-slate-500">{getRoleName(user.role)}</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-xs text-slate-500 font-normal">{getRoleName(user.role)}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="px-2 py-2 md:hidden">
                  <p className="text-xs text-slate-500 mb-2">Switch Role</p>
                  <Select value={user.role} onValueChange={handleRoleChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="central_ministry">Central Ministry</SelectItem>
                      <SelectItem value="state_govt">State Government</SelectItem>
                      <SelectItem value="district_officer">District Officer</SelectItem>
                      <SelectItem value="agency">Agency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <DropdownMenuSeparator className="md:hidden" />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.div>

      <div className="flex">
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: sidebarOpen || window.innerWidth >= 1024 ? 0 : -300 }}
          className={`fixed lg:sticky top-[57px] left-0 h-[calc(100vh-57px)] w-64 bg-white border-r border-slate-200 overflow-y-auto z-40 shadow-lg lg:shadow-none ${
            sidebarOpen ? 'block' : 'hidden lg:block'
          }`}
        >
          <nav className="p-4 space-y-2">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    active
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </motion.aside>

        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
