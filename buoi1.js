console.log("t ở đây nè")

// biến (variable)
let ten = "..."
console.log(ten);
// hằng số (constant)
const SO_PI = 3.14;
console.log(SO_PI);
// tương tự số Pi
console.log(Math.PI);
// kiểu dữ liệu
// kiểu số: number
// kiểu dữ liệu chuỗi: string
//  kiểu đúng sai: boolean


// typeof giúp kt kiểu dữ liệu
console.log(typeof ten);

// phép gán (+=)
let bienA = 8;
bienA = bienA + 5; // ==> 13
bienA += 5;
console.log(bienA)






var canh1= 3;
var canh2 = 4;
var canhHuyen;

console.log("cạnh góc vuông thứ nhất: " +canh1);
console.log("cạnh góc vuông thứ hai: " +canh2);

canhHuyen = Math.sqrt(canh1*canh1 + canh2*canh2)
console.log("cạnh huyền: " +canhHuyen)



let n = 789;
let hangTram= Math.floor(n/100);
let hangChuc = Math.floor(n%100/10);
let hangDonVi = n%10;

console.log("n = " +n);
console.log("hàng trăm = " +hangTram );
console.log("hàng chục = " +hangChuc);
console.log("hàng đơn vị = " +hangDonVi);

