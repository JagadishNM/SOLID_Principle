class Animal {
	eat() {
		console.log('Animal eats');
	}
}

class Birds extends Animal {
	fly() {
		console.log('Birds fly');
	}
}

const parrots = new Birds();
console.log(parrots.eat());
console.log(parrots.fly());

// In the previous example, I have created an object named parrot from the Bird class
// and called both the eat() and fly() methods. Since the parrot is capable of both those actions,
// extending the Animal class to the Bird class does not violate the Liskov principle.

// Now let’s extend the Bird class further and create a new class named Ostrich.

class Ostrich extends Birds {
	walk() {
		console.log('Ostrich walks');
	}
}

let ostrich = new Ostrich();
console.log(ostrich.eat());
console.log(ostrich.fly());

// This extension of the Bird class violates the Liskov principle since Ostriches cannot
//  fly—this could create unexpected behavior in the application. The best way to address
//  this case is to extend the Ostrich class from the Animal class.

class Ostrich1 extends Animal {
	walk() {
		console.log('Ostrich Walks');
	}
}
