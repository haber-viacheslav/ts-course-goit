"use strict";
// const formsRefs = document.querySelectorAll("form");
// const emailRef = document.querySelector("#email");
// const titleRef = document.querySelector("#title");
// const textRef = document.querySelector("#text");
// const checkboxRef = document.querySelector("#checkbox");
// const formData = {
// 	email: "",
// 	title: "",
// 	text: "",
// 	checkbox: false,
// };
// formsRefs.forEach((form) =>
// 	form.addEventListener("submit", (e) => {
// 		e.preventDefault();
// 		formData.email = emailRef?.value ?? "";
// 		formData.title = titleRef?.value ?? "";
// 		formData.text = textRef?.value ?? "";
// 		formData.checkbox = checkboxRef?.checked ?? false;
// 		if (validateFormData(formData)) {
// 			checkFormData(formData);
// 		}
// 	}),
// );
// function validateFormData(data) {
// 	if (Object.values(data).every((value) => value)) {
// 		return true;
// 	} else {
// 		console.log("Please, complete all fields");
// 		return false;
// 	}
// }
// function checkFormData(data) {
// 	const { email } = data;
// 	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
// 	if (emails.some((e) => e === email)) {
// 		console.log("This email is already exist");
// 	} else {
// 		console.log("Posting data...");
// 	}
// }
// console.dir(typeof document.all);

function stringChecker(s, p1, p2) {
	let counterForP1 = 0;
	let counterForP2 = 0;
	const normalizedS = s.replace(/\s+/g, ""); //?
	const normalizedP1 = p1.replace(/\s+/g, ""); //?
	const normalizedP2 = p2.replace(/\s+/g, ""); //?
	const lettersFromS = normalizedS.split("");
	for (const letter of lettersFromS) {
		if (counterForP2 < normalizedP2.length && letter === normalizedP2[counterForP2]) {
			counterForP2 += 1;
		} else if (counterForP1 < normalizedP1.length && letter === normalizedP1[counterForP1]) {
			counterForP1 += 1;
		} else {
			return false;
		}
	}
	return counterForP1 === normalizedP1.length && counterForP2 === normalizedP2.length;
}

console.log(stringChecker("radency", "rdnc", "aey"));
console.log(stringChecker("subscription", "sbscrptn", "uiio"));
console.log(stringChecker("detalisation", "dtlstn", "eaiaio"));
console.log(
	stringChecker("Do you have a cup of tea? Yes, I do!", " yo ha a cof tea Yes I", "Douveup ?, do!"),
);

console.log(stringChecker("w27y7", "27", "w7y"));
console.log(stringChecker("g8IksViN5TjvWdH4HC3", "kViN5WH4", "g8IsTjvdHC3"));

//# sourceMappingURL=dom.js.map
console.log(2 + "2" - 1); //?
