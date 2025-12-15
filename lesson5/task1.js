const averageGrade = 171;

if (averageGrade >= 0 && averageGrade <= 59) {
    console.log('Незадовільно');
} else if (averageGrade >= 60 && averageGrade <= 70) {
    console.log('Задовільно');
} else if (averageGrade >= 71 && averageGrade <= 80) {
    console.log('Добре');
} else if (averageGrade >= 81 && averageGrade <= 90) {
    console.log('Дуже добре');
} else if (averageGrade >= 91 && averageGrade <= 100) {
    console.log('Відмінно');
} else if (averageGrade < 0) {
    console.log('Некоректне значення')
} else {
    console.log('Значення більше 100. Ви Ейнштейн!');
}