// Sample data for Array Data Transformation Challenge
// Use this employee dataset to practice your array manipulation skills

const employees = [
  { name: "Alice Johnson", department: "Engineering", salary: 95000, years: 3, email: "alice@techcorp.com" },
  { name: "Bob Smith", department: "Marketing", salary: 65000, years: 1, email: "bob@techcorp.com" },
  { name: "Carol Davis", department: "Engineering", salary: 120000, years: 5, email: "carol@techcorp.com" },
  { name: "David Wilson", department: "Sales", salary: 70000, years: 2, email: "david@techcorp.com" },
  { name: "Eve Brown", department: "Marketing", salary: 80000, years: 4, email: "eve@techcorp.com" },
  { name: "Frank Miller", department: "Engineering", salary: 88000, years: 2, email: "frank@techcorp.com" },
  { name: "Grace Lee", department: "Sales", salary: 75000, years: 3, email: "grace@techcorp.com" },
  { name: "Henry Garcia", department: "Engineering", salary: 110000, years: 6, email: "henry@techcorp.com" },
  { name: "Iris Chen", department: "Marketing", salary: 68000, years: 1, email: "iris@techcorp.com" },
  { name: "Jack Thompson", department: "Sales", salary: 82000, years: 4, email: "jack@techcorp.com" }
];

// Additional challenge data
const projects = [
  { id: 1, name: "Website Redesign", department: "Marketing", budget: 50000, status: "completed" },
  { id: 2, name: "Mobile App", department: "Engineering", budget: 120000, status: "in-progress" },
  { id: 3, name: "Sales Dashboard", department: "Sales", budget: 30000, status: "planned" },
  { id: 4, name: "API Integration", department: "Engineering", budget: 80000, status: "completed" },
  { id: 5, name: "Customer Portal", department: "Engineering", budget: 100000, status: "in-progress" }
];

// Export for use in your solutions
// module.exports = { employees, projects };

/* 
CHALLENGE TASKS:
1. Find High Earners - Return array of employees earning over $75,000
2. Department Summary - Create object showing average salary by department  
3. Senior Staff - Get names of employees with 3+ years experience
4. Total Payroll - Calculate total salary cost for all employees
5. Promotion Candidates - Find employees in Engineering with 2+ years making under $100k
*/ 

//Task 1: I use .filter to pick out only entries matching the criteria from the original array of employees and place them into a new array which is returned in the log -NM 10/22
//
const HighEarners = employees.filter(emp => emp.salary > 75000);
console.log("High Earners: ",HighEarners);

//Task 2: We create an object and have the object contain the output of our .reduce statement that uses an empty array and adds entries containing the department names and the averages of those departments salaries by sorting through the departments and keeping a sum of the salaries and a count of employees and dividing those. -NM 10/22
//

const DeptSummary = Object.fromEntries(
  Object.entries(
    employees.reduce((acc, { department, salary }) => {
      (acc[department] ??= { total: 0, count: 0 });
      acc[department].total += salary;
      acc[department].count++;
      return acc;
    }, {})
  ).map(([dept, { total, count }]) => [dept, total / count])
);
console.log("Department Average Salary:",DeptSummary);

//Task 3: Similarly to Task 1, I use .filter to sort employees to only those with 3 or more years, then I use .map to make sure the array returned only contains the names of the empoyees
//
const SeniorStaff = employees
    .filter(emp => emp.years >= 3)
    .map(emp => emp.name)
;
console.log("Senior Staff:",SeniorStaff);

//Task 4: I use .reduce to sort through each entry of the employees array, taking the salary from each and adding it to the sum. I return it through the console. - NM 10/22
//
const TotalPayroll = employees.reduce((sum,emp) => sum += emp.salary,0);
console.log("Total Payroll: $"+TotalPayroll);

//Task 5: We use filter and && to sort through 2 different criteria, years and salary, returning an array of promotion candidates
//
const PromoCandidates = employees.filter(
    emp =>
    emp.years >= 2 &&
    emp.salary < 100000
);
console.log("Promotion Candidates:",PromoCandidates);
