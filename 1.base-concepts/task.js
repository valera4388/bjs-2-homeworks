"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let diskriminant = b ** 2 - 4 * a * c;

  if (a === 0) {
		
		if (b === 0) {
		
		} else {
			arr.push(-c / b);
		}
	} else if (diskriminant === 0) {
		
		arr.push(-b / 2 * a);
	} else if (diskriminant > 0) {
		
		arr.push((-b + Math.sqrt(diskriminant)) / (2 * a));
		arr.push((-b - Math.sqrt(diskriminant)) / (2 * a));
	}

  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  percent = +percent;
	if (isNaN(percent) || (percent < 0) || (percent > 100)) {
		return 0;
	}

	contribution = +contribution;
	if (isNaN(contribution) || contribution < 0) {
		return 0;
	}

	amount = +amount;
	if (isNaN(amount) || amount <= 0) {
		return 0;
	}

	countMonths = +countMonths;
	if (isNaN(countMonths) || countMonths <= 0) {
		return 0;
	}

	let p = percent / 100 / 12;

	let s = amount - contribution;
	let sumOfPayments = 0;

	sumOfPayments = (countMonths * s * (p + (p / (Math.pow((1 + p), countMonths) - 1)))).toFixed(2);

	return +sumOfPayments;
  
}