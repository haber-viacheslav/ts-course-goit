// const box = document.querySelector(".box") as HTMLElement;
// const input = document.querySelector(".text-input") as HTMLInputElement;
// const description = document.querySelector(".description") as HTMLParagraphElement;
// const link = document.querySelector(".gh-link") as HTMLAnchorElement;
// const inputEl = input?.value;
// const boxEl = box?.classList;
// console.log(inputEl);

// if (link) {
// 	link.href = "https://www.google.com/";
// }

// const elem = document.createElement("a");

// link.addEventListener("click", (e) => e.preventDefault());
// import { refs } from "./refs";
const formsRefs = document.querySelectorAll("form");
const emailRef = document.querySelector("#email") as HTMLInputElement;
const titleRef = document.querySelector("#title") as HTMLInputElement;
const textRef = document.querySelector("#text") as HTMLTextAreaElement;
const checkboxRef = document.querySelector("#checkbox") as HTMLInputElement;

interface IFormData {
	email: string;
	title: string;
	text: string;
	checkbox: boolean;
}

const formData: IFormData = {
	email: "",
	title: "",
	text: "",
	checkbox: false,
};

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

formsRefs.forEach((form) =>
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		formData.email = emailRef?.value ?? "";
		formData.title = titleRef?.value ?? "";
		formData.text = textRef?.value ?? "";
		formData.checkbox = checkboxRef?.checked ?? false;

		if (validateFormData(formData)) {
			checkFormData(formData);
		}
	}),
);

function validateFormData(data: IFormData): boolean {
	if (Object.values(data).every((value) => value)) {
		return true;
	} else {
		console.log("Please, complete all fields");
		return false;
	}
}

function checkFormData(data: IFormData) {
	const { email } = data;
	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

	if (emails.some((e) => e === email)) {
		console.log("This email is already exist");
	} else {
		console.log("Posting data...");
	}
}

console.dir(typeof document.all);
