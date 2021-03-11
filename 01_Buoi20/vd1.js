//TODO: Thêm 1 phần tử mới vào cuối mảng : push
//TODO: Xóa phần tử cuối mảng : pop
//TODO: Thêm phần tử đầu mảng : unshift
//TODO: Lấy phần tử đầu ra : shift

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//TODO: Những hàm để duyệt mảng : foreach, map, filter, reduce

// //Cách 1
// arr.forEach(handleForEach);

// function handleForEach(value,index,array){
//     console.log(value,index,array);
// }

// //Cách 2
// arr.forEach((value,index,array) =>{
//     console.log(value,index,array);
// })

// //Cách 3
// arr.forEach(function(value) {
//     console.log(value);
// })

// TODO: =================================================================

//TODO: Dùng để lặp qua các phần tử trong mảng và trả về 1 mảng mới mà không làm thay đổi mảng ban đầu
//TODO: Mảng mới có độ dài bằng với mảng ban đầu
//TODO: Khi dùng map:
// let arr = ['Mai', 'Vu', 'Kiet','Hung'];

// let arr2 = arr.map((value) =>{
//     console.log(value);
//     return value;
// })

// console.log(arr2);

// TODO: =================================================================

//TODO: Dùng để lặp qua các phần tử trong mảng và trả về 1 mảng mới mà không làm thay đổi mảng ban đầu
//TODO: Mảng mới có độ dài nhỏ hơn hoặc bằng mảng ban đầu
//TODO: Khi nào dùng filter, dùng để lọc ra các phần tử mong muốn trong mảng

// let arr3 = [1,2,3,4,5,6,7,8,9,10];

// let arr4 = arr3.filter((value) => {
//     if(value % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(arr4);

// =========================================================================

// let arr3 = [NaN,null,undefined,'',0,false,10,11,12];

// let arr4 = arr3.filter((value) => {
//     if(!value){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(arr4);

// =========================================================================

//TODO: Regular Function
// demo = function() {
//     console.log('12321');
// }

// demo();

//TODO: Arrow Function

// demo = (a,b) => {
//     console.log(a + b);
// }

// demo(10,20);

// //Ví dụ:
// function login(getInfoUserCallBack){
//     setTimeout(() => {
//         console.log(true);
//         getInfoUserCallBack();
//     },1000);
// }

// function getInfoUser(){
//     console.log('Hung');
// }

// login(getInfoUser);

//==========================================================

// let listUser = ['hung','kiet','vu','huy'];

// let listUser2 = listUser.map((value) =>{
//     return value.toUpperCase();
// })

// console.log(listUser2);

//==========================================================

// let listUser = ['hung','kiet','vu','huy'];

// let newArr = listUser.map(handleListUser);

// /**
//  * 
//  * @param {string} value 
//  * @param {number} index 
//  * @returns 
//  */

// function handleListUser(value,index){
//     return value.toUpperCase();
// }

// console.log(newArr);
//==========================================================

// let listNumber = [0, -1, -2, 3, 4, 10, -20, 5, -3, -5, 12, 19, 46];

// // let newArr = listNumber.filter(handleListNumber);
// // function handleListNumber(value,index){
// //     return value > 0;
// // }
// // console.log(newArr);

// // let newArr = listNumber.filter(value=>value > 0);
// // console.log(newArr);

//==========================================================