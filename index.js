// console.dir(document);
// console.log(document.head);
// let headerTitle =document.getElementById('header-title');
// let header =document.getElementById('main-header');
// console.log(headerTitle);

// headerTitle.innerText='Hello';
// headerTitle.textContent='Good Morning';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Fire</h3>';

// header.style.borderBottom= 'solid 3px #000';

// let addItem=document.getElementById('add-item');
// addItem.style.color="green";
// addItem.style.fontWeight="bold";

//Sharpener GetElementByClassName Task
// let listItem= document.getElementsByClassName('list-group-item');
// listItem[1].style.color="red";
// listItem[3].textContent='Hello';


// for(let i=0;i<listItem.length;i++)
// {
//     listItem[i].style.backgroundColor="#f4f4f4";
// }
// listItem[2].style.backgroundColor="green";

// for(let i=0;i<listItem.length;i++)
// {
//     listItem[i].style.fontWeight='bold';
// }

//TagName
//listItem[4].textContent='Hello';

// let list= document.getElementsByTagName("li");
// list[1].textContent='good';
// list[0].style.backgroundColor="red";
// list[4].textContent='Super';


//Queryselector

// let header= document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// let input= document.querySelector('input');
// input.value='Hello World';

// let submit= document.querySelector('input[type="submit"]');
// submit.value='SEND';

// let item=document.querySelector('.list-group-item');
// item.style.color="red";

// let lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color="green";

// let secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor="green";

// let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility='hidden';

//QuerySelectorAll

// let title= document.querySelectorAll('.title');
// title[0].textContent="Hello";

// let items= document.querySelectorAll('li:nth-child(2)');
// items.style.color="green";

 let even=document.querySelectorAll('li:nth-child(even)');

for(let i=0;i<even.length;i++)
{
    even[i].style.backgroundColor="green";
}