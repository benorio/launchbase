const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card-course")
const modal = document.querySelector(".modal")

for (let card of cards){
  card.addEventListener("click", function(){
    const courseId = card.getAttribute("id")
    window.location.href = `/course/${courseId}`
  })
}
