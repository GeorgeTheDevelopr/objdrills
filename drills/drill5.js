'use strict';

let jobArr = [ 
  { name: 'Derrick',
    jobTitle: 'Device Repair Technician'}
  , 
  {boss: 'Derrick',
    name: 'Tyric', 
    jobTitle: 'Musician'}
  ,
  { boss: 'Derrick',
    name: 'Adonis',
    jobTitle: 'Musician' }
];


function people() {
  for (let i = 0; i < jobArr.length; i++) { 
    if (jobArr[i].boss) { 
      console.log(`${jobArr[i].jobTitle} ${jobArr[i].name} reports to ${jobArr[i].boss}`);
    } 
    else {
      console.log(`${jobArr[i].jobTitle} ${jobArr[i].name} doesn't report to anybody.`);
    } 
  } 
}

people();
