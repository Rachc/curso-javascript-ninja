/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Campeonato do RN"
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?
var teams = ["America", "ABC", "Alecrim", "Corinthias de Caicó", "Baraúnas"]
console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
var showTeamPosition = function showTeamPosition(position){
  return position <= teams.length
  ? console.log("O time que está em " + position + "º lugar é o " + teams[position-1] + ".")
  : console.log("Não temos a informação do time que está nessa posição.")
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(5)
showTeamPosition(1)
showTeamPosition(8)
showTeamPosition(2)
console.log()

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
counter = 20
while (counter <= 30 ) {
  console.log(counter)
  counter++
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
console.log()
var convertToHex = function(colorName){
  var hexa
  switch(colorName){
    case 'red':
      hexa = '#b51901';
    break;
    case 'orange':
      hexa = '#d67915';
    break;
    case 'green':
      hexa = '#227516';
    break;
    case 'blue':
      hexa = '#27c694';
    break;
    case 'purple':
      hexa = '#6e2499';
    break;
    default:
      console.log("Não temos o equivalente hexadecimal para " + colorName + ".")
    break;
  }
  console.log('O hexadecimal para a cor ' + colorName + ' é ' + hexa)
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

convertToHex('red');
convertToHex('purple');
convertToHex('green');
convertToHex('ninja');
convertToHex('blue');
convertToHex('yellow');
convertToHex('orange');
convertToHex('turquoise');
