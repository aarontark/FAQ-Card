const questionSection = document.querySelectorAll('.question-section');
const answer = document.querySelectorAll('.answer');
const expandIcon = document.querySelectorAll('.expand');
const titleSection = document.querySelectorAll('.title-section');



for (const q of questionSection) {
    q.addEventListener('click', () => {
        const expandedAdd = () => {
            q.classList.add('expanded');
            q.children[1].classList.add('answer-expanded')
            q.children[1].classList.remove('answer');
            q.querySelector('.expand').src = "./assets/images/icon-minus.svg";
        }

        const expandedRemove = () => {
            q.classList.remove('expanded');
            q.children[1].classList.remove('answer-expanded')
            q.children[1].classList.add('answer');
            q.querySelector('.expand').src = "./assets/images/icon-plus.svg";
        }


        if (q.classList.contains('expanded')) {
            expandedRemove();
        } else {
            expandedAdd();
        }
})}