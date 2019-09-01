let courseWeb = ["PHP", "Zend" , "WordPress"];
let courseMobile = ["Android", "IOS"];

let course = ["HTML", "jQuery", ...courseWeb, "Window Phone", ...courseMobile];
console.log(course);
// là ba dấu ... đấy
// Sử dụng destructuring
// let arr = [133, "ES6", false];
// let [id, name, free] = arr; // qtrong
// console.log(id + name + free);