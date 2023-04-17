let number = document.getElementById('number');
let increaseBtn = document.getElementById('increase');
let saveBtn = document.getElementById('save');
let display = document.getElementById('display');

let count = 0;

increaseBtn.addEventListener( 'click', () => {
    count += 1;
    console.log(count);
    number.textContent = count;
});

saveBtn.addEventListener( 'click', () => {
    display.textContent = display.textContent + count + ' - ';
    count = 0;
    number.textContent = 0;

});
