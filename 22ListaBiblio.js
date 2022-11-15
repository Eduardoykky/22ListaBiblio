
let autores = ["Oda", "Kishimoto", "Araki", "Fujimoto", "Q Hayashida", "Kentaro"]
let anos = [1999, 2000, 1980, 2019, 2011, 1988]
let nomes = ["One Piece", "Naruto", "JoJo", "ChainsawMan", "Dorohedoro", "Berserk"]
let idiomas = ["português, inglês", "português", "português, espanhol", "português, inglês, japonês", "inglês, espanhol", "japonês, inglês"]

function BuscarAutor() {
    let autor = prompt("Insira o nome do autor que deseja buscar")
    let indexAutores = []
    for (var index = 0; index < autores.length; index++) {
        if (autor == autores[index]) {
            indexAutores.push(index)
        }
    }
    indexAutores.forEach(x => {
        console.log(autores[x])
        console.log(nomes[x])
    })
}
function BuscarAno() {
    let autor = prompt("Insira o nome do autor para buscar.")
    let ano = parseInt(prompt("Insira a partir de que ano deseja buscar."))
    let indexAutores = []
    let contador = 0
    autores.forEach(x =>{
        if (autor == x && anos[contador] > ano) {
            indexAutores.push(contador)
        }
        contador++
    })
    indexAutores.forEach(x => {
        console.log(nomes[x])
        console.log(anos[x])
    })
}

function BuscarVersoes() {
    let nome = prompt("Insira o nome do livro que deseja pesquisar")
    let index = nomes.indexOf(nome)
    console.log(idiomas[index])
}

function OrdernarAno() {
    let anosSup = []
    let nomesSup = []
    let indexAnos = anos.slice()
    indexAnos.sort()
    for (let index = 0; index < anos.length; index++) {
        for (let index1 = 0; index1 < anos.length; index1++) {
            if (anos[index1] == indexAnos[index]) {
                anosSup[index] = anos[index1]
                nomesSup[index] = nomes[index1]
                console.log(index1)
            }
        }
    }
    anos = anosSup
    nomes = nomesSup
    console.log(anos, nomes)
}

let continuar = "s"
while (continuar == "s") {
    let opcao = parseInt(prompt("1 Para buscar autor; 2 Para buscar pelo ano; 3 Para buscar versões (idioma); 4 Ordernar ano.)"))
    if (opcao == 1) {
        BuscarAutor()
    }else if (opcao == 2) {
        BuscarAno()
    }else if (opcao == 3) {
        BuscarVersoes()
    }else{
        OrdernarAno()
    }
    continuar = prompt("Deseja continuar? s ou n")
}