const accordion = document.querySelectorAll('.js-accordion');

accordion.forEach(acc => {
    acc.addEventListener('click', () => {
        let dad = acc.parentElement;

        dad.classList.toggle('active');
    })
})