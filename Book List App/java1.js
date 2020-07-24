 var array=[];
class gets{
	constructor(Code,Name,Author){
		this.Code=Code;
		this.Name=Name;
		this.Author=Author;
		console.log(`code:${this.Code} and Name:${this.Name} Author is:${this.Author}`);
	}


}

function Clicked(){
	let Code=document.getElementById("Code").value;
	let Name=document.getElementById("Name").value;
	let Author=document.getElementById("Author").value;	
	if(Code==""||Name==""||Author==""){
		alert("Kindly Enter All the Details");
	}else{	
	let GETS=new gets(Code,Name,Author);
	sort(Code,Name,Author);
	clear();
}
}


function sort(Code,Name,Author){
 let tab=document.getElementById("add");

 let row=tab.insertRow();
 var cell1=row.insertCell();
 var cell2=row.insertCell();
 var cell3=row.insertCell();
 var cell4=row.insertCell();
 cell1.innerHTML=Code;
 cell2.innerHTML=Name;
 cell3.innerHTML=Author;
 cell4.innerHTML=`<button type="button"  onclick="Delete()" 
 					class="btn btn-primary">Delete</button>`
let number=[Code,Name,Author,`<button type="button"  onclick="Delete()" 
 					          class="btn btn-primary">Delete</button>`];
}
function Delete(){
	 let tab=document.getElementById("add");
	 let row=tab.deleteRow(-1);
}
function clear(){
	document.getElementById("Code").value="";
	document.getElementById("Name").value="";
	document.getElementById("Author").value="";
}
