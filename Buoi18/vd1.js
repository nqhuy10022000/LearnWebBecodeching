// let age = 10;

// let ageInt = 10;
// let ageFloat = 10.6;

// let input= 10;

// if(Number.isInteger(input))
// {
//     console.log("OK");
// }
// else{
//     console.log("NOT OK");
// }


// console.log(ageInt);
// console.log(ageFloat);
// //console.log(Number.MAX_SAFE_INTEGER);
// console.log(ageFloat - "sdsafaf");


// console.log((10).toString());

// let a = "10";
// let b = "10";

// function tinhTong(a,b){
//     if(a === undefined && b === undefined && a === null && b === null){
//         return;
//     }
// }

// console.log(! "");
// console.log(! undefined);
// console.log(! null);
// console.log(! 0);

// if(!a){
//     alert(" So nay khong hop le")
//     return;
// }
// function a(s){
//     const parseS = Number.parseInt(s);
//     const checkNumber = Number.isInteger(s);
//     const checkNumber = Number.isNaN(s);

//     if(quanlity < 0){
//         return;
//     }
//     if(!quanlity){
//         return;
//     }cd
// }


// const newName = "Xuan Xuan Hung";
// 							// 012345678910
// console.log(newName.substring()); // Return "Xuan Xuan Hung"
// console.log(newName.substring(2, 4)); // Return "an"
// console.log(newName.substring(2)); // Return "an Xuan Hung"
// console.log(newName.substring(-1)); // Return "Xuan Xuan Hung"
// console.log(newName.substring(-2, 4)); // Return "Xuan" do start = -2 nó sẽ tự chuyển về 0
// console.log(newName.substring(-2, -4)); // Return "" 

// 1. Chuẩn hoá ký tự. Yêu cầu
// + Xoá tất cả những khoảng trắng dư thừa ở đầu và cuối và giữa các ký tự
// + Viết hoa chữ cái đầu của mỗi từ, những ký tự còn lại trong từ đó thì in thường
// input: "     nguyen     xUAN     Hung       "
// output: "Nguyen Xuan Hung"

let input = "     nguyen     xUAN     Hung       ";

// function Chuoi1(input){
//     input = input.trim();
//     input = input.replace(/\s+/g," ");

//     let array = "";
//     for(let i = 0;i< input.length;i++)
//     {
//         if(i === 0)
//         {
//             array += input[i].toUpperCase();
//         }
//         else if(input[i-1]===" ")
//         {
//             array += input[i].toUpperCase();
//         }
//         else if(input[i]===" ") {
//             array += " ";
//         }
//         else{
//             array += input[i].toLowerCase();
//         }
//     }
    
//     console.log(array);
// }

// Chuoi1(input);


function chuanHoa(input){
    
    input = input.trim();

    input = replaceAllSpace(input);

    input = input.toLowerCase();

    let inputArr = input.split(" ");

    let result = "";
    for(let i = 0;i < inputArr.length; i++){
        result += upperFirstKey(inputArr[i]);
        if(i < inputArr.length - 1)
        {
            result += " ";
        }
    }

    console.log(result);

}

function upperFirstKey(str = "")
{
    //TODO: nguyen
    let s = "";
    
    s += str.charAt(0).toUpperCase();
    s += str.substring(1);
    return s;
}

function replaceAllSpace(input =""){
    let check = input.includes(" ");
    while(check){
        input = input.replaceAll("  "," ");
        check = input.includes("  ");
    }
    return input;
}

chuanHoa(input);