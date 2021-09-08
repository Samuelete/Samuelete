
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

// const maximum = (x,y,z) => {
// 		if(x > y && x > z) {
// 			return x;
// 		} else if (y > x && y > z) {
// 			return y; 
// 		} else {
// 			return z;
// 		}
// }

// console.log(maximum(100,5000,1000));


// var count = {
// 	add = (function () {     
// 		var counter = 0; 
// 		return function () { 
// 			  return console.log(counter += 1);
// 			  } 
// 		}
// 	)(),
// 	reset = (function () {     
// 			var counter = 0; 
// 			return function () { 
// 				  return console.log(counter = 0);
// 				  } 
// 			}
// 	)()   
// };

// var count = {};
// count.add = (function () {     
// 	var counter = 0; 
// 	return function () { 
// 		  return console.log(counter += 1);
// 		  } 
// 	}
// )();
// count
// count.reset = (function () {     
// 	var counter = 0; 
// 	return function () { 
// 		  return console.log(counter = 0);
// 		  } 
// 	}
// )();

// count.add();
// count.add();
// count.add();
// count.add();
// count.reset();
// count.add();
// count.add();

// Lab 9, Exercise 6
// var count = (function () {     
// 	var counter = 0; 
// 	let count = {
// 		add: function() {
// 			console.log(counter += 1);
// 		},
// 		reset: function() {
// 			console.log(counter = 0);	  
// 		}};
// 	return count;
// })(); 

// count.add();
// count.add();
// count.add();
// count.add();
// count.reset();
// count.add();
// count.add();

//Lab 9, exercise 8

var make_adder = (function(x) {
	var sum = x;
	var count = 0;
	return function() {
		if(count == 0) {
			count++;
			return console.log(sum);
		} else {
			return console.log(sum += sum);
		}
	}
})();

var add5 = make_adder(5);

add5();
add5();
add5();



