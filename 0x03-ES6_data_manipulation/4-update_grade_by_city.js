export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((student) => student.location === city)
    .map((student) => {
      let defaultGrade = 'N/A';
      newGrades.forEach((grade) => {
        if (grade.studentId === student.id) {
          defaultGrade = grade.grade;
        }
      });
      return { ...student, grade: defaultGrade };
    });
}
