const nav = document.querySelector(".app__nav")
//logica de inserir conteudos
const links = document.querySelectorAll(".app__nav a")

links.forEach(link => {
    link.onclick = (e) => {
        nav.classList.remove("visible")
        e.preventDefault()

        const content = document.getElementById('content')
        fetch(link.href)
            .then(data => data.text())
            .then(data => content.innerHTML = data)
    }
})

//logica de menu bars
const toglle = document.querySelector("i")

toglle.onclick = () => {
    console.log("funfo")
    nav.classList.toggle("visible")
}