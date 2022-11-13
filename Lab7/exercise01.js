const helper = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function isPrime(number) {
    console.log("Start");
    let prime = helper(number);
    return new Promise(function (resolve, reject) {
        if (prime) {
            setTimeout(() => { resolve(`{prime: true}`) }, 500)
        } else {
            setTimeout(() => { reject(`{prime: false}`) }, 500)
        }
    })
}

isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    console.log("End")
