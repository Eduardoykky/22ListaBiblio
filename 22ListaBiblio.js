
let autores = ["Oda" + "Kishimoto" + "Araki" + "Fujimoto" + "Q Hayashida" + "Kentaro"]
let anos = [1999 + 2000 + 1980 + 2019 + 2011 + 1995]
let nomes = ["One Piece" + "Naruto" + "JoJo" + "ChainsawMan" + "Dorohedoro" + "Berserk"]
let idiomas = ["português, inglês" + "português" + "português, espanhol" + "português, inglês, japonês" + "inglês, espanhol" + "japonês, inglês"]

function BuscarAutor() {
    let autor = prompt()
    let indexAutores = 0
    for (let index = 0; index < autores.length; index++) {
        if (autor == autores[index]) {
            indexAutores.push(index)
        }
    }
    indexAutores.forEach(x => {
        console.log(autores[x])
        console.log(nomes[x])
    })
}
