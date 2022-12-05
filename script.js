const title = document.querySelector('.logo_subtitle');
const txt = "All Amiibos, organized by franchises, games, and more. For educational purposes only. Just that easy."

function typewriter(word, index){
    if(index < word.length) {
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`
            typewriter(txt, index + 1)
        }, 35);
    }
}
setTimeout(() => {
    typewriter(txt, 0)
}, 500);
