let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   profile.classList.remove('active');
}

let mainImage = document.querySelector('.quick-view .box .row .image-container .main-image img');
let subImages = document.querySelectorAll('.quick-view .box .row .image-container .sub-image img');

subImages.forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      mainImage.src = src;
   }
});

// Get all the required form fields.
const requiredFields = document.querySelectorAll('.required-field');

// Add an event listener to the button.
const button = document.querySelector('button');
button.addEventListener('click', e => {
  // Check if all the required form fields are filled up.
  const areAllRequiredFieldsFilledUp = requiredFields.every(field => field.value !== '');

  // If any of the required form fields are empty, add the 'unclickable' class to the button.
  if (!areAllRequiredFieldsFilledUp) {
    button.classList.toggle('unclickable');
  } else {
    // If all the required form fields are filled up, remove the 'unclickable' class from the button.
    button.classList.toggle('unclickable');
  }

document.querySelectorAll('.truck-button').forEach(button => {
   button.addEventListener('click', e => {

       e.preventDefault();
       
       let box = button.querySelector('.box'),
           truck = button.querySelector('.truck');
       
       if(!button.classList.contains('done')) {
           
           if(!button.classList.contains('animation')) {

               button.classList.add('animation');

               gsap.to(button, {
                   '--box-s': 1,
                   '--box-o': 1,
                   duration: .3,
                   delay: .5
               });

               gsap.to(box, {
                   x: 0,
                   duration: .4,
                   delay: .7
               });

               gsap.to(button, {
                   '--hx': -5,
                   '--bx': 50,
                   duration: .18,
                   delay: .92
               });

               gsap.to(box, {
                   y: 0,
                   duration: .1,
                   delay: 1.15
               });

               gsap.set(button, {
                   '--truck-y': 0,
                   '--truck-y-n': -26
               });

               gsap.to(button, {
                   '--truck-y': 1,
                   '--truck-y-n': -25,
                   duration: .2,
                   delay: 1.25,
                   onComplete() {
                       gsap.timeline({
                           onComplete() {
                               button.classList.add('done');
                           }
                       }).to(truck, {
                           x: 0,
                           duration: .4
                       }).to(truck, {
                           x: 40,
                           duration: 1
                       }).to(truck, {
                           x: 20,
                           duration: .6
                       }).to(truck, {
                           x: 96,
                           duration: .4
                       });
                       gsap.to(button, {
                           '--progress': 1,
                           duration: 2.4,
                           ease: "power2.in"
                       });
                   }
               });
               
           }
           
       } else {
           button.classList.remove('animation', 'done');
           gsap.set(truck, {
               x: 4
           });
           gsap.set(button, {
               '--progress': 0,
               '--hx': 0,
               '--bx': 0,
               '--box-s': .5,
               '--box-o': 0,
               '--truck-y': 0,
               '--truck-y-n': -26
           });
           gsap.set(box, {
               x: -24,
               y: -6
           });
       }

   });
});

});