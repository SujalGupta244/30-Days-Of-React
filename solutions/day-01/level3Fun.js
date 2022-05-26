//  FUNCTION LEVEL 3

function userIdGeneratedByUser(){
    let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']

    let noCh = prompt("Enter the number of characters : ");
    let noId = prompt("Enter the no of Ids : ");
    let code = '';
    for(let i = 0;i<noId;i++){
        for(let j = 0;j<noCh;j++){
            code += arr[(Math.floor(Math.random() * arr.length))]
        }
        console.log(code);
        code = '';
    }
}

// userIdGeneratedByUser();


function generateColors(str,num){
    let arr = [];
    if(str == 'hexa'){
        for(let i = 0;i<num;i++){
            arr.push(`#${Math.random().toString(16).slice(2,8)}`)
        }
        console.log(arr);
    }else if(str == 'rgb'){
        for(let i = 0;i<num;i++){
            arr.push(`rgb(${Math.floor(Math.random()* 255)},${Math.floor(Math.random()* 255)},${Math.floor(Math.random()* 255)})`)
        }
        console.log(arr);
    }else{
        console.log("this is not a color format");
    }
}

// generateColors('rgb',3)
// generateColors('hexa',2)


function shuffleArray(arr){
    let newArr = [];
    let index = arr[Math.floor(Math.random()*arr.length)] < arr.length ? arr[Math.floor(Math.random()*arr.length)] : 0;
    while(newArr.length != arr.length){
        if(!newArr.includes(arr[index]) && index < arr.length){
            newArr.push(arr[index]);
        }else{
            index = arr[Math.floor(Math.random()*arr.length)] < arr.length ? arr[Math.floor(Math.random()*arr.length)] : 0;
            // newArr.push(arr[index]);
        }
        // newArr.push(arr[index]);
        console.log(arr[index],index);
    }
    console.log(newArr);
}

// shuffleArray([1,2,3,4]);


function factorial(n){
    let f = 1;
    while(n > 0){
        f*=n;
        n--;
    }
    return f;
}

// console.log(factorial(5));

function isEmpty(){
    if(arguments.length == 0){
        console.log("Empty");
    }else{
        console.log("Not Empty");
    }
}

// isEmpty(23)

function average(n){
    let sum = 0,avg;
    for(let i of n){
        if(isNaN(i)){
            // console.log("Array has elements other than number");
            return "Array has elements other than number";
            // break;
        }else{
            sum += i;
        }
    }
    avg = sum/n.length;
    return avg;
}


// console.log(average([1,2,3,5]));

  
const [x, y] = [2, (value) => value ** 2]


const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}
  

function getPersonInfo(person){
    const {firstName,lastName,country,age,job,skills,languages} = person;
    console.log(`${person.firstName} ${person.lastName} lives in ${person.country}. He is  ${person.age} years old. He is an ${person.job}. He teaches ${person.skills}. He speaks ${person.languages.slice(0,2)} and a little bit of ${person.languages[person.languages.length - 1]}
    `);
    console.log(`${firstName} ${lastName} lives in ${country}. He is  ${age} years old. He is an ${job}. He teaches ${skills}. He speaks ${languages.slice(0,2)} and a little bit of ${languages[languages.length - 1]}
    `);
}

// getPersonInfo(person)


const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
}

const copiedUser = { ...user, title: 'instructor' }
// console.log(copiedUser)


let products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

let sum = 0;

products.forEach(pr =>{
    let price = (isNaN(parseFloat(pr.price)) ? 0 : pr.price )
    sum = sum + price;
    // console.log(`the price of ${pr.product} is ${[' ','',null, undefined].indexOf(pr.price) == -1 ? pr.price : 'unknown'}.`);
})

// console.log(sum);

const prices = products.map(pro =>{
    return pro.price;
})
.filter(pro => {
    return !isNaN(parseFloat(pro));
})
.reduce((prev,curr)=>{
    return prev + curr;
})

// console.log(prices);

products = products.filter(pro =>{
    return  !isNaN(parseFloat(pro.price))
})

// console.log(products);


const price = products.reduce((prev,cur) =>{
    return prev + cur.price ;
},0)

const notPrice = products.find(pro =>{
    return isNaN(parseFloat(pro.price));
})

// console.log(price);
// console.log(notPrice);

// class Person {
//     constructor(firstName, lastName) {
//       console.log(this) // Check the output from here
//       this.firstName = firstName
//       this.lastName = lastName
//     }
//   }
  
//   const per = new Person()
//   per.firstName = 'sujal'
//   per.lastName = 'gupta'
  
//   console.log(per)


class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
    static favoriteSkill() {
      const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
      const index = Math.floor(Math.random() * skills.length)
      return skills[index]
    }
    static showDateTime() {
      let now = new Date()
      let year = now.getFullYear()
      let month = now.getMonth() + 1
      let date = now.getDate()
      let hours = now.getHours()
      let minutes = now.getMinutes()
      if (hours < 10) {
        hours = '0' + hours
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
  
      let dateMonthYear = date + '.' + month + '.' + year
      let time = hours + ':' + minutes
      let fullTime = dateMonthYear + ' ' + time
      return fullTime
    }
  }
  
//   console.log(Person.favoriteSkill())
//   console.log(Person.showDateTime())


class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city)
        this.gender = gender
    }

    saySomething() {
        console.log('I am a child of the person class')
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`

        let formattedSkills = skills ? `He knows ${skills}` : ''
        let pronoun = this.gender == 'Male' ? 'He' : 'She'

        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
}
}

const s1 = new Student(
'Asabeneh',
'Yetayeh',
250,
'Finland',
'Helsinki',
'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)

// console.log(s1.saySomething())
// console.log(s1.getFullName())
console.log(s1.getPersonInfo())

// console.log(s2.saySomething())
// console.log(s2.getFullName())
// console.log(s2.getPersonInfo())