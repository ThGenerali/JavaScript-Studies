console.log("Hello World")

//console (métodos principais)
console.error("Este é um erro") //Demonstra um erro
console.warn("Este é um aviso") //Demonstra um aviso
console.info("Este é um informação") //Demonstra uma informação
console.log("Esta é uma mensagem!") //Demonstra uma mensagem

//variáveis
var x = 10
    //maneiras mais modernas
let y = 15
const z = 20
console.log(x)
console.log(y)
console.log(z)

y = 30
console.log(y)


//Tipos de dados
const name = "Thiago"
console.log(name)
console.log(typeof name) //tipo da variável

const shirtsQty = 4
console.log(typeof shirtsQty)

const isAprovved = false
console.log(typeof isAprovved)

let surname = null
console.log(typeof surname)

let age
console.log(typeof age)

const languages = ["JavaScript", "PHP", "Python", "Java"]
console.log(typeof languages)

const user = {email: "email@email.com", password: "senha2123", agr: 30} //object iterals
console.log(typeof user)

//métodos de string
const fullName = "Thiago Nascimento"
console.log(fullName.length)
console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())
console.log(fullName.indexOf("N")) //retorna a posição do caractere
console.log(fullName.slice(0, 6))


const stringToArray = fullName.split(" ")
console.log(stringToArray)

//métodos de array
const list = ["a", "b", "c", "d"]
console.log(list.length)
console.log(list[2])
list[2] = "e"
console.log(list)
console.log(list[list.length - 1]) //retorna o ultimo item da lista
list.push("f") //adiciona um item no final da lista
list.pop() //remove o ultimo item da lista
list.shift() // remove o primeiro item da lista
list.unshift("z") //adiciona um item no inicio da lista
console.log(list)
    //repetição
    const names = ["joao", "lucas", "alberto"]
    names.forEach(function(name){ //passa em cada item da lista
        console.log("o nome é: "+ name)
    })
    
    const modifiedNames = names.map(function(name) { //altera os valores da lista
        if(name === "joao"){
            return (name = "sr. joao")
        }   else {
            return name
        }
    })
    console.log(modifiedNames)

    const bigNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30].filter(function(number){ //filtra os elementos
        return number >= 8
    })
    console.log(bigNumbers)

    const sumAll = [10, 20, 30, 40, 50].reduce(function(total, number){ //reduz um array ao um elemento só
        return total + number
    })
    console.log(sumAll)



//objetos
const product = {
    name: "mouse",
    price: 50,
    inStock: true,
    colors: ["black", "white", "red"],
    sizes: {
        width: 10,
        height: 20
    }
}
console.log(product.name)
console.log(product['name'])//usado em caso de não conseguir acessar com o método de ".".

    //destructuring (usado para array e objetos)
    const {price, inStock} = product //Variável precisa estar com o mesmo nome da propriedade do objeto para poder receber o valor esperado.
    console.log(price)
    console.log(inStock)

    const [n1, n2, n4] = list //ele atribui cada item seguindo a ordem
    console.log(n1)
    console.log(n2)
    console.log(n4)

//JSON - JavaScript Object Notation. (utilizada para comunicações com api's)
const dog = {
    name: "Jake",
    age: 3,
    color: "black"
}

const json = JSON.stringify(dog) //transoforma o objeto em string na syntax aceitável no JSON (Usado para enviar comunicação a uma api)
console.log(json)

const obj = JSON.parse(json) //transforma o JSON em objeto na syntax do JavaScript. (Usado para receber comunicação da api)
console.log(obj)

//estruturas condicionais
const a = 10
let i = 10

if(i > a) {
    console.log("i é maior que a")
}   else if(i === a) {//trple equals é para uma validação mais segura
    console.log("i é igual a a")
}   else {
    console.log("i é menor que a")
}

    //if ternário
    const someNumber = 24
    let testingANumber = someNumber < 20 ? "Yes" : "No" //if e else em uma única linha
    console.log(testingANumber)

//estrutura de repetição
const b = 5
i = 0
while(i <= b){
    i++
    console.log(i)
}

for(i = 0; i != b; i++){
    console.log(i)
}

//concatenação
console.log("mostrando i: " + i)

//funções
function minhaFuncao() { //uma função simples
    console.log("Esta é uma função")
}
minhaFuncao() //chamando uma função

function nomeCompleto(nome, sobrenome) { //função com parametro
    console.log("O nome completo é: "+ nome + sobrenome)
}

nomeCompleto("Matheus ", "Cabrito")
nomeCompleto("Julian ", "Alvarez")

    //arrow function
    const myArrowFunctuion = (a, b) => { //uma forma de resumir a syntax de uma função. (age como um if ternário)
        return a + b
    }
    console.log(myArrowFunctuion(10, 20))

    const myArrowFunctuion2 = (a, b) => a + b //forma mais resumida de uma arrow function
    console.log(myArrowFunctuion2(2, 5))

//Classes
class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productDetails() { //método
       return "O nome do produto é: "+this.name+" e o preço é: "+this.price 
    }
}
const socks = new Product("Meia branca", 10.99)
console.log(socks.name)
console.log(socks.productDetails())

    //Herança
    class superProducts extends Product {
        constructor(name, price, size) {
            super(name, price)
            this.size = size
        }
        //static
        static sayHello(){ //retorna sem instanciar um objeto
            console.log("Hello")
        }
    }

    const shoes = new superProducts("Tênis", 150.99, 42)
    console.log(shoes.name)
    console.log(shoes.size)
    console.log(shoes.productDetails())
    superProducts.sayHello()


//DOM - Document Object Model
//Mexe com o HTML e CSS
    //Selecionando elementos
    const title = document.getElementById("title")
    console.log(title)

    //query selector
    const sameTitle = document.querySelector("#title")
    console.log(sameTitle)
    const texts = document.querySelectorAll(".text") //retorna um array de seleções de html. Assim da pra selecionar por indice cada elemento da lista
    console.log(texts)
    
    texts.forEach((text) => {
        console.log(text.textContent.toUpperCase()) //textContent pega o conteúdo da tag que selecionamos
    })

    //Manipulação de elementos ("style" muda o css e o "innerHTML" muda o HTML)
    title.style.color = "red" //muda a cor do texto
    title.style.fontSize = "50px" //muda o tamanho da fonte
    title.textContent = "Texto Mudado" // muda o texto
    texts[0].innerHTML = '<span>Alteramos o HTML deste elemento</span>'
    texts[1].classList.add('my-class') //adiciona uma classe no elemento
    texts[1].classList.remove('text') //remove uma classe ou id do elemento
    texts[1].classList.toggle('text') //adiciona ou remove uma classe ou id do elemento
    texts[2].remove() //remove o elemento
    texts[3].setAttribute('id', 'new-id') //adiciona um id ao elemento
    console.log(texts[3].getAttribute('id')) //retorna o id do elemento

    //Eventos
    const button = document.querySelector('button')
    button.addEventListener('click', () => {
        button.style.color = "white"
        button.style.backgroundColor = "black"

        console.log('Botão clicado')
    })

