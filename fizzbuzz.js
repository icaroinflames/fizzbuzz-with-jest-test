function fizzbuzz(number){
    var result = "";
    if(number === 0) return 0;
    
    if(divisible3(number)){
        result += "fizz";
    }
    if(divisible5(number)){
        result += "buzz";
    }
    
    return result === "" ? number : result;
}

const divisible3 = (num) => {
    return num % 3 === 0;
};

const divisible5 = (num) => {
    return num % 5 === 0;
};

function print(num){
    for(let i=0; i<= num; i++){
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}

print(20);

module.exports = fizzbuzz;