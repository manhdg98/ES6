let elm = document.getElementById("m");
elm.style.color = "#0174DF";
/*
let name = "Mạnh";
let price = 15;
// elm.innerHTML = '<div> Course name :<b>' + name + '</b>, price: <b style="color:red">' + price + ' USD </b></div>';
elm.innerHTML = `<div> Course name :<b>${name}</b>, price: <b style="color:red">${price} USD </b></div>`; // sử dụng templateString phải có ``
*/
let todo = {
	id: 69,
	name : "Coding123",
	status: true
};

elm.innerHTML = `<div id="todo-id-${todo.id}">
		 		<i class=" ${todo.status == true ? "ml-4" : "mt-4"} fa fa-home"></i>
		 		<span class="name"> ${todo.name}</span>
					 </div>`;