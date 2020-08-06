const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));


  
/*const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;
const fs = require('fs');
const generatePage = require('./src/page-template.js');

//const name = profileDataArgs[0];          seconde
//const github = profileDataArgs[1];
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('==============');

    profileDataArr.forEach(profileItem => console.log(profileItem));
};
    
printProfileData(profileDataArgs);*/

// generate page function moved

//console.log(name, github);
//console.log(generatePage(name, github));      third

//4TH COMMENT ALL OUT fsfunc & 3const above

/*fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!')
});*/