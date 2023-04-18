const truthyCheck = (...args) => {
    return args.every(Boolean)
}

console.log(truthyCheck(true, true, 1))
console.log(truthyCheck(1, false, true))
console.log(truthyCheck('hello', 2, true, true, true))
console.log(truthyCheck(NaN, true, true))