
// var person = {
// 	name: "fred",
// 	major: "music",
// 	calculation: function(x, y) {
// 		if (x==y) {
// 			return x*y;
// 		} else if (x>y)  {
// 			return y;
// 		} else {
// 			return x;
// 		}
// 	}
// };
 
// console.log(person.calculation(1,2));

// function Employee(name, salary, position) {
// 	this.name = name;
// 	this.salary = salary;
// 	this.position = position;
// }

// const samuel = new Employee('Samuel', '$50000', "Manager");
// const berta = new Employee('Berta', '$15000', "Cashier");
// const juan = new Employee('Juan', '$43000', "Film Maker");

// var product = function(x,y) {
// 	return x * y;
// }
// console.log(product(45,60));

const maximum = (x,y,z) => {
		if(x > y && x > z) {
			return x;
		} else if (y > x && y > z) {
			return y; 
		} else {
			return z;
		}
}

console.log(maximum(100,5000,1000));