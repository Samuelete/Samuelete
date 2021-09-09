
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

//Lab 9, Exercise 8

var mark_adder = (function(inc) {
	var counter = 0;
	return function() {
		return counter += inc;
	};
})();


//Lab 10, Exercise 10

var Employee = (function() {
	var name;
	var age;
	var salary;
	let getAge = function() {
		return age;
	}
	let getSalary = function() {
		return salary;
	}
	let getName = function() {
		return name;
	}
	let setAge = function(newAge) {
		age = newAge;
	}
	let setName = function(newName) {
		name = newName;
	}
	let setSalary = function(newSalary) {
		salary = newSalary;
	}
	let increaseSalary = function(percentage) {
		setSalary((getSalary() * (percentage / 100)));
	}
	let incrementAge = function(index) {
		setAge(getAge() + index);
	}
	return {
		setAge: setAge,
		setSalary: setSalary,
		setName: setName,
		increaseSalary: increaseSalary,
		incrementAge: incrementAge
	};
})();

//Lab 10, Exercise 12

var Employee = (function() {
	var name;
	var age;
	var salary;

	var employee = {};

	employee.setAge = function(newAge) {
		age = newAge;
	};
	employee.setSalary = function(newSalary) {
		salary = newSalary;
	};
	employee.setName = function(newName) {
		name = newName;
	};
	employee.increaseSalary = function(percentage) {
		setSalary((getSalary() * (percentage / 100)));
	};
	employee.incrementAge = function(index) {
		setAge(getAge() + index);
	};
	let getAge = function() {
		return age;
	}
	let getSalary = function() {
		return salary;
	}
	let getName = function() {
		return name;
	}
	return { employee };
})();

//Lab 10, Exercise 13

Employee.address = 'Grand Vile Avenue';
Employee.setAddress = function(newAddress) {
	this.address = newAddress;
}
Employee.getAddress = function() {
	return this.address;
}

//TESTING GITHUB IN BOTH LAPTOPS
//TESTING AGAIN OLD PC
//LAST TESTING