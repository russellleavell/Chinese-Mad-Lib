// Function to display the day-of-the-week greeting
const days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
const today = new Date();
const dayOfWeek = days[today.getDay()];

// Find the greeting element and update it
const greetingElement = document.getElementById('greeting');
if (greetingElement) {
    greetingElement.textContent = `${dayOfWeek}快乐！`;
}

// Function to navigate to the next page
function startGame() {
    window.location.href = 'madlib.html';
}