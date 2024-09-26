const birthYear = document.getElementById("input-year");
const birthMonth = document.getElementById("input-month");
const birthDay = document.getElementById("input-date");
const button = document.querySelector(".btn");
const ageYear = document.querySelector(".year");
const ageMonth = document.querySelector(".month");
const ageDay = document.querySelector(".date");
const showLable = document.querySelector(".lable");

let calculateAge = () => {
	let currentYear = new Date().getFullYear();
	let currentMonth = new Date().getMonth() + 1; // Months are zero-indexed
	let currentDate = new Date().getDate();

	let years = currentYear - birthYear.value;
	let months = currentMonth - birthMonth.value;
	let days = currentDate - birthDay.value;

	if (days < 0) {
		months--;
		days += new Date(currentYear, currentMonth - 1, 0).getDate();
	}

	if (months < 0) {
		years--;
		months += 12;
	}

	ageYear.innerHTML = `${years} Years `;
	ageMonth.innerHTML = `${months} Months `;
	ageDay.innerHTML = `${days} Days `;
};

button.addEventListener("click", calculateAge);
