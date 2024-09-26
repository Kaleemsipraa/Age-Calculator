const birthYear = document.getElementById("input-year");
const birthMonth = document.getElementById("input-month");
const birthDay = document.getElementById("input-date");
const button = document.querySelector(".btn");
const ageYear = document.querySelector(".year");
const ageMonth = document.querySelector(".month");
const ageDay = document.querySelector(".date");
const showLable = document.querySelector(".lable");

const date = new Date();

let calculateAge = () => {
	let currentYear = date.getFullYear();
	let currentMonth = date.getMonth();
	let currentDate = date.getDate();

	// ===> calculate years
	let years = currentYear - birthYear.value;

	// ===> calculate months
	let months = 0;
	let totalMonths = 12;
	let minsMonths = totalMonths - birthMonth.value;
	if (minsMonths > birthMonth.value) {
		months = birthMonth.value - birthMonth.value;
	} else if (minsMonths > birthMonth.value) {
		months = birthMonth.value - birthMonth.value;
	}

	// if (currentMonth > birthMonth.value) {
	// 	months = currentMonth - birthMonth.value;
	// } else if (currentMonth < birthMonth.value) {
	// 	months = birthMonth.value - currentMonth;
	// } else if (currentMonth === birthMonth.value) {
	// 	years++;
	// }

	// ===> Calculate days
	let days = 0;
	// days = currentDate - birthDay.value;
	if (currentDate < birthDay.value) {
		days = birthDay.value - currentDate;
	} else {
		days = currentDate - birthDay.value;
	}

	ageYear.innerHTML = `${years} Years `;
	ageMonth.innerHTML = `${months} Months`;
	ageDay.innerHTML = `${days} Days`;
};

button.addEventListener("click", () => {
	calculateAge();
	// ageYear.value = "";
	// ageMonth.value = "";
	// ageDay.value = "";
});
