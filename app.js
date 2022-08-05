"use strict";
class Department {
    // constructor(id: string, name: string) {
    //   this.id = id;
    //   this.name = name;
    // }
    // Shortcut, short initialization (almost like lombok)
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
    } // readonly - final in java
    describe() {
        // Extra type saftey, which will mandate a 'name' property
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, adminds) {
        super(id, 'Information Technology');
        this.adminds = adminds;
    }
    addEmployee(employee) {
        if (employee === 'pdibenedetto')
            return;
        else
            this.employees.push(employee);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReports(report) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment('d1', []);
accounting.addEmployee('Mike');
accounting.addEmployee('Johnny');
accounting.describe();
accounting.printReports();
const accountingCopy = { describe: accounting.describe };
console.log(accounting);
// accountingCopy.describe();
accounting.addReports('Reporting an issue');
const itDepartment = new ITDepartment('d2', ['pdibenedetto']);
itDepartment.addEmployee('Mike');
itDepartment.addEmployee('Johnson');
itDepartment.addEmployee('pdibenedetto');
itDepartment.describe();
itDepartment.printEmployeeInformation();
console.log(itDepartment);
//# sourceMappingURL=app.js.map