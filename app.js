console.log("First console message.");
var welcome = "Hello W.";
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, "ana");
console.log(combinedAges);
// ==================3=======================================
// const a = [1, 4, 5,]
// console.log(typeof a)
// a.forEach(x => console.log("text is " + x) )
//
// for (let i = a.length - 1; i >= 0 ; i--) {
//   console.log("TEXT is " + a[i])
// }
//
// for (const x of a) {
//   console.log("iterate of: " + x.toPrecision(5))
// }
// ==================1=======================================
// function add(n1:number, n2:number) {
//   console.log(typeof welcome)
//   throw new Error('sadhgfsakjhfkedahwe')
//   return n1 + n2
// }
//
// console.log(add(5, 4.44))
// =====================2====================================
// type cat_type = {
//   name: string;
//   age: number;
// }
//
// const cat1: cat_type = {
//   name: "pes",
//   age: 6
// }
//
// const cat2: {
//   name: string;
//   age: number;
// } = {
//   name: "tygr",
//   age: 4
// }
//
// console.log(cat1)
// =========================================================
