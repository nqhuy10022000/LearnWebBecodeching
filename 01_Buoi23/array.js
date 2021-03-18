//TODO: splice : vua them vua xoa 

// let listNumber = [1,2,3,6,7,8];
// console.log(listNumber.splice(3,0,4,5));
// console.log(listNumber);

//TODO: spread in js :  ...

//TODO: sort

// let arr = [1,7,3,5,9];
// let newArr = arr.sort((a,b)=>{
//     return a-b;//Tang dan
//     //return b-a; // Giam dan
// });
// console.log(newArr);

// ===========================================================

// let arr = [
//     {
//         age: 3,
//         myName: 'A',
//     },
//     {
//         age: 15,
//         myName: 'B',
//     },
//     {
//         age: 13,
//         myName: 'Ddsaf',
//     },
//     {
//         age: 23,
//         myName: 'Adsadsa',
//     },
// ];

// let newArr = arr.sort((a,b)=>{
//     // return a.age-b.age;//Tang dan
//     //return b.age-a.age; // Giam dan

//     if(a.myName.localeCompare(b.myName) > 0){
//         return -1;
//     }else{
//         return 1;
//     }
// });
// console.log(newArr);

//TODO: reverse : giam dan

// let arr = [3,1,2,6,5,'hung','vu'];
// let arr2 = ['Pon','Kiet'];
// console.log(arr.concat(arr2));
// console.log([...arr,...arr2]);

//TODO: reduce

let arr = [
    {
        age: 3,
        myName: 'A',
    },
    {
        age: 15,
        myName: 'B',
    },
    {
        age: 13,
        myName: 'Ddsaf',
    },
    {
        age: 23,
        myName: 'Adsadsa',
    },
];


let tong = arr.reduce((total,value)=>{
    return total + value.myName;
},'');
console.log(tong);