const likeBtn = document.getElementById("likeBtn");
const likeCounter = document.getElementById("likeCounter");
let count = 0;

export function countLikes(){
    likeBtn.addEventListener("click", () => {
        count++;
        likeCounter.textContent = count; // similar a innerText
    });
} // countLikes