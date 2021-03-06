const fs = require('fs');
const path = require('path');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const PROFILE_HTML_FILE_NAME = 'team_profile.html';
const utility = {

    createProfileHtmlHeader: function() {
        const cssStyle = loadStyles();
        const headerText = `       
        <head>
        <title>Team Profile</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous" />
        <style>
         ${cssStyle}
        </style>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </head>`;
        return headerText;
    },
    createEmployeeFromAnswer: function(answer) {
       const type = answer.memberTypeChoice;
       switch(type) {
           case 'Intern':
               return new Intern(answer.memberName, answer.memberId, answer.emailAddress, answer.internSchool);
           case 'Engineer':
            return new Engineer(answer.memberName, answer.memberId, answer.emailAddress, answer.engineerGithub);    
       }
    },
    createManagerEmployee: function(answer) {
        return new Manager(answer.managerName, answer.employeeId, answer.emailAddress, answer.officeNumber);
    },
    createEmployeeCards: function(employeeList) {
        var htmlText = '';
        employeeList.forEach((employee) => htmlText += makeEmployeeHtml(employee));
        return htmlText;
    },
    makeTeamProfileContent: function makeTeamProfileS(memberCards) {
        return `
        <div class="container-fluid">
            <header class="jumbotron"><h1>My Team</h1></header>
            <div class="employee">                
                   ${memberCards}
            </div>
        </div>    
        `;
    },
    writeProfileToFile(profileHtmlText) {
        const profileHtmlPath = path.join(__dirname, '..', '/dist/' + PROFILE_HTML_FILE_NAME);
        fs.writeFile(profileHtmlPath, profileHtmlText, error => {
            if (error) {
                console.error(error);
                return;
            }
        });
    }
};

function loadStyles() {
    const cssPath = path.join(__dirname, '..', '/dist/style.css');
    return fs.readFileSync(cssPath).toString();
}

function makeEmployeeHtml(employee) {
    var lastRow = getLastRow(employee);  
    return `
        <div class="card shadow p-3 mb-5 bg-body rounded">
            <div class="card-header">
                <p class="name">${employee.getName()}</p>
                <p class="title">
                    <i class="fa ${getIcon(employee)} fa-lg" aria-hidden="true">&nbsp;</i>${employee.getRole()}
                </p>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></li>
                    <li class="list-group-item">${lastRow}</li>
                </ul>
            </div>    
        </div>`;
}

function getLastRow(employee) {

    switch(employee.getRole()) {
        case 'Manager':
            return `Officenumber: ${employee.officeNumber}`;
        case 'Intern':
            return `School: ${employee.getSchool()}`;
        case 'Engineer':
            return `GitHub: <a href="https://www.github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;    
    }
}

function getIcon(employee) {

    switch(employee.getRole()) {
        case 'Manager':
            return `fa-mug-hot`;
        case 'Intern':
            return `fa-user-graduate`;
        case 'Engineer':
            return `fa-glasses`;    
    }
}



module.exports = utility;