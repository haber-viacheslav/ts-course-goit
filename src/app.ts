// const button = document.querySelector("button") as HTMLInputElement;
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

// class UseStatic {
// 	private static count = 0;
// 	constructor() {
// 		UseStatic.count += 1;
// 	}

// 	public static itStaticMethod() {
// 		console.log("Run static method");
// 	}

// 	public showCount() {
// 		console.log("Count: " + UseStatic.count);
// 	}
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

// UseStatic.itStaticMethod();

// Udemy Practice

// let userName: string = "Viacheslav"; //?

// userName = "true"; //?

// const isBirthday: boolean = true;
// const age: number = 20;
// const userName: string = "Daniel";

// if (isBirthday) {
// 	console.log(`Congrats!!! ${userName}: ${age + 1} years old`);
// }

// const users = {
// 	Alan: {
// 		online: false,
// 	},
// 	Jeff: {
// 		online: true,
// 	},
// 	Sarah: {
// 		online: false,
// 	},
// };

// function countOnline(usersObj: any) {
// 	// Only change code below this line
// 	let countIsOnline: number = 0;
// 	for (const key in usersObj) {
// 		console.log(usersObj[key].online);

// 		if (usersObj[key].online === true) {
// 			break;
// 		}
// 		countIsOnline += 1; //?
// 	}
// 	return countIsOnline;
// 	// Only change code above this line
// }

// console.log(countOnline(users));

// let user = {
// 	name: "Kenneth",
// 	age: 28,
// 	data: {
// 		username: "kennethCodesAllDay",
// 		joinDate: "March 26, 2016",
// 		organization: "freeCodeCamp",
// 		friends: ["Sam", "Kira", "Tomo"],
// 		location: {
// 			city: "San Francisco",
// 			state: "CA",
// 			country: "USA",
// 		},
// 	},
// };

// function addFriend(userObj: any, friend: any) {
// 	// Only change code below this line
// 	console.log(userObj.data.friends); //?

// 	userObj.data.friends.push(friend);
// 	// Only change code above this line
// 	return userObj;
// }

// console.log(addFriend(user, "Pete"));

// Factorial

// function factorial(n: number): number | void {
// 	let fact: number = 1;
// 	for (let i: number = 0; i <= n; i += 1) {
// 		if (typeof n === "number" && n !== 0 && fact <= 1000) {
// 			fact = fact * n;
// 			console.log(fact);
// 		}
// 	}
// 	return fact;
// }

// console.log(factorial(30));

// const findSum = (n: number): void | number | undefined => {
// 	let sum: number = 0;
// 	for (let v: number = 1; v <= n; v += 1) {
// 		sum += v; //?
// 	}
// 	console.log("first solution", sum);

// 	return sum;
// };

// findSum(100); //?.

// const findSumBestSolution = (n: number): void | number | undefined => {
// 	return (n * (n + 1)) / 2;
// };

// console.log("second solution", findSumBestSolution(100)); //?.
// let count = 0;
// const recurse = () => {
// 	if (count === 5) return;
// 	count += 1;
// 	console.log(count);
// 	recurse();
// };

// recurse();

// function pow(x: number, y: number): number {
// 	if (y === 0) return 1;
// 	return x * pow(x, y - 1);
// }
// console.log(pow(5, 5));

// function sumofDigits(num: number): number | void {}

// sumofDigits(100);

// console.log(parseInt("08"));

// const names = ["Volodya", "Viktor", "Vasyl"];
// const extendedNames = names.join("-Viktor-").split("-"); //?

// console.log(extendedNames.lastIndexOf("Viktor")); //?

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
// 	likes: 5,
// 	accounts: ["Alex"],
// 	status: "close",
// };

// Наследование

// class House {
// 	constructor(
// 		private readonly type: string,
// 		private street: string,
// 		private tenants: string[] = [],
// 	) {}

// 	public showAddress(this: House) {
// 		console.log("Address: " + this.street);
// 	}

// 	public showType(this: House) {
// 		console.log("Type: " + this.type);
// 	}

// 	public addTenant(tenant: string) {
// 		this.tenants.push(tenant);
// 	}

// 	public showTenants(this: House) {
// 		console.log(`Tenants: ${this.tenants.join(", ")}`);
// 	}
// }

// class IceHouse extends House {
// 	private changeOfTheHouseOwner: string;
// 	constructor(street: string, generalTenant: string) {
// 		super("Ice", street);
// 		this.changeOfTheHouseOwner = generalTenant;
// 		this.addTenant(generalTenant);
// 	}
// 	public showTenants(): void {
// 		console.log("General: " + this.changeOfTheHouseOwner);
// 		super.showTenants();
// 	}
// }

// const iceHouse = new IceHouse("Santa street 34", "Alex");

// iceHouse.addTenant("Max");
// iceHouse.addTenant("Erica");
// iceHouse.addTenant("Paul");
// iceHouse.addTenant("Marry");
// iceHouse.showTenants();
// iceHouse.showAddress();
// iceHouse.showType();

// type PersonInformation = {
// 	fName?: string;
// 	lName?: string;
// };

// class Person {
// 	private personInfo: PersonInformation = {};

// 	set fName(value: string) {
// 		this.personInfo.fName = value;
// 	}

// 	set lName(value: string) {
// 		this.personInfo.lName = value;
// 	}

// 	get info() {
// 		const { personInfo } = this;
// 		return `Person: ${personInfo.fName} ${personInfo.lName}`;
// 	}
// }

// const person = new Person();

// person.fName = "Alex";
// person.lName = "Markovich";

// console.log(person.info);

// abstract class Plane {
// 	protected pilotInCabin = false;

// 	public sitInPlane() {
// 		this.pilotInCabin = true;
// 	}

// 	public abstract startEngine(): boolean;
// }

// class Maize extends Plane {
// 	public startEngine() {
// 		// Запускаем винты двигателя
// 		return true;
// 	}
// }

// class Boeing extends Plane {
// 	public startEngine() {
// 		// Разогреваем реактивные турбины
// 		return true;
// 	}
// }

// const maize = new Maize();

// const passangerPlane = new Boeing();

// console.log(`Maize: ${maize.startEngine()}, Airport plane: ${passangerPlane.startEngine()}`);

// Interfaces

// interface IPerson {
// 	name: string;
// 	age: number;
// 	greet(phrase: string): void;
// }

// interface IPilot {
// 	flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
// 	constructor(public name: string, public age: number) {
// 		if (this.age < 28) {
// 			throw new Error("Pilot to young");
// 		}
// 	}
// 	greet(phrase: string): void {
// 		console.log(`${phrase} ${this.name}`);
// 	}
// 	flyMessage(): void {
// 		console.log("Самолет набрал высоту, всем приятного полета!");
// 	}
// }

// const pilot = new Pilot("Anthony", 35);

// pilot.greet("Вас приветствует капитан корабля");
// pilot.flyMessage();

// // Readonly
// interface ITest {
// 	readonly name: string;
// }

// const person: ITest = {
// 	name: "Person Name",
// };

// console.log(person.name);

// // Extending Interfaces

// interface IPerson {
// 	name: string;
// 	age: number;

// 	greet(phrase: string): void;
// }

// interface IPilot extends IPerson {
// 	flymessage(): void;
// }

// type AddFunc = (num1: number, num2: number) => number;

// let add: AddFunc;

// add = (num1: number, num2: number) => {
//     return num1 + num2
// }

// interface AddFunc {
// 	(num1: number, num2: number): number;
// }

// let add: AddFunc;

// add = (num1: number, num2: number) => {
// 	return num1 + num2;
// };
// class Key {
// 	private signature: number;
// 	constructor() {
// 		this.signature = Number.parseFloat((Math.random() * (10 - 1) + 1).toFixed(3));
// 	}
// 	getSignature() {
// 		return this.signature;
// 	}
// }
// class Person {
// 	public name: string;
// 	public key: Key;
// 	constructor(key: Key, name: string) {
// 		this.key = key;
// 		this.name = name;
// 	}
// 	getKey(): Key {
// 		return this.key;
// 	}
// }

// abstract class House {
// 	door: "open" | "close" = "close";
// 	tenants: Person[] = [];

// 	constructor(protected key: Key) {}

// 	comeIn(person: Person) {
// 		if (this.door === "close") {
// 			throw new Error("Door is closed");
// 		}
// 		this.tenants.push(person);
// 		console.log(`Person: ${person.name} with ${person.key.getSignature()}`);
// 	}
// 	abstract openDoor(key: Key): string;
// }

// class MyHouse extends House {
// 	openDoor(key: Key) {
// 		if (key.getSignature() !== this.key.getSignature()) {
// 			throw new Error("This key don't open this door");
// 		}
// 		return (this.door = "open");
// 	}
// }

// const key = new Key();
// console.log(key);

// const myHouse = new MyHouse(key);
// const person = new Person(key, "Alex");

// myHouse.openDoor(person.getKey());

// myHouse.comeIn(person);

// const isBirthdayData: boolean = true;
// let ageData: number = 40;
// const userNameData: string = "Alex";

// interface IUserData {
// 	isBirthdayData: boolean;
// 	ageData: number;
// 	userNameData: string;
// }

// const userData: IUserData = {
// 	isBirthdayData: true,
// 	ageData: 40,
// 	userNameData: "Alex",
// };

// const gotUserData = JSON.stringify(userData);
// console.log(gotUserData);

// const userParsedData: IUserData = JSON.parse(gotUserData);

// console.log(userParsedData);

// function showBrtdMassage(isBirthday: boolean, age: number, userName: string): string {
// 	if (isBirthday) {
// 		return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
// 	}
// 	return "Error";
// }

// console.log(showBrtdMassage(isBirthdayData, ageData, userNameData));

// const currRate: string = "1.05";

// const fetchCurr = (response: string): number => {
// 	const data: number = JSON.parse(response);
// 	return data;
// };

// const createError = (msg: string): void => {
// 	if (msg) throw new Error(msg);
// };

// function transferEurToUsd(
// 	available: boolean,
// 	amount: number,
// 	commission: number,
// ): number | string | void {
// 	if (available === true) {
// 		let res: number = fetchCurr(currRate) * amount * commission;
// 		console.log(res);
// 		// Или запись в элемент на странице вместо консоли
// 	} else if (available === false) {
// 		return "Not avaliable";
// 	}
// 	return createError("Error");
// }

// // const smth: never = null;

// transferEurToUsd(true, 120, 1.05);

// const test: null = null;
// const test2: any = null;
// // const test3: string = null;
// // const test4: number = null;

// function getRandomData() {
// 	if (Math.random() < 0.5) {
// 		return null;
// 	} else {
// 		return "Some data    ";
// 	}
// }

// const data = getRandomData();
// const trimmedData = data ? data.trim() : null;

// let id: symbol = Symbol("id");

// const data = {
// 	[id]: 1,
// };

// console.log(data[id]);

// const num1: bigint = 1n;
// const num2: bigint = 2n;

// console.log(num1 + num2)

// interface IUserData {
// 	isBirthdayData: boolean;
// 	ageData: number;
// 	userNameData: string;
// 	messages: { error: string };
// }

// const userData: IUserData = {
// 	isBirthdayData: true,
// 	ageData: 40,
// 	userNameData: "Alex",
// 	messages: {
// 		error: "Error",
// 	},
// };

// const createError = (msg: string) => {
// 	throw new Error(msg);
// };

// const logBirthdayMsg = ({
// 	isBirthdayData,
// 	userNameData,
// 	ageData,
// 	messages: { error },
// }: IUserData): string => {
// 	if (isBirthdayData) {
// 		return `Congrats ${userNameData}, you're ${ageData}`;
// 	} else {
// 		return createError(error);
// 	}
// };

// console.log(logBirthdayMsg(userData));

// const deps: string[] = ["dev", "design", "marketing"];

// const dep = deps[0];

// deps.push("wcds");
// deps[3] = "analytics";
// // console.log(deps.join(", ") + "...");

// const report = deps.filter((d: string) => d !== "dev").map((d: string) => `${d} - done`);
// console.log(report);

// const [first, second, third] = report;

// console.log(first);
// console.log(second);
// console.log(third);

//Code typisation practice ------------------------------------------------------------

// interface IElData {
// 	readings: number;
// 	units?: string;
// 	mode: string;
// }

// const electricityUserData: IElData = {
// 	readings: 95,
// 	units: "kWt",
// 	mode: "double",
// };

// interface IWaterData {
// 	readings: number;
// 	units?: string;
// }

// const waterUserData: IWaterData = {
// 	readings: 3,
// 	units: "m3",
// };

// const elRate: number = 0.45;
// const wRate: number = 2;

// const monthPayments: number[] = [0, 0]; // [electricity, water]

// const calculatePayments = (
// 	elData: IElData,
// 	wData: IWaterData,
// 	elRate: number,
// 	wRate: number,
// ): void => {
// 	if (elData.mode === "double" && elData.readings < 50) {
// 		monthPayments[0] = elData.readings * elRate * 0.7;
// 	} else {
// 		monthPayments[0] = elData.readings * elRate;
// 	}

// 	monthPayments[1] = wData.readings * wRate;
// };

// calculatePayments(electricityUserData, waterUserData, elRate, wRate);

// const sendInvoice = (
// 	[el, water]: number[],
// 	electricityUserData: IElData,
// 	waterUserData: IWaterData,
// ) => {
// 	const text = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${el}€

//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${water}€`;

// 	return text;
// };

// console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));

// Tuples --------------------------------------------------------------------------

// const userData = {
// 	isBirthdayData: true,
// 	ageData: 40,
// 	userNameData: "Alex",
// 	messages: {
// 		error: "Error",
// 	},
// };

// const userDataTuple: [boolean, number, ...string[]] = [true, 40, "Alex"];

// const res = userDataTuple.map((t) => `${t} - data`);

// const [birthday, age, userName] = userDataTuple;

// Union ---------------------------------------------------------------------------

let message: string | number = 3;
const messages: string[] | number[] = ["33", "1", "15"];
const arrNumber = messages.map((value) => Number.parseInt(value));

console.dir(arrNumber);

function printMassage(msg: string | number | boolean): void {
	if (typeof msg === "string" || typeof msg === "number") {
		console.log(msg.toString());
	} else {
		console.log(msg.valueOf());
	}
}
// printMassage("Hello");
// printMassage(9);

function showMassage(msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		console.log(msg.join(" "));
	} else if (typeof msg === "number") {
		console.log(msg.toFixed(2));
	} else {
		console.log(msg);
	}
}

// showMassage(["Hello", "my", "friends:", "Alex", "Eric", "Nastya!"]);
// showMassage(555.12445);
// showMassage(true);

// Narrowing --------------------------------------------------------------------

const printReadings = (a: number | string, b: number | boolean): void => {
	if (typeof a === typeof b) {
		console.log(a, b);
	} else {
		console.log("Another type");
	}
};

// printReadings(4, 6);
// printReadings("sdsdsd", 7);

const printReadings2 = (a: number[] | string): void => {
	console.log(a.slice(0, 2));
};

// printReadings2([4, 6, 8, 2]);

const checkReadings = (readings: { system: number } | { user: number }): void => {
	if ("system" in readings) {
		console.log(readings.system);
	} else {
		console.log(readings.user);
	}
};

checkReadings({ system: 10 });
checkReadings({ user: 4 });

const logValue = (x: string | Date) => {
	if (x instanceof Date) {
		console.log(x.getDate());
	} else {
		console.log(x.length);
	}
};

// logValue(new Date());
// logValue("Alex");

// Literal types

let msg: "Hello" = "Hello";

msg = "Hello";

const serverConfig: {
	protocol: "udp" | "https";
	port: 3000 | 3001;
} = {
	protocol: "https",
	port: 3001,
};

const port3000: number = 3000;
const port3001: number = 3001;

const startServer: (protocol: "udp" | "https", port: 3000 | 3001) => string | void = (
	protocol: "udp" | "https",
	port: 3000 | 3001,
): string | void => {
	if (protocol === "udp") {
		console.log(protocol);
		return "Server started at port: " + port;
	}
	return "Server started";
};

function stopServer(protocol: "udp" | "https", port: 3000 | 3001): string | void {
	if (port === port3000 || port === port3001) {
		console.log(protocol);
		return `Server stoped at protocol: ${protocol} and port: ${port}`;
	}
	return console.error("Invalid port");
}

startServer(serverConfig.protocol, serverConfig.port);
// console.log(startServer("udp", 3000));
// console.log(stopServer("https", 3001));

type AnimationTF = "ease" | "ease-in" | "ease-out";
type AnimationID = string | number;

function createAnimation(
	num1: AnimationID,
	animName: string,
	timingFunct: AnimationTF = "ease",
	duration: number,
	iteration: number | "infinite",
): void {
	console.log(`${num1} ${animName} ${timingFunct} ${duration} ${iteration}`);
}

createAnimation("num1", "tasks", "ease", 134, "infinite");
