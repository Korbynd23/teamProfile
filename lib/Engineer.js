const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
    super(name, id, email, "Engineer")
    this.gitHub = gitHub
    }

    getRole() {
        return "Engineer"
    }

    getGitHub() {
        return this.gitHub
    }
}

module.exports = Engineer

// const test = new Engineer('Korbyn', 3, 'test@gmail.com', 'korbynd23')
// console.log(test)
