'Use strict'
window.addEventListener('DOMContentLoaded',()=>{
  const gamburger = document.querySelector('.gamburger');
        leftMenu = document.querySelector('.left-menu');
        close = document.querySelector('.left-menu__close');
        overlay = document.querySelector('.overlay');
    
        gamburger.addEventListener('click', ()=>{
          leftMenu.classList.add('left-menu_active');
          overlay.style.display = 'block';
        })
        close.addEventListener('click', ()=>{
          leftMenu.classList.remove('left-menu_active');
          overlay.style.display = 'none';
        })
/* для блока с процентами */
  const input = document.querySelectorAll('.lang__numb');
        width1 = document.querySelectorAll('.lang__novis');
        function calc() {
          input.forEach((item,i)=>{
            item.addEventListener('input',()=>{
              width1[i].style.width = `${input[i].value}`;
            })
          })
        }
        calc()
/* отправка данных с формы */
  const form = document.querySelector('.contact-form__main');
  form.addEventListener('submit', (e)=>{
   e.preventDefault();
   const formData = new FormData(form);

   async function post(url, data) {
    res = await fetch(url, {
      method:'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: data
    })
    return await res.json()
   }
   const json = JSON.stringify(Object.fromEntries(formData.entries()))

   post('http://localhost:3000/formAnswer', json)
   .then(()=>{
    form.reset();
    const div = document.createElement('div');
    div.textContent='Спасибо я с вами свяжусь';
    form.append(div);
    setTimeout(()=>{
      div.remove()
    }, 2000)
   })
  })


})