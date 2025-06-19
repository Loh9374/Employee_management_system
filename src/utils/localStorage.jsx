const employee = [
  {
    id: 1,
    name: "arjun",
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    role: "employee",
    taskSummary: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Update Product List",
        description: "Add new products to the inventory",
        date: "2025-06-18",
        category: "Inventory",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Discuss weekly progress with the team",
        date: "2025-06-17",
        category: "Meetings",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Submit Sales Report",
        description: "Send the sales report to the manager",
        date: "2025-06-16",
        category: "Reporting",
        active: false,
        new: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    name: "shiva",
    firstName: "Shivam",
    email: "user2@example.com",
    password: "123",
    role: "employee",
    taskSummary: {
      active: 1,
      new: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Client Follow-up",
        description: "Follow up with clients on pending issues",
        date: "2025-06-15",
        category: "Client Relations",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review the code for the new module",
        date: "2025-06-14",
        category: "Development",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Bugs",
        description: "Resolve bugs reported in the ticket system",
        date: "2025-06-13",
        category: "Bug Fixing",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy App",
        description: "Deploy the latest version to staging",
        date: "2025-06-12",
        category: "Deployment",
        active: false,
        new: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    name: "ram",
    firstName: "Ramesh",
    email: "user3@example.com",
    password: "123",
    role: "employee",
    taskSummary: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create Mockups",
        description: "Design mockups for the mobile app",
        date: "2025-06-11",
        category: "Design",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Interview Candidate",
        description: "Take interview for frontend developer role",
        date: "2025-06-10",
        category: "HR",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare Slides",
        description: "Make slides for the monthly presentation",
        date: "2025-06-09",
        category: "Presentation",
        active: false,
        new: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    name: "sneha",
    firstName: "Snehalata",
    email: "user4@example.com",
    password: "123",
    role: "employee",
    taskSummary: {
      active: 1,
      new: 0,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Check Server Logs",
        description: "Inspect logs for downtime alerts",
        date: "2025-06-08",
        category: "Operations",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Database",
        description: "Tune SQL queries for performance",
        date: "2025-06-07",
        category: "Database",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Write API Docs",
        description: "Document the REST APIs for integration",
        date: "2025-06-06",
        category: "Documentation",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Test Payment Gateway",
        description: "Ensure the payment system works correctly",
        date: "2025-06-05",
        category: "QA",
        active: false,
        new: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 5,
    email: "admin@example.com",
    password: "123",
    role: "admin"
  }
];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employee));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return {
        employees,admin
    }
        
    
}