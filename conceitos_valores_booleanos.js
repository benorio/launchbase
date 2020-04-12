const classA = [
  {
    name: "Figo",
    grade: 1.8
  },
  {
    name: "Zidane",
    grade: 10,
  },
  {
    name: "Cafu",
    grade: 9,
  }
]

const classB = [
  {
    name: "Ronaldinho",
    grade: 10,
  },
  {
    name: "Kaká",
    grade: 8,
  },
  {
    name: "Adriano",
    grade: 7,
  }
]

function calculateAverage(students) {
  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;
  }
  const average = sum / students.length;
  return average;
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

function sendMessage(average, turma) {
  average > 5 ?
    console.log(`A ${turma} tem média foi de ${average}. Parabéns aprovado`) :
    console.log(`A ${turma} tem average média de ${average}. Reprovado !`);
}

sendMessage(average1, "TurmaA");
sendMessage(average2, "TurmaB");

function markAsFlunked(student) {
  student.flunked = false;

  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`o Aluno ${student.name} está flunked!`);
  }
}

function studentsReprovados(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }
}

studentsReprovados(classA);