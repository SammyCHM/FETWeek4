"use strict"  
  
  
let employeeId = 0;



document.getElementById('submit-button').addEventListener('click', () =>{

    let table = document.getElementById('tableData');
    let row =table.insertRow(1);
    //creating columns to set the info provided by user
    row.setAttribute('id', `item-${employeeId}`);
    row.insertCell(0).innerHTML= document.getElementById('ex-employee').value;
    row.insertCell(1).innerHTML= document.getElementById('occupation').value;
    //row.insertCell(2).innerHTML= `${quitDate.getDate()}-${quitDate.getMonth()+1}-${quitDate.getFullYear}`;
    row.insertCell(2).innerHTML=document.getElementById('quit-date').value;
    row.insertCell(3).innerHTML= document.getElementById('reason').value;
    let actions= row.insertCell(4);
    actions.appendChild(createDeleteButton (employeeId++));

    //deleting the values from the form and inserting in table
    document.getElementById('ex-employee').value='';
    document.getElementById('occupation').value = '';
    document.getElementById('quit-date').value = '';
    document.getElementById('reason').value = '';

});

function createDeleteButton(id){

    let btn=document.createElement('button');
    btn.className= 'btn btn-primary ';
    btn.id= id;
    btn.innerHTML ='Delete';
    btn.onclick=() => {
     const eDelete = document.getElementById(`item-${id}`);
     eDelete.parentNode.removeChild(eDelete);
      
    };
    return btn;

 }




    
 

