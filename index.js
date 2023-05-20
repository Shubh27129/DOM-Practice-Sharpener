// console.dir(document);
// console.log(document.head);
let headerTitle =document.getElementById('header-title');
let header =document.getElementById('main-header');
console.log(headerTitle);
// headerTitle.innerText='Hello';
// headerTitle.textContent='Good Morning';
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Fire</h3>';

header.style.borderBottom= 'solid 3px #000';

let addItem=document.getElementById('add-item');
addItem.style.color="green";
addItem.style.fontWeight="bold";