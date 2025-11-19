var property = {
	name: "Kalianah",
	first_name: "Kali",
	brand: "Mercedes",
	traction_number: 4
};

console.log(property.traction_number);
console.log(property.name);
console.log(property.brand);
console.log(property.first_name);

function User(name, surname) {
	this.name = name;
	this.surname = surname;
	this.set_name = function(new_name) {
		this.name = new_name;
	};
	this.del_name = function() {
		delete this.name;
	};
}

var User = new User("John", "Smith");
User.set_name("Pete");
console.log(User);
User.del_name();
console.log(User);

function Car(brand, model, year, color) {
	this.brand = brand;
	this.model = model
	this.year = year;
	this.color = color;
	this.description = function() {
		return 'this is a ' + this.color + ' ' + this.brand + ' ' + this.model + ' in ' + this.year + ' !!';
	};
}

var kalianah = new Car("mercedes", "190 Evo", "23/11/1900", "Maroon");
console.log(kalianah.description());


function Directory(name, contact) {
	this.structure = {};
	this.structure[name] = contact;
	this.get_contact = function(name) {
		return this.structure[name];
	};
	this.add_contact = function(name, contact) {
		this.structure[name] = contact;
	};
	this.print_all = function() {
		for (let x in this.structure) {
			console.log(name + ' => ' + this.structure[x]);
		}
	};
	this.delete_contact = function(name) {
		delete this.structure[name];
	};
}

var Annuaire = new Directory("kalianah", 10101010);
console.log(Annuaire.get_contact("kalianah"));
Annuaire.add_contact("kalianah-Kali", 5555555);
console.log(Annuaire);
console.log(Annuaire.get_contact("kalianah-Kali"));
Annuaire.print_all();
Annuaire.delete_contact("kalianah-Kali");
Annuaire.print_all();
Annuaire.delete_contact("kalianah");
Annuaire.print_all();
