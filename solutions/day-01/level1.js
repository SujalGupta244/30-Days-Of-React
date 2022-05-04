const mixedDataTypes= ["dssdfds",23,true,343.7,`ssdfsl`,false]
let count;
let newArr = [];
const Companies = [ "Facebook", 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] ;
for(let i = 0;i<Companies.length;i++){
  for(let j = 0;j<Companies[i].split("").length;j++){
    if(Companies[i].split("")[j] == 'o'){
        count++;
        if(count > 1){
          newArr.push(Companies[i]);
          break;
        }
      }
      // console.log(Companies[i]);
  }
  count = 0;

}  

// console.log(newArr);
// console.log(Companies.sort());
// console.log(Companies.reverse());
// console.log(`${Companies.join(", ")} are big IT companies`)
// console.log(`First element "${webTechs[0]}"`)
// console.log(`Last element "${webTechs[webTechs.length - 1]}"`)
// console.log(`Middle element "${webTechs[parseInt(webTechs.length/2)]}"`)

// console.log(Companies.slice(0,3))
// if(Companies.length %2 == 0){
//   console.log(Companies.slice(Companies.length/2))
// }else{
//   console.log(Companies.slice((Companies.length/2 )+ 1))
// }

// console.log(Companies.slice(Companies.length/2,(Companies.length/2) + 1))
// Companies.shift()
// Companies.splice(Companies.length/2,1)
Companies.splice(0,Companies.length)
console.log(Companies);
// cd Desktop/HTML\ Instructions\ file/Javascript\ Frameworks/ReactJS\ Learning/30-Days-Of-React-master/solutions/day-01