// const tenbien;

// console.log('Hello Lop')
// console.log('123456789')

// const name = 'Nguyen Van A';
// let age = 23;
// age = 21;
// let isMale = true;
// isMale = false;
// console.log('Ten cua ban la: ' , name , ' tuoi cua ban la: ' , age, ' gioi tinh nam ???', isMale)

//7 kiểu dữ liệu nguyên thủy
// string 
// number
// boolean
// undefined : chưa định nghĩa
// null
// BigInt
//Symbol
// ===============================
// Object
// Array

hienTen('Ngo Quang Huy');
function hienTen(name) {
    console.log(name);
}

hienTuoi(21);
function hienTuoi(age) {
    console.log(age);
}

hienGioiTinh(true);
function hienGioiTinh(sex) {
    if(sex == true){
        console.log('Gioi tinh nam');
    }
    else{
        console.log('Gioi tinh nu');
    }
}


let undef = undefined;
let demoNull = null;
let abc;

console.log(typeof undef);
console.log(typeof demoNull);
console.log(typeof abc);

const object = {
    // [key]: [value],
    name: "Nguyen Van A",
    age: 23,
    sex: true,
    class: {
        nameClass: '18CTT3',
        stt: 100,
    }
};

// hienTen(object.name);
// hienTuoi(object.age);
// hienGioiTinh(object.sex);

// console.log(object.class.nameClass);


// const address = 'So 10 quoc lo 13'
// console.log(address);

const array = [1,2,3,4,5,6,7,'abc',null,undefined,[1,2,3],{name: 'NVB', age: 13, sex: true, }];
array.length
console.log(array);