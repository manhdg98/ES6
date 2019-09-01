function func01 (name, age) {
	return `My nam í ${name}, ${age} years old`;
}
var func02 = function(name, age) {
	return `My nam í ${name}, ${age} years old`;
}
var func03 = (name, age) => {
	return ` function03 My nam í ${name}, ${age} years old`;
}// => arrowfunction
console.log(func03("join", 100));