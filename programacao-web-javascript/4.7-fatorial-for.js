/* Direções:
Escreva um loop for que exiba como saída o fatorial do número 12:

Um fatorial é calculado multiplicando um número por todos os números abaixo dele. Por exemplo, 3! ou "3 fatorial" é 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 6 3!=3∗2∗1=6
4! = 4 * 3 * 2 * 1 = 24 4!=4∗3∗2∗1=24
5! = 5 * 4 * 3 * 2 * 1 = 120 5!=5∗4∗3∗2∗1=120

Salve sua resposta final em uma variável chamada solution e exiba seu valor no console. */

/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here

var solution = 1;
for (var f = 12; f >= 1; f--) {
    solution =  solution * f;
}

console.log(solution);