// const p = document.getElementsByTagName('p'); 

// const colors = ["red", "blue"]
// for (let i =0; i< p.length;i++)
// {
//     p[i].style.color = colors[i];
// }

// const p = document.getElementsByClassName('class');

// console.log(p[0]);

// const p = document.querySelector('.container .name'); // Tra ve 1 thang

// p.innerHTML = 'Updated';


// const p = document.querySelectorAll('.container .name');


// const id = document.getElementById('id');
// const cl = document.getElementsByClassName('class');
// const tag = document.getElementsByTagName('id');
// const queryOne = document.querySelector('id');
// const queryAll = document.querySelectorAll('id');


// const container = document.getElementById('container');
// const listName = document.getElementsByClassName('name');

// console.log(listName);

const container = document.getElementById('container');
const p = document.getElementById('id');
container.addEventListener('mousemove',function (e) {
    // alert('adsdas');
    // prompt('Nhap ten');
    // container.style.backgroundColor = 'red';
    // console.log(e);

    const clientX = e.offsetX;
    const clientY = e.offsetY;
    console.log(e);
    p.innerHTML = `clientX${clientX}-clientY${clientY}`;
});

//TODO:click,dbclick,mousemove,keydown