// const button = document.querySelector("button");
// const input1 = document.getElementById("num1") as HTMLInputElement;
// const input2 = document.getElementById("num2") as HTMLInputElement;

// const add = (num1: number, num2: number) => {
// 	return num1 + num2;
// };

// button?.addEventListener("click", () => {
// 	console.log(add(+input1.value, +input2.value));
// });

// const data: {
// 	id: number;
// 	price: number;
// 	permission: string[];
// 	details: { title: string; description: string };
// } = {
// 	id: 1,
// 	price: 10.99,
// 	permission: ["read", "write"],
// 	details: {
// 		title: "New product",
// 		description: "",
// 	},
// };

// enum Role {
// 	ADMIN,
// 	USER,
// }

// const person = {
// 	role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
// 	console.log("Role: ", Role.ADMIN);
// }

// let calc = (
// 	param1: number,
// 	param2: number,
// 	callback: (num1: number, num2: number) => number,
// ): void => {
// 	console.log("Result:", callback(param1, param2));
// };

// calc(1, 1, (num1, num2) => num1 + num2);

// calc(10, 5, (num1, num2) => num1 - num2);

// let arr: string[] = [];

// arr = ["string"];

// let arrNumber: number[] = [];

// arrNumber = [1, 4, 6, 7, 78];

// let arrAny: any[] = [];

// arrAny = [1, 5, 34, "dddw", true];

// let db: {
// 	id: number;
// 	title: string;
// 	info: {
// 		date: Date;
// 		isNew: boolean;
// 	};
// };

// db = { id: 1, title: "book", info: { date: new Date(), isNew: true } };

// console.log(db);

// const combine = (param1: string | number, param2: string | number) => {
// 	if (typeof param1 === "string" || typeof param2 === "string") {
// 		return param1.toString() + param2.toString();
// 	}
// 	return param1 + param2;
// };

// console.log(combine(2, 5));
// console.log(combine("2", "5"));
// console.log(combine("2", 5));
// console.log(combine(2, "5"));
// console.log(combine(2, 514365361456));

// const fruit = [];

// const workWithArr = (arr: string[], value: string, action: "add" | "remove") => {
// 	if (action === "add") {
// 		arr.push(value);
// 	} else {
// 		const idx = arr.indexOf(value);
// 		if (!idx) {
// 			return arr;
// 		}
// 		arr.splice(idx, 1);
// 	}
// 	return arr;
// };

// console.log(workWithArr(fruit, "cucamber", "add"));
// console.log(workWithArr(fruit, "tomato", "add"));
// console.log(workWithArr(fruit, "watermelon", "add"));
// console.log(workWithArr(fruit, "peach", "add"));
// console.log(workWithArr(fruit, "banana", "add"));

// console.log(workWithArr(fruit, "tomato", "remove"));
// console.log(workWithArr(fruit, "peach", "remove"));

//Practice

// let age: number = 50;
// let person: string = "Max";
// let toggle: boolean = true;
// let empty: null = null;
// let notInitialize: undefined = undefined;
// let callback: (a: number) => number;
// callback = (a) => {
// 	return 100 + a;
// };

// let anything: any = -20;
// anything = "Text";
// anything = {};

// let some: unknown;
// some = "Text";

// let str: string;
// if (typeof some === "string") str = some;

// let person1: [string, number];
// person1 = ["Max", 21];
// enum Status {
// 	LOADING,
// 	READY,
// }

// let statusMessage = {
// 	field: Status.LOADING,
// };

// if (statusMessage.field === Status.LOADING) {
// 	console.log("Loading", Status.LOADING);
// }
// if (statusMessage.field === Status.READY) {
// 	console.log("Success", Status.READY);
// }

// let multi: string | number;
// multi = "string";
// multi = 9;

// let switcher: "enable" | "disable";
// switcher = "enable";
// switcher = "disable";

// function showMessage(message: string): void {
// 	console.log(message);
// }

// function calc(num1: number, num2: number): number {
// 	return num1 + num2;
// }

// function customError(): never {
// 	throw new Error("Error");
// }

// type Page = {
// 	title: string;
// 	likes: number;
// 	accounts: string[];
// 	status: "open" | "close";
// 	details?: {
// 		createAt: string;
// 		updateAt: string;
// 	};
// };

// const page1: Page = {
// 	title: "The awesome page",
// 	likes: 100,
// 	accounts: ["Max", "Anton", "Nikita"],
// 	status: "open",
// 	details: {
// 		createAt: "2021-01-01",
// 		updateAt: "2021-05-01",
// 	},
// };

// const page2: Page = {
// 	title: "Python or Js",
// 	likes: 3,
// 	accounts: ["Alex"],
// 	status: "close",
// };

// const obj1 = { a: 5, b: 7 };
// const obj2 = { a: "5", b: "7" };
// const obj3 = { ...obj1 /* */, ...obj2 };

// const date = new Date().getMonth() + 1;

// class Car {
// 	private needRepair = false;
// 	private maxEngineLoad = 3;

// 	private checkEngine() {
// 		if (this.needRepair) {
// 			throw new Error("Engine do not work");
// 		}

// 		const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
// 		if (this.maxEngineLoad === engineLoad) {
// 			this.needRepair = true;
// 			throw new Error("Engine broken again");
// 		}
// 	}
// 	public startEngine() {
// 		this.checkEngine();

// 		console.log("Ta-ra-ta-ta");
// 	}
// 	public repairEngine() {
// 		this.needRepair = false;

// 		console.log("Engine repair");
// 	}
// }

// const auto = new Car();

// try {
// 	auto.startEngine();
// 	auto.startEngine();
// 	auto.startEngine();
// 	auto.startEngine();
// } catch (e) {
// 	console.log(e);
// 	auto.repairEngine();
// 	auto.startEngine();
// }

// class House {
// 	private tenants: string[] = [];

// 	constructor(
// 		private street: string,
// 		private appt: number,
// 		private streetNumber: number,
// 		public readonly type: string,
// 	) {}
// 	public showAdress(this: House): void {
// 		console.log(`Address: ${this.street} ${this.streetNumber} appt: ${this.appt}`);
// 	}

// 	public showType() {
// 		console.log("Type: " + this.type);
// 	}

// 	public addTenant(name: string) {
// 		this.tenants.push(name);
// 	}

// 	public showTenant() {
// 		console.log(this.tenants);
// 	}
// }

// class House {
// 	private street: string;
// 	private dwellers: string[] = [];
// 	constructor(n: string) {
// 		this.street = n;
// 	}
// 	public showAddress(this: House) {
// 		console.log(`Address: ${this.street}`);
// 	}
// 	public addDwellers(dwellerName: string) {
// 		this.dwellers.push(dwellerName);
// 	}
// 	public showDwellers() {
// 		console.log(this.dwellers.join(", "));
// 	}
// }

// Readonly -----------------------------------------------------------------------

// const house = new House("Luteranskiy");

// house.showAddress();
// house.addDwellers("Mike");
// house.addDwellers("Elly");
// house.showDwellers();

// class ShortHouse {
// 	constructor(private readonly type: string, private street: string) {}
// 	// changeType(type: string) {
// 	// 	this.type = type; // warning
// 	// }
// 	showType() {
// 		console.log(this.type);
// 	}
// 	changeStreet(newStreet: string) {
// 		this.street = newStreet;
// 	}
// 	showStreet() {
// 		console.log(this.street);
// 	}
// }

// const myHouse = new ShortHouse("block", "M. Arnaytskaya");

// console.log(myHouse);

// const myHouse = { street: "Dvorianskaya", showAddress: house.showAddress };

// myHouse.showAddress();

/** Модификаторы доступа  -----------------------------------------------------------*/

// class A {
// 	private privateProperty = "str";
// }

// class B extends A {
// 	showPropery() {
// 		console.log("Property is " + this.privateProperty);
// 	}
// }

// class A {
// 	protected privateProperty = "str";
// }

// class B extends A {
// 	showProperty() {
// 		console.log("Property is " + this.privateProperty);
// 	}
// }

// const a = new A();
// const b = new B();

// // a.privateProperty;
// // b.privateProperty;

// b.showProperty();

// const myHouse = new House("Heroiv Oboroni Odessi", 52, 52, "5 stages"); //?
// const myFlat = new House("Dalnickaya", 15, 25, "30 stages"); //?
// const myCountryHouse = new House("Sortova", 48, 20, "2 stages"); //?

// myHouse.addTenant("Nick");
// myHouse.addTenant("Nicka");

// myHouse.addTenant("Lara");
// myHouse.addTenant("Erica");
// myHouse.showAdress();
// myFlat.showAdress();
// myCountryHouse.showAdress();
// myHouse.showTenant();

// myHouse.showType();

// class StoneHouse extends House {
// 	private chargeOfTheHouse: string;
// 	constructor(public type: string, general: string) {
// 		super("stone", street, appt);
// 		this.chargeOfTheHouse = general;
// 	}
// }

// Наследование ----------------------------------------------------------------------

// class House {
// 	private dwellers: string[] = [];
// 	constructor(private readonly type: string, private street: string) {}

// 	public showAddress(this: House) {
// 		console.log(`Address: ${this.street}`);
// 	}

// 	public showType(this: House) {
// 		console.log(`Type: ${this.type}`);
// 	}

// 	public addDweller(dweller: string) {
// 		this.dwellers.push(dweller);
// 	}

// 	public showDwellers() {
// 		console.log(this.dwellers.join(", "));
// 	}
// }

// class MyHouse extends House {
// 	private changeOfTheHouse: string;

// 	constructor(street: string, generalDweller: string) {
// 		super("stone", street);

// 		this.changeOfTheHouse = generalDweller;
// 		this.addDweller(generalDweller);
// 	}
// 	public showDwellers() {
// 		console.log("General:" + this.changeOfTheHouse);
// 		super.showDwellers();
// 	}
// }

// const house = new MyHouse("Stonersmith", "Eric");

// const newDwellers: string[] = ["Alex", "Marry", "Alisha", "Erica"];

// newDwellers.map((newDweller: string) => house.addDweller(newDweller));

// house.showAddress();
// house.showType();
// house.showDwellers();

// Getters & Setters ----------------------------------------------------------------------

// type PersonInformation = {
// 	firstName?: string;
// 	lastName?: string;
// };

// class Person {
// 	private personInfo: PersonInformation = {};

// 	set firstName(value: string) {
// 		console.log("firstName added");
// 		this.personInfo.firstName = value;
// 	}

// 	set lastName(value: string) {
// 		console.log("lastName added");
// 		this.personInfo.lastName = value;
// 	}
// 	get info() {
// 		const { personInfo } = this;
// 		return `${personInfo.firstName} ${personInfo.lastName}`;
// 	}
// }

// const person = new Person();

// person.lastName = "Haber";
// person.firstName = "Viacheslav";

// console.log(person.info);

// const stoneHouse = new StoneHouse("Tarasa Shevchenko", 15, 25, "stone");
// stoneHouse.showAdress();
// stoneHouse.showTenant();
// stoneHouse.showType();

class UseStatic {
	private static count = 0;
	constructor() {
		UseStatic.count += 1;
	}

	public static itStaticMethod() {
		console.log("Run static method");
	}

	public showCount() {
		console.log("Count: " + UseStatic.count);
	}
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();

obj1.showCount();
obj2.showCount();
obj3.showCount();

UseStatic.itStaticMethod();

// Udemy Practice

// let userName: string = "Viacheslav"; //?

// userName = "true"; //?

const isBirthday: boolean = true;
const age: number = 20;
const userName: string = "Daniel";

if (isBirthday) {
	console.log(`Congrats!!! ${userName}: ${age + 1} years old`);
}
