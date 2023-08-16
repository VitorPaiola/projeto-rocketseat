function toggleMode() {
    const html = document.documentElement // pego o html
    html.classList.toggle("light") // removo e adiciono a classe light através do toggle

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/vitor.png") // modificar/adicionar um atributo
        img.setAttribute("alt", "Foto de Vitor Paiola com a camiseta do playstation")
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/kurt.png")
        img.setAttribute("alt", "Foto de Kurt Cobain com sua guitarra e fundo preto-branco")
    }

}