const questionSection = document.querySelectorAll('.question-section');
const answer = document.querySelectorAll('.answer');
const expandIcon = document.querySelectorAll('.expand');

const checkExpand = () => {
    for (question of questionSection) {
        if (question.classList.contains('expanded')) {
            return true;
        }
    }
}

