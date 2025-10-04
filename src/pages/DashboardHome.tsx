import { useUser } from '@/contexts/UserContext';
import CentralMinistryDashboard from './dashboards/CentralMinistryDashboard';
import StateGovtDashboard from './dashboards/StateGovtDashboard';
import DistrictOfficerDashboard from './dashboards/DistrictOfficerDashboard';
import AgencyDashboard from './dashboards/AgencyDashboard';

export default function DashboardHome() {
  const { user } = useUser();

  switch (user.role) {
    case 'central_ministry':
      return <CentralMinistryDashboard />;
    case 'state_govt':
      return <StateGovtDashboard />;
    case 'district_officer':
      return <DistrictOfficerDashboard />;
    case 'agency':
      return <AgencyDashboard />;
    default:
      return <CentralMinistryDashboard />;
  }
}
