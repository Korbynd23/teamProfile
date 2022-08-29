const inquirer = require("inquirer")
const fs = require("fs")

const Employee = require("./classes/Employee.js")
const Engineer = require("./classes/Engineer.js")
const Intern = require("./classes/Intern.js")
const Manager = require("./classes/Manager.js")

const employeeBucket = []
// maybe dont need bucket^^


const init = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Manager name",
            name: "managerName"

        },
        {
            type: "input",
            message: "Enter ID",
            name: "managerId"

        },
        {
            type: "input",
            message: "Enter email",
            name: "managerEmail"

        },
        {
            type: "input",
            message: "Enter Manager office number",
            name: "managerOfficeNum"

        },
    ]).then((managerData) => {
        const { managerName, managerId, managerEmail, managerOfficeNum } = managerData
        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNum)
        employeeBucket.push(manager)
        // console.log(manager)
        anotherEmployee()
    })
}
const anotherEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add an employee?",
            choices: [
                "Engineer",
                "Intern",
                "No, I'm finished"
            ],
            name: "employeeAdd",

        }
    ]).then((newCase) => {
        switch (newCase.employeeAdd) {
            case "Engineer":
                addEngineer()
                break;
            case "Intern":
                addIntern()
                break;
            case "No, I'm finished":
                pushNewEmployee()
                console.log(employeeBucket)
                console.log("Employee(s) created")
        }
    })
}

const addEngineer = () => {
    console.log("made it to engineer")
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter engineers name",
            name: "engineerName"

        },
        {
            type: "input",
            message: "Enter new engineer employee ID",
            name: "engineerId"

        },
        {
            type: "input",
            message: "Enter new engineer email",
            name: "engineerEmail"

        },
        {
            type: "input",
            message: "Enter engineers GitHub username",
            name: "engineerGit"

        },
    ]).then((engineerData) => {
        const { engineerName, engineerId, engineerEmail, engineerGit } = engineerData
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGit)
        employeeBucket.push(engineer)
        // console.log(engineer)
        anotherEmployee()
    })
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter interns name",
            name: "internName"

        },
        {
            type: "input",
            message: "Enter new intern employee ID",
            name: "internId"

        },
        {
            type: "input",
            message: "Enter new intern email",
            name: "internEmail"

        },
        {
            type: "input",
            message: "Name of school the new intern attends",
            name: "internSchool"

        },
    ]).then((internData) => {
        const { internName, internId, internEmail, internSchool } = internData
        const intern = new Intern(internName, internId, internEmail, internSchool)
        // console.log(intern)
        employeeBucket.push(intern)
        anotherEmployee()

    })
}

const pushNewEmployee = () => {

}

// // const fireHtml = () => {
//     //for each thing do card for string literals

// }

//if else send to switch case engineer/ fire prompt. if finish fire generate html
//three more function 1. intern 2.engineer 3.fire html
// create a pushEmployee()

init()