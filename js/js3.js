 //Declare studentList Array

 const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
const cLastNameResults = [];
for (const student of studentList) {
    if (student.lastName[0] === "C") {
        let gradesSum = 0;
        for (const grade of student.scores) {
        gradesSum += grade;
        }
        const averageGrade = gradesSum / student.scores.length;
        const minGrade = Math.min(...student.scores);
        const maxGrade = Math.max(...student.scores);
        cLastNameResults.push({
            firstName: student.firstName,
            lastName: student.lastName,
            avgGrade: averageGrade,
            minGrade: minGrade,
            maxGrade: maxGrade
        });
    }
}
console.log(cLastNameResults);