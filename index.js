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

//  let even=document.querySelectorAll('li:nth-child(even)');

// for(let i=0;i<even.length;i++)
// {
//     even[i].style.backgroundColor="green";
// }


/********************************************************************************************* */
//Traversing the DOM  //

// let itemList=document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);   //div
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);  //container


//parentElement
// console.log(itemList.parentElement);   //div
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);  //container

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="yellow";

// // FirstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';


// LastChild
// console.log(itemList.lastChild);
// //firstElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 1';


// //nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);

//createElement

//create a div
// let newDiv= document.createElement('div');

// //Add class
// newDiv.className='hello';

// //Add id
// newDiv.id='hello1';

// //Add attribute
// newDiv.setAttribute('title','Hello Div');

// //Create text node
// let newDivText= document.createTextNode('Hello World');

// //Add text to div
// newDiv.appendChild(newDivText);


// var container= document.querySelector('header .container');
// let h1= document.querySelector('header h1');

// console.log(newDiv);

// container.insertBefore(newDiv,h1);
// newDiv.style.fontSize='30px';


// // Now go head and add HEllo word before Item 1 //
// let newList= document.createElement('li');

// newList.className='list-group-item';
// let newListText= document.createTextNode('Hello World');
// newList.appendChild(newListText);

// let ul=document.querySelector('#items');
// ul.insertBefore(newList,ul.children[0]);



//Delete and Edit Functionality**************************************//
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn= document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.style="margin-right: 16px";
  editBtn.className='btn btn-danger btn-sm float-right edit';
 
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X' ));
  editBtn.appendChild(document.createTextNode('Edit' ));



  // Append button to li

  li.appendChild(editBtn);
  
  li.appendChild(deleteBtn);
  
  

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}



