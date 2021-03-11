// 1. Viết hàm kiểm tra xem input truyền vào có phải là một chuỗi hay không.

// function is_string(input) {
//     if(typeof input === String)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }

// }

// let a = isString('xuanhung');
// console.log(a); 

// 2.Viết hàm kiểm tra xem input truyền vào có rỗng hay không.

function is_Blank(input){
    if(input ==='')
    {
        return true;
    }
    else{
        return false;
    }
}

// 3. Viết hàm trả vể 1 mảng các từ trong chuỗi đó.
function string_to_array(input){
    input = input.split(" ");
    return input;
}

// 4. Viết hàm trả trích xuất n ký tự trong chuỗi.
function truncate_string(input,n){
    input = input.substring(0,n);
    return input;
}

// 5. Viết một hàm trả về tên viết tắt của ngươi đó.

let input = "Nguyen Xuan Hung";

function abbrev_name(input){
    let arrStr = input.split(' ');
    let result = '';
    for(let i=0; i<arrStr.length; i++)
    {
        if(i != arrStr.length - 1 )
        {
            result += arrStr[i] + ' ';
        }
        else{
            //TODO: phần tử cuối
            result += arrStr[i].charAt(0);
        }
    }
    return result;
}

// 6. Viết một hàm format lại email tránh người khác đọc được.


// 7. Viết hàm format tham số vừa truyền vào theo định dạng sau.
function string_parameterize(input){
    input = input.toLowerCase();
    input = input.replaceAll(" ","-");
    return input;
}

// 8. Viết một hàm viết hoa chữ cái đầu tiên của một chuỗi.
function capitalize(input){
    let inputArr = input.split(" ");
    let result;
    for(let i = 0;i < inputArr.length; i++)
    {
        result += HoaDau(inputArr[i]);
        if(i < (input.inputArr.length - 1))
        {
            result += '';
        }
    }
    return result;

}

function HoaDau(str){
    let s ='';
    s += str.charAt(0).toUpperCase();
    s += str.substring(1);
    return s;
}

// 9. Viết một hàm viết hoa chữ cái đầu tiên của một chuỗi.
function capitalize(input){
    let s ='';
    s += input.charAt(0).toUpperCase();
    s += input.substring(1);
    return s;
}

// 10. Viết một hàm chuẩn hóa chuỗi vừa truyền vào theo chuẩn camel case (chữ đầu viết thường những chữ sau viết hoa chữ cái đầu của mỗi từ).

// 11. Viết hàm chuẩn hóa chuỗi theo ví dụ sau:

// let input1 = "helloWorld";

// function findCharacterUpper(input1 =''){
//     for(let i = 0; i < input1.length; i++){
//         if(input1[i]>= 'A' && input1[i]<='Z')
//         {
//             return i;
//         }
//     }
//     return -1;
// }

// const indexUpper = findCharacterUpper(input1);

// console.log(input1.substring(0,indexUpper));
// console.log(input1.substring(indexUpper));

let input1 = "helloWorld";

function findCharacterUpper(input1 =''){
    for(let i = 0; i < input1.length; i++){
        if(input1[i]>= 'A' && input1[i]<='Z')
        {
            return i;
        }
    }
    return -1;
}


function bai11(input, c){
    const indexUpper = findCharacterUpper(input1);

    console.log(input1.substring(0,indexUpper));
    console.log(input1.substring(indexUpper));
    // if(c !== undefined && c!== null && c!== '')
    // {
    //     return input.substring(0, indexUpper) + ' ' + input.substring(indexUpper);
    // }

    c = !c ? " " : c;
    if(!c){
        c = " ";
    }
    return input.substring(0, indexUpper) + ' ' + input.substring(indexUpper);
}