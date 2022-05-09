const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

users.Sujal = {
  email: 'sujal@sujal.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 19,
  isLoggedIn: false,
  points: 0
}

let maxSkills = users.Alex.skills.length;
let name, count = 0, pointsUser = 0;

for(let user in users){
  const mern = (users[user].skills).join("").toLowerCase();
  if(users[user].skills.length > maxSkills){
    maxSkills = users[user].skills.length;
    name = user;
  }
  if(users[user].isLoggedIn == true){
    count++;
  }
  if(users[user].points >= 50){
    pointsUser++;
  }
  if(mern.includes("mongodb") && mern.includes("express") && mern.includes("react") && mern.includes("node")){
    // console.log(user);
  }
}
// console.log(`${name} has ${maxSkills} skills`);
// console.log(count , pointsUser);
// console.log(Object.keys(users));
console.log(Object.values(users));
