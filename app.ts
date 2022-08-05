class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  // constructor(id: string, name: string) {
  //   this.id = id;
  //   this.name = name;
  // }

  // Shortcut, short initialization (almost like lombok)
  constructor(private readonly id: string, public name: string) {} // readonly - final in java

  describe(this: Department) {
    // Extra type saftey, which will mandate a 'name' property
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {

  constructor(id: string, public adminds: string[]) {
    super(id, 'Information Technology')
  }

  addEmployee(employee: string): void {
    if (employee === 'pdibenedetto') return
    else this.employees.push(employee)
  }

}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
  }

  addReports(report: string) {
    this.reports.push(report)
  }

  printReports() {
    console.log(this.reports)
  }
}

const accounting = new AccountingDepartment('d1', []);
accounting.addEmployee('Mike')
accounting.addEmployee('Johnny')
accounting.describe();
accounting.printReports();


const accountingCopy = { describe: accounting.describe };
console.log(accounting);
// accountingCopy.describe();
accounting.addReports('Reporting an issue')


const itDepartment = new ITDepartment('d2', ['pdibenedetto'])
itDepartment.addEmployee('Mike')
itDepartment.addEmployee('Johnson')
itDepartment.addEmployee('pdibenedetto')
itDepartment.describe()
itDepartment.printEmployeeInformation()
console.log(itDepartment)
