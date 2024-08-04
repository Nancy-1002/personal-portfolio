let navLinks = document.querySelectorAll('nav ul li a');


navLinks.forEach((item)=>{
    item.addEventListener('click', ()=>{
        navLinks.forEach((item)=>{
            item.classList.remove('active');
        })
        item.classList.add('active');
        document.querySelector('main > section.active').classList.remove('active');
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active');
    })
})


document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', ()=>{
    document.querySelector('#sidebar').classList.toggle('open');
    
})

for(let i=1;i<=15;i++) {
    let meteor= document.createElement('span');
    meteor.classList= 'meteor';
    document.querySelector('#home .meteor-shower').append(meteor);
}

const workModal = new bootstrap.Modal('#workModal')

const workElements= document.querySelectorAll("#my_work .work-items .wrap");

workElements.forEach((item)=>{
    item.addEventListener('click', ()=>{
        document.querySelector('#workModal .modal-body img').setAttribute('src',item.getAttribute('data-img'));
        document.querySelector('#workModal .modal-body .title').innerText = item.getAttribute('data-title');
        document.querySelector('#workModal .modal-body .description').innerText = item.getAttribute('data-description');
        document.querySelector('#workModal .modal-body .subject .value').innerText = item.getAttribute('data-subject');
        document.querySelector('#workModal .modal-body .sem .value').innerText = item.getAttribute('data-sem');
        document.querySelector('#workModal .modal-body .tech .value').innerText = item.getAttribute('data-tech');
        document.querySelector('#workModal .modal-body .project-demo a').setAttribute('href',item.getAttribute('data-project-demo'));

        workModal.show();
    })
});

const workModalElement = document.getElementById('workModal')
workModalElement.addEventListener('show.bs.modal', event => {
  document.getElementById('my_work').classList.add('blur');
  document.getElementById('sidebar').classList.add('blur');
})

workModalElement.addEventListener('hidden.bs.modal', event => {
    document.getElementById('my_work').classList.remove('blur');
    document.getElementById('sidebar').classList.remove('blur');
  })
  



  document.addEventListener('DOMContentLoaded', () => {
    let contactFormItems = document.querySelectorAll('#contact_me .form input, #contact_me .form textarea');
    console.log('Contact Form Items:', contactFormItems);

    contactFormItems.forEach((item) => {
        item.addEventListener('focus', () => {
            item.closest('.form-item').classList.add('focus');
        });

        item.addEventListener('blur', () => {
            if(!item.value){
                item.closest('.form-item').classList.remove('focus');
            }
        });
        
    });
});

