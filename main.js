let total = 0;
let operatorIsClickedLast = false;
let minus = false;
function displayInput(e) {
	const display = document.getElementById('display')
	const value = e.target.value;
	if (operatorIsClickedLast) {
		display.innerHTML = value
		operatorIsClickedLast = false
	}
	else {
		const oldVal = display.innerHTML
		display.innerHTML = `${oldVal}${value}`
	}
}
function parseScreenValue() {
	//code here...
	const name = 'faisal'
	return name
}
function add() {
	const display = document.getElementById('display')
	const expression = display.innerHTML;
	const num = Number(expression)
	total += num
	display.textContent = total	
	operatorIsClickedLast = true
}
function subtract() {
	const display = document.getElementById('display')
	const expression = display.innerHTML;
	const num = Number(expression)
	if (!minus) {
		minus = true
		total = num;
	}
	else {
		total -= num
	}
	display.textContent = total
	operatorIsClickedLast = true	
}
function multiply() {
	const display = document.getElementById('display')
	const expression = display.innerHTML;
	const num = Number(expression)
	if (total === 0) {
		total = num
	}
	else {
		total *= num
	}
	display.textContent = total
	operatorIsClickedLast = true	
}
function divide() {
	const display = document.getElementById('display')
	const expression = display.innerHTML;
	const num = Number(expression)
	total === 0 ? total = num : total /= num
	display.textContent = total
	operatorIsClickedLast = true	
}
function sum() {
	document.getElementById('display').textContent = total
}

/*function computeTotal() {
	const display = document.getElementById('display')
	const total = display.innerHTML;
	display.innerHTML = eval(total)
}*/