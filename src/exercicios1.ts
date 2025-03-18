// Exercicios passados na aula de 25/02/2025

// Exercicio 1 - Tipagem e Arrays

// Criando um array de números
const valores: number[] = [32, 49, 61];
//Calculando a soma dos valores do array utilizando o metodo reduce
const somaValores: number = valores.reduce((acc, val) => acc + val, 0);
//Imprimindo a soma dos valores
console.log("Soma dos valores:", somaValores);
//

//Exercicio 2 - Funcao Tipada

// 1. Criar uma função que recebe um nome e retorna uma mensagem
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vinda ao TypeScript.`;
}
// 2. Chamando a função e imprimindo o resultado
console.log(mensagemPersonalizada("Sabrina"));
//

//Exercicio 3 - Classe e Instancia

// 1. Criando a classe Carro com atributos marca, modelo e ano
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}

    // 2. Criando um metodo para retornar os detalhes do carro
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
// 3. Instanciando um objeto da classe Carro
const carro1 = new Carro("Toyota", "Hilux", 1997);
// 4. Imprimindo os detalhes do carro
console.log(carro1.detalhes());
