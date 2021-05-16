
// function solution(input){
//     /*
//     Giả sử input là 1 password của 1 user
//     Tạo chuỗi gồm kí tự đầu và cuối của password ban đầu
//     Các kí tự còn lại dược thay bằng dấu *
//     */
//     let res = "";

//     for(let i=0; i<input.length; i++){
//         if(i === 0 || i === input.length - 1){
//             res += input[i];
//         }
//         else{
//             res += "*";
//         }
//     }

//     return res;
// }

// const case1 = "hard password";


// const res = solution(case1);

// console.log(res)


// // repeat 

// /**
//  * "*".repeat(5) -> *****
//  * "*".repeat(10) -> *****
//  * 
//  */

// function solution(input){
//     /*
//     Tính tổng các chữ số
//     Ví dụ: 136 => 1 + 3 + 6 = 10
//     */

//     /*let tong = 0;

//     if(input < 0)
//     {
//         return "Invalid input";
//     }

//     while(input > 0){

//         let donVi = input % 10; // 6
//         tong += donVi;
//         input = Math.floor(input / 10);

//     }

//     return tong;*/

//     let tong = 0;
//     if(input < 0)
//     {
//         return "Invalid input";
//     }
//     input = input + '';
//     let inputArray = input.split('');

//     for(let i = 0;i< inputArray.length; i++){
//         tong = tong + inputArray[i] * 1;
//         // tong = tong + Number.parseInt(inputArray[i]);
//         // 0 = 0 + '1' ==> 01
//     }

//     return tong;
// }



// ==============================================

