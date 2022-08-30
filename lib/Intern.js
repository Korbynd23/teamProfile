const Employee = require("./Employee.js")

class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email, "Intern")
    this.school = school
    }

    getRole() {
    return "Intern"
    }
    getSchool() {
    return this.school
    }

}

module.exports = Intern

// const test = new Intern('Anna', 5, 'test@gmail.com', 'WVU')
// console.log(test)
