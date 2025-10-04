export const agencies = [
  { id: 1, name: "State Welfare Department", type: "Implementing", district: "Delhi", state: "Delhi", projects: 15, contactPerson: "Rajesh Kumar", phone: "+91-9876543210", email: "rajesh.kumar@gov.in", status: "Active", reliabilityScore: 92, completedProjects: 12, delayedProjects: 1, averageDelay: 5 },
  { id: 2, name: "District Education Board", type: "Executing", district: "Mumbai", state: "Maharashtra", projects: 8, contactPerson: "Priya Sharma", phone: "+91-9876543211", email: "priya.sharma@gov.in", status: "Active", reliabilityScore: 88, completedProjects: 6, delayedProjects: 0, averageDelay: 0 },
  { id: 3, name: "Tribal Welfare Council", type: "Implementing", district: "Ranchi", state: "Jharkhand", projects: 12, contactPerson: "Amit Verma", phone: "+91-9876543212", email: "amit.verma@gov.in", status: "Active", reliabilityScore: 95, completedProjects: 10, delayedProjects: 0, averageDelay: 0 },
  { id: 4, name: "Rural Development Agency", type: "Executing", district: "Jaipur", state: "Rajasthan", projects: 20, contactPerson: "Sunita Patel", phone: "+91-9876543213", email: "sunita.patel@gov.in", status: "Active", reliabilityScore: 85, completedProjects: 15, delayedProjects: 2, averageDelay: 8 },
  { id: 5, name: "State Housing Board", type: "Implementing", district: "Kolkata", state: "West Bengal", projects: 6, contactPerson: "Manoj Singh", phone: "+91-9876543214", email: "manoj.singh@gov.in", status: "Inactive", reliabilityScore: 70, completedProjects: 4, delayedProjects: 2, averageDelay: 15 },
  { id: 6, name: "District Tribal Office", type: "Executing", district: "Bhopal", state: "Madhya Pradesh", projects: 10, contactPerson: "Kavita Rao", phone: "+91-9876543215", email: "kavita.rao@gov.in", status: "Active", reliabilityScore: 90, completedProjects: 8, delayedProjects: 0, averageDelay: 0 },
  { id: 7, name: "Education Infrastructure Corp", type: "Implementing", district: "Chennai", state: "Tamil Nadu", projects: 18, contactPerson: "Ravi Naidu", phone: "+91-9876543216", email: "ravi.naidu@gov.in", status: "Active", reliabilityScore: 93, completedProjects: 14, delayedProjects: 1, averageDelay: 3 },
  { id: 8, name: "Welfare Project Management Unit", type: "Executing", district: "Bangalore", state: "Karnataka", projects: 14, contactPerson: "Anjali Desai", phone: "+91-9876543217", email: "anjali.desai@gov.in", status: "Active", reliabilityScore: 87, completedProjects: 11, delayedProjects: 1, averageDelay: 6 },
];

export const projects = [
  { id: 1, name: "Adarsh Gram Development - Village Rampur", component: "Adarsh Gram", district: "Delhi", state: "Delhi", agency: "State Welfare Department", startDate: "2024-01-15", endDate: "2025-01-15", budget: 5000000, utilized: 3500000, progress: 70, status: "Ongoing", phase: "Construction", fundReceived: 3500000, fundPending: 1500000, milestones: 4, milestonesCompleted: 3 },
  { id: 2, name: "Girls Hostel Construction - Block A", component: "Hostel", district: "Mumbai", state: "Maharashtra", agency: "District Education Board", startDate: "2023-06-01", endDate: "2024-12-31", budget: 8000000, utilized: 7200000, progress: 90, status: "Ongoing", phase: "Final Inspection", fundReceived: 7200000, fundPending: 800000, milestones: 5, milestonesCompleted: 5 },
  { id: 3, name: "GIA Support for Tribal School", component: "GIA", district: "Ranchi", state: "Jharkhand", agency: "Tribal Welfare Council", startDate: "2023-04-10", endDate: "2024-04-10", budget: 3000000, utilized: 3000000, progress: 100, status: "Completed", phase: "Completed", fundReceived: 3000000, fundPending: 0, milestones: 3, milestonesCompleted: 3 },
  { id: 4, name: "Adarsh Gram Infrastructure - Village Sundara", component: "Adarsh Gram", district: "Jaipur", state: "Rajasthan", agency: "Rural Development Agency", startDate: "2024-03-01", endDate: "2025-06-30", budget: 6500000, utilized: 2600000, progress: 40, status: "Ongoing", phase: "Planning", fundReceived: 3250000, fundPending: 3250000, milestones: 6, milestonesCompleted: 2 },
  { id: 5, name: "Boys Hostel Renovation", component: "Hostel", district: "Kolkata", state: "West Bengal", agency: "State Housing Board", startDate: "2024-02-01", endDate: "2024-11-30", budget: 4500000, utilized: 2250000, progress: 50, status: "Delayed", phase: "Construction", fundReceived: 2700000, fundPending: 1800000, milestones: 4, milestonesCompleted: 1 },
  { id: 6, name: "GIA Educational Support Program", component: "GIA", district: "Bhopal", state: "Madhya Pradesh", agency: "District Tribal Office", startDate: "2023-08-15", endDate: "2024-08-15", budget: 2500000, utilized: 2300000, progress: 92, status: "Ongoing", phase: "Final Review", fundReceived: 2500000, fundPending: 0, milestones: 3, milestonesCompleted: 3 },
  { id: 7, name: "Adarsh Gram Community Center", component: "Adarsh Gram", district: "Chennai", state: "Tamil Nadu", agency: "Education Infrastructure Corp", startDate: "2023-11-01", endDate: "2024-10-31", budget: 7000000, utilized: 6300000, progress: 90, status: "Ongoing", phase: "Final Inspection", fundReceived: 7000000, fundPending: 0, milestones: 5, milestonesCompleted: 5 },
  { id: 8, name: "Girls Hostel - Phase 2", component: "Hostel", district: "Bangalore", state: "Karnataka", agency: "Welfare Project Management Unit", startDate: "2024-01-01", endDate: "2025-03-31", budget: 9000000, utilized: 4500000, progress: 50, status: "Ongoing", phase: "Construction", fundReceived: 5400000, fundPending: 3600000, milestones: 6, milestonesCompleted: 3 },
  { id: 9, name: "GIA Scholarship Disbursement", component: "GIA", district: "Delhi", state: "Delhi", agency: "State Welfare Department", startDate: "2023-07-01", endDate: "2024-06-30", budget: 1500000, utilized: 1500000, progress: 100, status: "Completed", phase: "Completed", fundReceived: 1500000, fundPending: 0, milestones: 2, milestonesCompleted: 2 },
  { id: 10, name: "Adarsh Gram Water Supply Project", component: "Adarsh Gram", district: "Mumbai", state: "Maharashtra", agency: "District Education Board", startDate: "2024-04-01", endDate: "2025-09-30", budget: 5500000, utilized: 1650000, progress: 30, status: "Ongoing", phase: "Planning", fundReceived: 2750000, fundPending: 2750000, milestones: 5, milestonesCompleted: 1 },
];

export const fundAllocation = [
  { component: "Adarsh Gram", allocated: 24000000, utilized: 14250000 },
  { component: "GIA", allocated: 7000000, utilized: 6800000 },
  { component: "Hostel", allocated: 21500000, utilized: 14450000 },
];

export const monthlyProgress = [
  { month: "Jan", projects: 12, funds: 4500000 },
  { month: "Feb", projects: 15, funds: 5200000 },
  { month: "Mar", projects: 18, funds: 6100000 },
  { month: "Apr", projects: 20, funds: 6800000 },
  { month: "May", projects: 22, funds: 7500000 },
  { month: "Jun", projects: 25, funds: 8200000 },
];

export const alerts = [
  { id: 1, type: "warning", message: "Boys Hostel Renovation in Kolkata is 2 months behind schedule", date: "2024-10-01", priority: "High" },
  { id: 2, type: "info", message: "New fund allocation of ₹5Cr approved for Adarsh Gram projects", date: "2024-10-02", priority: "Medium" },
  { id: 3, type: "success", message: "GIA Support for Tribal School completed successfully", date: "2024-09-28", priority: "Low" },
  { id: 4, type: "warning", message: "Budget utilization in Maharashtra below 60% - review required", date: "2024-10-03", priority: "High" },
];

export const publicProjects = [
  { id: 1, name: "Village Rampur Development", lat: 28.6139, lng: 77.2090, status: "Ongoing", completion: 70 },
  { id: 2, name: "Girls Hostel Mumbai", lat: 19.0760, lng: 72.8777, status: "Ongoing", completion: 90 },
  { id: 3, name: "Tribal School Ranchi", lat: 23.3441, lng: 85.3096, status: "Completed", completion: 100 },
  { id: 4, name: "Village Sundara Infrastructure", lat: 26.9124, lng: 75.7873, status: "Ongoing", completion: 40 },
  { id: 5, name: "Community Center Chennai", lat: 13.0827, lng: 80.2707, status: "Ongoing", completion: 90 },
];

export const stateData = [
  {
    state: "Delhi",
    totalProjects: 16,
    completed: 4,
    ongoing: 11,
    delayed: 1,
    totalBudget: 28500000,
    utilized: 19500000,
    agencies: 5,
    components: {
      "Adarsh Gram": 6,
      "GIA": 4,
      "Hostel": 6
    }
  },
  {
    state: "Maharashtra",
    totalProjects: 22,
    completed: 8,
    ongoing: 13,
    delayed: 1,
    totalBudget: 36000000,
    utilized: 25200000,
    agencies: 7,
    components: {
      "Adarsh Gram": 8,
      "GIA": 6,
      "Hostel": 8
    }
  },
  {
    state: "Jharkhand",
    totalProjects: 12,
    completed: 5,
    ongoing: 7,
    delayed: 0,
    totalBudget: 18000000,
    utilized: 16500000,
    agencies: 4,
    components: {
      "Adarsh Gram": 4,
      "GIA": 4,
      "Hostel": 4
    }
  },
  {
    state: "Rajasthan",
    totalProjects: 20,
    completed: 6,
    ongoing: 12,
    delayed: 2,
    totalBudget: 32000000,
    utilized: 19200000,
    agencies: 6,
    components: {
      "Adarsh Gram": 7,
      "GIA": 5,
      "Hostel": 8
    }
  },
  {
    state: "West Bengal",
    totalProjects: 14,
    completed: 4,
    ongoing: 8,
    delayed: 2,
    totalBudget: 22000000,
    utilized: 13200000,
    agencies: 5,
    components: {
      "Adarsh Gram": 5,
      "GIA": 4,
      "Hostel": 5
    }
  },
  {
    state: "Madhya Pradesh",
    totalProjects: 18,
    completed: 7,
    ongoing: 10,
    delayed: 1,
    totalBudget: 26500000,
    utilized: 20500000,
    agencies: 6,
    components: {
      "Adarsh Gram": 6,
      "GIA": 5,
      "Hostel": 7
    }
  },
  {
    state: "Tamil Nadu",
    totalProjects: 25,
    completed: 9,
    ongoing: 15,
    delayed: 1,
    totalBudget: 42000000,
    utilized: 31500000,
    agencies: 8,
    components: {
      "Adarsh Gram": 9,
      "GIA": 7,
      "Hostel": 9
    }
  },
  {
    state: "Karnataka",
    totalProjects: 21,
    completed: 7,
    ongoing: 13,
    delayed: 1,
    totalBudget: 38000000,
    utilized: 27300000,
    agencies: 7,
    components: {
      "Adarsh Gram": 7,
      "GIA": 6,
      "Hostel": 8
    }
  },
];

export const districtData = [
  { district: "Delhi", state: "Delhi", projects: 16, agencies: 5, budget: 28500000, utilized: 19500000, completion: 68 },
  { district: "Mumbai", state: "Maharashtra", projects: 22, agencies: 7, budget: 36000000, utilized: 25200000, completion: 70 },
  { district: "Ranchi", state: "Jharkhand", projects: 12, agencies: 4, budget: 18000000, utilized: 16500000, completion: 92 },
  { district: "Jaipur", state: "Rajasthan", projects: 20, agencies: 6, budget: 32000000, utilized: 19200000, completion: 60 },
  { district: "Kolkata", state: "West Bengal", projects: 14, agencies: 5, budget: 22000000, utilized: 13200000, completion: 60 },
  { district: "Bhopal", state: "Madhya Pradesh", projects: 18, agencies: 6, budget: 26500000, utilized: 20500000, completion: 77 },
  { district: "Chennai", state: "Tamil Nadu", projects: 25, agencies: 8, budget: 42000000, utilized: 31500000, completion: 75 },
  { district: "Bangalore", state: "Karnataka", projects: 21, agencies: 7, budget: 38000000, utilized: 27300000, completion: 72 },
];

export const agencyHistory = [
  { id: 1, agencyId: 1, projectName: "Village Development Phase 1", year: 2023, status: "Completed", delay: 0, rating: 95 },
  { id: 2, agencyId: 1, projectName: "School Infrastructure Upgrade", year: 2022, status: "Completed", delay: 5, rating: 88 },
  { id: 3, agencyId: 2, projectName: "Hostel Block Construction", year: 2023, status: "Completed", delay: 0, rating: 92 },
  { id: 4, agencyId: 3, projectName: "Tribal Welfare Center", year: 2022, status: "Completed", delay: 0, rating: 98 },
  { id: 5, agencyId: 4, projectName: "Rural Road Development", year: 2023, status: "Completed", delay: 10, rating: 82 },
  { id: 6, agencyId: 5, projectName: "Housing Complex Phase 1", year: 2022, status: "Completed", delay: 20, rating: 70 },
];

export const componentPerformance = [
  { component: "Adarsh Gram", totalProjects: 35, completed: 12, ongoing: 21, delayed: 2, avgCompletion: 65 },
  { component: "GIA", totalProjects: 18, completed: 7, ongoing: 10, delayed: 1, avgCompletion: 78 },
  { component: "Hostel", totalProjects: 32, completed: 10, ongoing: 20, delayed: 2, avgCompletion: 68 },
];
