const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.closebtn');
const menu_btn = document.querySelector('.hamburger');

menu_btn.addEventListener('click', () =>{
        menu_btn.classList.toggle('is-active');
        modal.showModal();
})
closeModal.addEventListener('click', () =>{
        modal.close();
        menu_btn.classList.toggle('is-active');

})
const welcome = document.querySelector('.welcome');
const welcomeSlides = ['Refined Styling', 'Crisp Logic', 'SEO Compatibilty'];



 welcomeSlides.forEach(slide => welcome.innerHTML = slide);








const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes(){
const triggerBottom = (window.innerHeight / 5 * 4);

boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
        box.classList.add('show');
    }else{
        box.classList.remove('show');
    }

})
}
