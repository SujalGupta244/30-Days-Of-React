// FUNCTION LEVEL 2
function solveQuadratic(a,b,c){
    let x1 = (-b + Math.sqrt(b*b - 4*a*c))/2*a;
    let x2 = (-b - Math.sqrt(b*b - 4*a*c))/2*a;
    let a1 =x1 ? x1: null;
    let a2 = x2 ? x2 : null; 
    return {x1:a1,x2:a2};
}

function ShowDate(){
    let now = new Date();
    let date = now.getDate() > 10 ? now.getDate() : `0${now.getDate()}`;
    let month = now.getMonth() > 10 ? now.getMonth() : `0${now.getMonth()}`;
    let year = now.getFullYear().toString().slice(2);
    let hour = now.getHours() > 10 ? now.getHours() : `0${now.getHours()}`;
    let min = now.getMinutes() > 10 ? now.getMinutes() : `0${now.getMinutes()}`;
    // console.log(Date());
    console.log(`${date}/${month}/${year} ${hour}:${min}`);
}
// console.log(solveQuadratic(1,4,4));
// console.log(solveQuadratic(1,-1,-2));
ShowDate()

let x = 3;
let y = 4;
function swap(a,b){
    let t = a;
    a = b;
    b = t;
    console.log(`${a} ${b}`);
    // x = a;
    // y = b;
}
// swap(x,y);
// console.log(x,y)


function reverseArr(arr){
    let newArr = [];
    let len = arr.length;
    for(let i = 0;i<len;i++){
        newArr[len-i - 1] = arr[i];
    }
    console.log(newArr);
}

function capitalizeArr(arr){
    let newArr = [];
    for(let i of arr){
        newArr.push(i.charAt(0).toUpperCase() + i.slice(1))
    }
    console.log(newArr);
}

// reverseArr(["a","b","c","d","e"])
// capitalizeArr(["ads","wbg","cwes","ddfwe","esdfwe"])
// capitalizeArr(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'])
const arr = ["a","b","c","d","e"];
function addItem(item){
    arr[arr.length ] = item;
    return arr;
}

// console.log(addItem("f"));

function removeItem(ind){
    if(ind < arr.length){
        for(let i = ind ;i<arr.length;i++){
            arr[i] = arr[i+1];
        }
        arr.pop()
    }else{
        console.log("Index is out of the array");
    }
    return arr;
}

// console.log(removeItem(2))

function evenAndOdds(num){
    let even = 0,odd = 0;
    for(let i = 0;i <= num;i++){
        if(i%2 == 0){
            even++;
        }else{
            odd++;
        }
    }
    console.log(`The number of odds are ${odd}.\nThe number of evens are ${even}.`);
}

// evenAndOdds(10)

function sum(){
    let sum = 0
    for(let i of arguments){
        sum += i;
    }
    console.log(sum);
}

// sum(1, 2, 3, 4,5)

function userIdGenerator(){
    let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']
    let code = '';
    for(let i =0;i<7;i++){
        code += arr[(parseInt(Math.floor(Math.random()* arr.length)))]
    }
    // console.log(Math.random().toString(16).slice(2,9));
    console.log(code);
}

// userIdGenerator()