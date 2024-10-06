const buttons = document.querySelectorAll('.btn button');
const sections = document.querySelectorAll('.section');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        sections.forEach((section) => {
            section.style.display = 'none';
        });
        const id = e.target.id;
        console.log(id);
        const sectionId = e.target.getAttribute('data-id');
        const activeSection = document.querySelector(`.${sectionId}`);
        activeSection.style.display = 'block';
    });
});

document.querySelector('.section1').style.display = 'block';
