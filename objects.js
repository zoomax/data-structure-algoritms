const employee = {
  // json notation object
  name: 'Hazem',
  last_name: 'Radwan',
  age: 30,
  salary: '30k',
  getFullName() {
    return `${this.name} ${this.last_name}`
  },
  getSalary() {
    return this.salary()
  },
}

employee['department'] = 'IT' // adding new key-value pair to the object

delete employee.department

const EmployeeKeys = Object.keys(employee) // return keys [name , last_name , age , salary , getFullName , getSalary]
const employeeValues = Object.values(employee) //  return values
const employeeMap = Object.entries(employee) // converts objects to maps

for (const [key, value] of employeeMap) {
  // iterating over employeeMap
  console.log(`${key} : ${value}`)
}
