const programer = {
  name: "Carlos",
  age: 28,
  tecnology: [
    {
      nome: "C++",
      especialidade: "Desktop"
    },
    {
      nome: "Python",
      especialidade: "Data Science"
    },
    {
      nome: "JavaScript",
      especialidade: "Web/Mobile"
    }
  ]
};

console.log(`O programador ${programer.name} tem ${programer.age} e usa a tecnologia ${programer.tecnology[0].nome}, com especialidade ${programer.tecnology[0].especialidade}`);