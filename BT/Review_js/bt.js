let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 12,
        "name":"Barry",
        "salary":62000
    },
    {
        "id": 13,
        "name":"Tom",
        "salary":32000
    },
    {
        "id": 14,
        "name":"Harry",
        "salary":40000
    },
    {
        "id": 15,
        "name":"Jone",
        "salary":45000
    },
];

// Câu 1
employees.forEach((value)=>{
    console.log(value.id);
});
// Câu 2
let newEmp = employees.filter((value)=>{
    if(value.salary > 40000){
        return true;
    } else {
        return false;
    }
})

console.log(newEmp);
// Câu 3
let sum = 0;
employees.forEach((value)=>{
    sum = sum + value.salary;
});
console.log(sum);
// Câu 4
let newEmp1 = employees.sort((a,b)=>a.salary-b.salary);
console.log(newEmp1);
// Câu 5
let maxSalary = employees[0];
employees.forEach((value) => {
    if(value.salary > maxSalary.salary){
        maxSalar= value;
    }
});
console.log(maxSalary);
// Câu 6
let minSalary = employees[0];
let vitri = 0;
employees.forEach((value,index) => {
    if(value.salary < minSalary.salary){
        minSalary = value;
        vitri = index;
    }
});
console.log(vitri);