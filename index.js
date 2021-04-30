const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
// team manager’s name, employee ID, email address, and office number
const questions = [{
   type: 'input',
   name: 'managerName',
   message: 'Enter manager\'s name',
   validate: (name) => {
                valid = name && name.length > 2;
                if (!valid) {
                    return 'An employee name should not be less than 2 letters long';
                }
                return true;
            }
},
{
    type: 'input',
    name: 'employeeId',
    message: 'Enter Employee Id',
    validate: (id) => {
                valid = /^\d+$/.test(id)
                if (!valid) {
                    return 'Employee Id must be a valid number';
                }
                return true;
    }
 },
 {
    type: 'input',
    name: 'emailAddress',
    message: 'Enter Employee Email Address',
    validate: (email) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (!valid) {
                return 'Please enter a valid email address';
                }
                return true;
        }    
    },
 {
    type: 'input',
    name: 'officeNumber',
    message: 'Enter Employee Office Number',
    validate: (id) => {
        valid = /^\d+$/.test(id)
        if (!valid) {
            return 'Employee Office Number must be a valid number';
        }
        return true;
    }
 }];

 function processManagerAnswers(answers) {
    // var manager = new Manager(answers['managerName'], answers['employeeId'],
    //                           answers['emailAddress'], answers['officeNumber']);
    //console.log(manager);
 }

 inquirer.prompt(questions)
         .then((answers) => processManagerAnswers(answers))
         .catch((error) => {
            console.log(error);
 });

