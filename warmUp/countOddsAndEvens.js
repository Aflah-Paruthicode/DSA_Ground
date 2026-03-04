function CountOddsAndEvens (num) {
    let odds = 0;
    let evens = 0;
    
    while(num > 0) {
        let rem = num%10;
        rem%2 == 0 ? evens++ : odds++;
        num = Math.floor(num/10);
    }
    return [odds,evens]
};

let number = 24561; 

console.log(CountOddsAndEvens(number));