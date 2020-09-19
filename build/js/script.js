
const tabs = document.querySelector('.form__tabs');
const authTab = document.querySelector('#authtab');
const regTab = document.querySelector('#regtab');
const form = document.querySelector('.form');
const authForm = document.querySelector('.form__auth');
const regForm = document.querySelector('.form__reg');

tabs.addEventListener('click' , e => {
  e = e.target;
  if(!e.classList.contains('form__link-active')){
    regTab.classList.toggle('form__link-active');
    authTab.classList.toggle('form__link-active')
  }
  if(regTab.classList.contains('form__link-active')){
    form.classList.remove('form-auth');
    form.classList.add('form-reg');
    regForm.classList.add('form__reg-active')
    authForm.classList.remove('form__auth-active');
  }
  if(authTab.classList.contains('form__link-active')){
    form.classList.add('form-auth');
    form.classList.remove('form-reg');
    regForm.classList.remove('form__reg-active')
    authForm.classList.add('form__auth-active');
  }
})

$('#phone').mask('+7(999)999-99-99');
$('#date').mask('99.99.9999');
$('#snils').mask('999-999-999 99');