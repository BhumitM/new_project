export const agencies = [
  { id: 1, name: "State Welfare Department", type: "Implementing", district: "Delhi", projects: 15, contactPerson: "Rajesh Kumar", phone: "+91-9876543210", email: "rajesh.kumar@gov.in", status: "Active" },
  { id: 2, name: "District Education Board", type: "Executing", district: "Mumbai", projects: 8, contactPerson: "Priya Sharma", phone: "+91-9876543211", email: "priya.sharma@gov.in", status: "Active" },
  { id: 3, name: "Tribal Welfare Council", type: "Implementing", district: "Ranchi", projects: 12, contactPerson: "Amit Verma", phone: "+91-9876543212", email: "amit.verma@gov.in", status: "Active" },
  { id: 4, name: "Rural Development Agency", type: "Executing", district: "Jaipur", projects: 20, contactPerson: "Sunita Patel", phone: "+91-9876543213", email: "sunita.patel@gov.in", status: "Active" },
  { id: 5, name: "State Housing Board", type: "Implementing", district: "Kolkata", projects: 6, contactPerson: "Manoj Singh", phone: "+91-9876543214", email: "manoj.singh@gov.in", status: "Inactive" },
  { id: 6, name: "District Tribal Office", type: "Executing", district: "Bhopal", projects: 10, contactPerson: "Kavita Rao", phone: "+91-9876543215", email: "kavita.rao@gov.in", status: "Active" },
  { id: 7, name: "Education Infrastructure Corp", type: "Implementing", district: "Chennai", projects: 18, contactPerson: "Ravi Naidu", phone: "+91-9876543216", email: "ravi.naidu@gov.in", status: "Active" },
  { id: 8, name: "Welfare Project Management Unit", type: "Executing", district: "Bangalore", projects: 14, contactPerson: "Anjali Desai", phone: "+91-9876543217", email: "anjali.desai@gov.in", status: "Active" },
];

export const projects = [
  { id: 1, name: "Adarsh Gram Development - Village Rampur", component: "Adarsh Gram", district: "Delhi", state: "Delhi", agency: "State Welfare Department", startDate: "2024-01-15", endDate: "2025-01-15", budget: 5000000, utilized: 3500000, progress: 70, status: "Ongoing", phase: "Construction" },
  { id: 2, name: "Girls Hostel Construction - Block A", component: "Hostel", district: "Mumbai", state: "Maharashtra", agency: "District Education Board", startDate: "2023-06-01", endDate: "2024-12-31", budget: 8000000, utilized: 7200000, progress: 90, status: "Ongoing", phase: "Final Inspection" },
  { id: 3, name: "GIA Support for Tribal School", component: "GIA", district: "Ranchi", state: "Jharkhand", agency: "Tribal Welfare Council", startDate: "2023-04-10", endDate: "2024-04-10", budget: 3000000, utilized: 3000000, progress: 100, status: "Completed", phase: "Completed" },
  { id: 4, name: "Adarsh Gram Infrastructure - Village Sundara", component: "Adarsh Gram", district: "Jaipur", state: "Rajasthan", agency: "Rural Development Agency", startDate: "2024-03-01", endDate: "2025-06-30", budget: 6500000, utilized: 2600000, progress: 40, status: "Ongoing", phase: "Planning" },
  { id: 5, name: "Boys Hostel Renovation", component: "Hostel", district: "Kolkata", state: "West Bengal", agency: "State Housing Board", startDate: "2024-02-01", endDate: "2024-11-30", budget: 4500000, utilized: 2250000, progress: 50, status: "Delayed", phase: "Construction" },
  { id: 6, name: "GIA Educational Support Program", component: "GIA", district: "Bhopal", state: "Madhya Pradesh", agency: "District Tribal Office", startDate: "2023-08-15", endDate: "2024-08-15", budget: 2500000, utilized: 2300000, progress: 92, status: "Ongoing", phase: "Final Review" },
  { id: 7, name: "Adarsh Gram Community Center", component: "Adarsh Gram", district: "Chennai", state: "Tamil Nadu", agency: "Education Infrastructure Corp", startDate: "2023-11-01", endDate: "2024-10-31", budget: 7000000, utilized: 6300000, progress: 90, status: "Ongoing", phase: "Final Inspection" },
  { id: 8, name: "Girls Hostel - Phase 2", component: "Hostel", district: "Bangalore", state: "Karnataka", agency: "Welfare Project Management Unit", startDate: "2024-01-01", endDate: "2025-03-31", budget: 9000000, utilized: 4500000, progress: 50, status: "Ongoing", phase: "Construction" },
  { id: 9, name: "GIA Scholarship Disbursement", component: "GIA", district: "Delhi", state: "Delhi", agency: "State Welfare Department", startDate: "2023-07-01", endDate: "2024-06-30", budget: 1500000, utilized: 1500000, progress: 100, status: "Completed", phase: "Completed" },
  { id: 10, name: "Adarsh Gram Water Supply Project", component: "Adarsh Gram", district: "Mumbai", state: "Maharashtra", agency: "District Education Board", startDate: "2024-04-01", endDate: "2025-09-30", budget: 5500000, utilized: 1650000, progress: 30, status: "Ongoing", phase: "Planning" },
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
