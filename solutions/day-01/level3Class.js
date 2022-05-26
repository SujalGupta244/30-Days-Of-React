ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics{
    constructor(arr){
        this.arr = arr;
    }

    count(){
        let count = 0;
        for(let i of this.arr){
            count++;
        }
        return count;
    }
    sum(){
        let sum = 0;
        for(let i of this.arr){
            sum+= i;
        }
        return sum;
    }
    min(){
        let min = this.arr[0];
        for(let i of this.arr){
            if(i< min){
                min = i;
            }
        }
        return min;
    }
    max(){
        let max = this.arr[0];
        for(let i of this.arr){
            if(i > max){
                max = i;
            }
        }
        return max;
    }

    range(){
        return this.max() - this.min();
    }

    mean(){
        return Math.floor(this.sum()/this.count());
    }

    median(){
        this.arr = this.arr.sort();
        let med = 0;
        if(this.count()%2 != 0){
            med = this.arr[Math.floor(this.count()/2)]
        }else{
            return `${this.arr[Math.floor(this.count()/2)]} ,${this.arr[Math.floor(this.count()/2)]}`
        }
        return med;
    }

    mode(){
        this.arr = this.arr.sort();
        let ele = this.arr[0];
        let obj = {count : 0};
        let count = 1;
        for(let i = 1;i < this.arr.length;i++){
            if(ele == this.arr[i]){
                count++;
            }else{
                if(count > obj.count){
                    obj.value = this.arr[i-1];
                    obj.count = count;
                }
                count = 1;
                ele = this.arr[i]
            }
        }
        return obj;
    }

    var(){
        let dif = 0;
        for(let i of this.arr){
            dif += ((i - this.mean())** 2);
        }
        let avg = dif/this.count();
        return avg;
    }

    std(){
        return this.var()**(1/2);
    }

    freqDist(){
        this.arr = this.arr.sort();
        let ele = this.arr[0];
        let count = 1;
        let newAr = [];
        for(let i = 1;i < this.arr.length;i++){
            if(ele == this.arr[i]){
                count++;
            }else{
                newAr.push([ele,parseFloat(count/this.count())*100])
                count = 1;
                ele = this.arr[i]
            }
        }
        return newAr;
    }
}

const statistics = new Statistics(ages);

console.log(statistics.count());
console.log(statistics.sum());
console.log(statistics.min());
console.log(statistics.max());
console.log(statistics.range());
console.log(statistics.mean());
console.log(statistics.median());
console.log(statistics.mode());
console.log(statistics.var());
console.log(statistics.std());
console.log(statistics.freqDist());