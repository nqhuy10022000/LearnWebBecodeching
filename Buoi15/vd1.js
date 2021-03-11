// console.log(myName);
// var myName = "Nguyen Van A";
// console.log(myName);

// {
// let age = 10;
// console.log(age);
// }

// let age = 10;

// function checkAge(age){
//     var rs ="";
//     if(age < 18)
// {
//     rs = "Con nít";
// } else {
//     rs = "Người lớn";
// }

//     console.log(`Ket qua = ${rs}`);
// }

// checkAge(age);
// console.log(rs);

// for(var i = 1; i <= 10; i++)
// {
//     console.log(`index ${i}`);
// }
// console.log(i);

// for (var i = 1; i<=3;i++){
//     for(var i =1;i<=2;i++)
//     {
//         console.log(i);
//     }
// }

// let a = 10;
// console.log(a);
// a= 20;
// console.log(a);

// const human = {
//     age : 20,
//     name: 'Nguyen Van A'
// }
// const thangB = human;
// thangB.name = 'Nguyen Van B';
// console.log(human);
// console.log(thangB);

// const btn = document.getElementById("button");

// btn.addEventListener("click", (e) => {
//     console.log(e);
// });

// const now = Date.now(); //TODO: return thời gian hien tại (ms)

// const now = new Date ('2021/01/01');
// console.log(now);

// console.log(Date.now());

const hienTai = Date.now();
console.log(`Gio hien tại ${hienTai}`);
const Tet = new Date('2021,02,11').getTime();
console.log(`Gio tet ${Tet}`);
function toNewYear()
{
    console.log(`Còn lại ${Math.floor((Tet - hienTai)/86400000)} ngày đến Tết`);
}
toNewYear();

// Math.ceil(1.3)
// Math.floor(1.9999)
