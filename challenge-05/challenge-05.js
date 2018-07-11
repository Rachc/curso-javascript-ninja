/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qq = ['1, 2, 3, 4, 5', 26, { bola: true}, 28.3, null ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var qualquer = function qq(arr){
  return console.log(arr)
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
qualquer(qq)

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var indice = function indice(arr, indice){
  return console.log(arr[indice])
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var novoArr = ['oi', 23, false, { mistura: 'frango' }, function teste(){}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
indice(novoArr, 0)
indice(novoArr, 1)
indice(novoArr, 2)
indice(novoArr, 3)
indice(novoArr, 4)


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
var book = function book(livro){
  var books = {
    'orgulho e Preconceito': {
      quantidadePaginas: 279,
      autor: "Jane Austen",
      editora: "L&PM Pocket"
    },
    'A mao esquerda da escuridao': {
      quantidadePaginas: 304,
      autor: "Ursula K. Le Guin",
      editora: "Aleph"
    },
    ubik: {
      quantidadePaginas: 288,
      autor: "Philip K. Dick",
      editora: "Aleph"
    }
  }

  return books[livro] ? books[livro] : books
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log()
console.log(book('oi'))
console.log()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro Ubik tem " + book('ubik').quantidadePaginas + " páginas!")
console.log()
/*
var bookname = Ubik
console.log("O livro " + bookname + " tem " + book(bookname).quantidadedePaginas + " páginas!")
*/

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Ubik é " + book('ubik').autor + ".")
console.log()

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Ubik foi publicado pela editora " + book('ubik').editora + ".")
