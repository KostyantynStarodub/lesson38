//for1

// let n = Number(prompt("Введите количество выведений"))
// let k = Number(prompt("Введите число"))
// for(let i = 1; i <= n; i ++){
//     console.log(k)
// }


//for2

// let a = Number(prompt("Введите меньшее число"))
// let b = Number(prompt("Введите большее число"))
// let c = 0
// for(let i = a; i <= b; i++){
//     console.log(i)
//     c += 1
// }
// console.log(`Количество чисел:${c}`)

//for3

// let a = Number(prompt("Введите меньшее число"))
// let b = Number(prompt("Введите большее число"))
// let c = 0
// for(i = b-1; i > a; i --){
//     console.log(i)
//     c ++
// }
// console.log(`Количество чисел:${c}`)

//for4

// let a = Number(prompt("Введите цену за 1кг конфет"))
// for(let i = 1; i <= 10; i ++){
//     console.log(`Стоимость ${i}кг конфет: ${a*i}`)
// }

//for5

// let a = Number(prompt("Введите цену за 1кг конфет"))
// for(let i = 0.1; i <= 1; i += 0.1){
//     console.log(`Стоимость ${i}кг конфет: ${a*i}`)
// }

//for6

// let a = Number(prompt("Введите цену за 1кг конфет"))
// for(let i = 1.2; i <= 2; i += 0.2){
//     console.log(`Стоимость ${i}кг конфет: ${a*i}`)
// }

//for7

// let a = Number(prompt("Введите меньшее число"))
// let b = Number(prompt("Введите большее число"))
// let c = 0
// for(let i = a; i <= b; i++){
//     c += i
// }
// console.log(`Сумма чисел между данными: ${c}`)


//for8

// let a = Number(prompt("Введите меньшее число"))
// let b = Number(prompt("Введите большее число"))
// let c = 1
// for(let i = a; i <= b; i++){
//     c *= i
// }
// console.log(`Произведение чисел между данными: ${c}`)

//for9

// let a = Number(prompt("Введите меньшее число"))
// let b = Number(prompt("Введите большее число"))
// let c = 0
// for(let i = a; i <= b; i ++){
//     c += i**2
// }
// console.log(`Сумма квадратов чисел между данными: ${c}`)

//for10

// let n = Number(prompt("Введите целое положительное число"))
// let c = 0
// for(let i = 1; i <= n; i ++){
//     c += 1/i
// }
// console.log(`Сумма 1 + 1/2 + 1/3 + 1/n : ${c}`)

//for11

// let n = Number(prompt("Введите целое положительное число"))
// let c = 0
// for(let i = n; i <= 2*n; i ++){
//     c += i**2
// }
// console.log(`Сумма квадратов чисел между заданным и удвоенным: ${c}`)

//for12

// let n = Number(prompt("Введите целое положительное число"))
// let c = 1
// for(let i = 1.1; i < 1.1 + n/10; i+=0.1){
//     c *= i
    
// }
// console.log(`1.1 * 1.2 * 1.3 (N сомножителей) : ${c}`)

//for13

// let n = Number(prompt("Введите целое положительное число"))
// let c = 0
// let k = -1
// for(let i = 1; i <= n; i++){
//     k *= -1
//     c += k * (1 + 0.1 * i)
// }
// console.log(`Сумма чисел 1.1 - 1.2 + 1.3 .... (${n} слагаемых) = ${c}`)

//for14

// let n = Number(prompt("Введите целое положительное число"))
// let c = 0
// console.log(`Квадраты всех целых чисел до ${n}`)
// for(let i = 1; i <= 2*n - 1; i += 2){
//     c += i
//     console.log(c)
// }

//for15

// let a = Number(prompt("Введите число"))
// let n = Number(prompt("Введите степень в которую нужно возвести ваше число"))
// let c = 1
// for(let i = 1; i <= n; i++){
//     c *= a
// }
// console.log(`Число ${a} в степени ${n} = ${c}`)

//for16

let a = Number(prompt("Введите число"))
let n = Number(prompt("Введите крайнюю степень вашего числа"))
let c = 1
console.log(`Все целые степени числа ${a} до ${n} степени`)
for(let i = 1; i <= n; i++){
    c *= a
    console.log(c)
}
