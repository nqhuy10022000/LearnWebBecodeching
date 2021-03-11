// alert(123);
// document.write("hihihi");

/*
switch (luaChon)
{
    case 1: { 
        break;
    } 
    default: {
        break;
    }
}
*/

/*
let person = {
    address: 'So 10 Quoc lo 13',
    phoneNumber: 0129022421,
    isMale: true,
    married: undefined,
    coCon: null,
};

let listSTT = [1,2,3,4,5,'123214',
    {
        myName: 'Nguyen Van A',
    },
];



console.log(person);
console.log(listSTT[listSTT.length - 1]);
*/

/*
let list1 = [1,2,3,4,5];
let list2 = list1;

console.log(list1);

list2[0] = ["a","b","c","d","e"];
console.log(list2);
*/

/*
let list = [1,2,3,4,5];
// TODO: let, const
// TODO: var
for(let i = 0;i < list.length;i++)
{
    console.log(`Vị trí ${i}: value = ${list[i]}`);
}
*/

/*
//TODO: var thì console.log() để lên đầu
console.log(age);
var age = 23;
*/


// const btn = document.getElementById("button");
// btn.style.padding = "10px";
// btn.style.color = "#fff";
// btn.innerHTML = "Nguyen Van B";
// btn.style.backgroundColor = "#39a0ed";
// btn.style.borderRadius = "6px";
// btn.style.fontSize = "20px";
// btn.style.outline = "none";
// btn.style.border = "none";
// btn.style.cursor = "pointer";
// btn.style.transition = "all 10s";
// btn.addEventListener("click", function(element) {
//     console.log(element);
//     btn.style.backgroundColor = "#db3069";
//     const checkClass = btn.classList.contains("active");
//     if(checkClass == true)
//     {
//         btn.classList.remove("active");
//     }
//     else {
//         btn.classList.add("active");
//     }
// });


function handleClick() {
    const day = document.getElementById("days");
    const date = new Data();
    // console.log(date);
    const year = date.getFullYear();
    day.innerHTML = year;
}