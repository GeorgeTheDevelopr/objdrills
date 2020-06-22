'use strict';

let jobArr = [
  {
    name: 'Derrick',
    jobTitle: 'Device Repair Technician'
  }
  , 
  {
    name: 'Tyric',
    jobTitle: 'Musician'
  }
  ,
  {
    name: 'Adonis',
    jobTitle: 'Musician'
  }
];

function people() {
  for (let i = 0; i < jobArr.length; i++) {
    console.log(`Name: ${jobArr[i].name} Job Title: ${jobArr[i].jobTitle}`);
  }
}

people();