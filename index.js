const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const teamMembers = [];
const managerQuestions = [{
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
 const teamMemberQuestion = [{
    type: 'list',
    name: 'memberTypeChoice',
    message: 'Do you want to enter an Engineer or an Intern',
    choices: [{name: 'Intern'}, {name: 'Engineer'}]
 },
  {
    type: 'input',
    name: 'engineerName',
    message: 'Enter Engineer\'s name',
    when: function(option) {
        return option['memberTypeChoice'] === 'Engineer'
    }
 },
 {
    type: 'input',
    name: 'engineerId',
    message: 'Enter Engineer\'s Id',
    when: function(option) {
        return option['memberTypeChoice'] === 'Engineer'
    }
 },
 {
    type: 'input',
    name: 'engineerGithub',
    message: 'Enter Engineer\'s Github user name',
    when: function(option) {
        return option['memberTypeChoice'] === 'Engineer'
    }
 },

 //intern’s name, ID, email, and school
 {
    type: 'input',
    name: 'internName',
    message: 'Enter Intern\'s name',
    when: function(option) {
        return option['memberTypeChoice'] === 'Intern'
    }
 },
 {
    type: 'input',
    name: 'internId',
    message: 'Enter Intern Id',
    when: function(option) {
        return option['memberTypeChoice'] === 'Intern'
    }
 },
 {
    type: 'input',
    name: 'internSchool',
    message: 'Enter Intern\'s school',
    when: function(option) {
        return option['memberTypeChoice'] === 'Intern'
    }
 },
 {
    type: 'confirm',
    name: 'confirmContinue',
    message: 'Want to enter another team member (just press enter for YES)?',
    default: true,
  }
];

 function processManagerAnswers(answers) {
    var manager = new Manager(answers['managerName'], answers['employeeId'],
                              answers['emailAddress'], answers['officeNumber']);

    addTeamMembers();
 }

 function addTeamMembers() {
    inquirer.prompt(teamMemberQuestion)
    .then((ans) => {
        teamMembers.push(ans);
        if (ans['confirmContinue']) {            
            addTeamMembers();
        } else {
            console.log(teamMembers);
        }
    });
 }

 inquirer.prompt(managerQuestions)
         .then((answers) => processManagerAnswers(answers))
         .catch((error) => {
            console.log(error);
 });

