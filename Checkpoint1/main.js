let m = [1,2,3,4,5,6,'hh', '9',80,100]
let number = m.filter(function(item) {
    return (typeof item === "number")
  });
console.log(number)
let mSquared = number.map(item => item * item)
for (i = 0; i<mSquared.length; i++) {
    if (mSquared[i] = (number[i]*number[i])) {
        console.log('true')
    } else {
        console.log('false')
    }

} 

let text1 = 'High knowledge, high return'
let text2 = text1.split(" ")
let text3 = text2.toString().toLowerCase()
console.log(text2)
console.log(text3)