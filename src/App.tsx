import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import PublicViewPage from './pages/PublicViewPage';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import AgenciesPage from './pages/AgenciesPage';
import ProjectsPage from './pages/ProjectsPage';
import FundFlowPage from './pages/FundFlowPage';
import AgencyHistoryPage from './pages/AgencyHistoryPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/public" element={<PublicViewPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="agencies" element={<AgenciesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="funds" element={<FundFlowPage />} />
          <Route path="agency-history" element={<AgencyHistoryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
