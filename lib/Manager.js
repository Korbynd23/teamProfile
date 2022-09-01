const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
    super(name, id, email, "Manager")
    this.officeNum = officeNum
    }

    getRole() {
        return "Manager"
    }

    getOfficeNum() {
        return this.officeNum
    }
}

module.exports = Manager

// console.log(test)