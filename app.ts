class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  // constructor(id: string, name: string) {
  //   this.id = id;
  //   this.name = name;
  // }

  // Shortcut, short initialization (almost like lombok)
  constructor(private id: string, public name: string){}

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

const accounting = new Department("Accounting");
accounting.describe();

const accountingCopy = { describe: accounting.describe };
console.log(accounting);
// accountingCopy.describe();
