"use strict";
const elevatedEmployee = {
    name: 'Paul',
    priviliges: ['aws-ec2'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { // type guard example        
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    console.log('Privileges : ' + emp.priviliges);
}
//# sourceMappingURL=app.js.map