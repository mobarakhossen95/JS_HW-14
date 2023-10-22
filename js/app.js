// quantity section starts
let incrementBtn = document.querySelector(`#quantity .cart .increment`);
let result = document.querySelector (`#quantity .cart .result`);

// increment
 incrementBtn.addEventListener(`click`, () => {
    result.value = Number (result.value) + 1;
});
// decrement
let decrementBtn = document.querySelector(`#quantity .cart .decrement`);

decrementBtn.addEventListener(`click`, () => {
  if( result.value > 1){
    result.value =Number(result.value) -1;
  }
})
// quantity section ends

// range section starts
let rangeSlider = document.querySelector(`#range .rangeSlider`);
let output =document.querySelector(`#range .output`);


rangeSlider.addEventListener(`input`, () => {
    output.innerHTML = rangeSlider.value
});
// quantity section ends

// colorize section starts
let colorizeBtn = document.querySelector(`#colorize .colorize`)
let colorize = document.querySelector (`#colorize`)

colorizeBtn.addEventListener(`click`, () => {
  const red = Math.round( Math.random() * 255);
  const green = Math.round( Math.random() * 255);
  const blue = Math.round( Math.random() * 255);

colorize.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
});
// colorize section ends

// password section starts
 let userPassword = document.querySelector(`#password .password`);
 let  eyeBtn = document.querySelector(`#password .eye`);

 eyeBtn.addEventListener(`click`, () => {
  if (userPassword.type == `password`){
    userPassword.type =`text`;
    eyeBtn.innerHTML = `<i class="bi bi-eye"></i>`
  }
  else{
    userPassword.type =`password`
    eyeBtn.innerHTML = `<i class="bi bi-eye-slash"></i>`

  }
 });
// password section ends

// password section starts
let onePassword = document.querySelector(`#password .passwordOne`);
let  oneEyeBtn = document.querySelector(`#password .eyeOne`);

oneEyeBtn.addEventListener(`click`, () => {
 if (onePassword.type == `password`){
  onePassword.type =`text`;
  oneEyeBtn.innerHTML = `<i class="bi bi-eye"></i>`
 }
 else{
  onePassword.type =`password`
  oneEyeBtn.innerHTML = `<i class="bi bi-eye-slash"></i>`

 }
});
// password section ends