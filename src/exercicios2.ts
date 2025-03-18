// Exercicios passados na aula do dia 07/03/2025

// Interfaces e Tipagem Avançada: Exercicios 1 e 2

// Exercicio 1
// Definindo a interface Carro
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}
// Criando o objeto que implementa a interface Carro
const exCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 1998
};
// Exibindo as informacoes do carro exemplo
console.log(exCarro);
//

// Exercicio 2
// Definindo a interface Multiplicacao
interface Multiplicacao {
    (a: number, b: number): number;
}
// Implementando a função multiplicar que segue a interface Multiplicacao
const multiplicar: Multiplicacao = (a, b) => {
    return a * b;
};
// Testando a função com diferentes valores
const resultado1 = multiplicar(5, 3);
console.log(`O resultado da multiplicacao e: ${resultado1}`);

const resultado2 = multiplicar(10, 7);
console.log(`O resultado da multiplicacao e: ${resultado2}`);

const resultado3 = multiplicar(2, 8);
console.log(`O resultado da multiplicacao e: ${resultado3}`);
//

// Generics: Exercicios 3 e 4

// Exercicio 3
// Função generica para inverter um array
function inverterArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

// Testando a funcao com um array de numbers
console.log(inverterArray([1, 2, 3]));  // Saída: [3, 2, 1]

// Testando a funcao com um array de strings
console.log(inverterArray(["a", "b", "c"]));  // Saída: ["c", "b", "a"]
//

// Exercicio 4

// Interface generica para um repositorio
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
// Implementacao da interface para armazenar usuarios
class RepositorioUsuarios implements Repositorio<{ nome: string, email: string }> {
    private usuarios: { nome: string, email: string }[] = [];

    salvar(dado: { nome: string, email: string }): void {
        this.usuarios.push(dado);
    }

    obterTodos(): { nome: string, email: string }[] {
        return this.usuarios;
    }
}
// Testando a implementacao
const repositorio = new RepositorioUsuarios();
repositorio.salvar({ nome: "Ana", email: "ana@example.com" });
console.log(repositorio.obterTodos());

// Manipulacao Avançada de Tipos: Exercicios 5 e 6

// Exercicio 5
// Type Alias para RespostaServidor
type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Mensagem: ${resposta}`);
    } else {
        console.log(`Status: ${resposta ? "sucesso" : "falha"}`);
    }
}
// Testando a funcao
processarResposta("Tudo certo"); // Saída: "Mensagem: Tudo certo"
processarResposta(true); // Saída: "Status: sucesso"
//

// Exercicio 6
// Tipos para Estudante e Trabalhador
type Estudante = {
    nome: string;
    curso: string;
};

type Trabalhador = {
    empresa: string;
    cargo: string;
};

// Unindo os tipos para EstudanteTrabalhador
type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "James",
    curso: "Medicina",
    empresa: "Teaching Hospital",
    cargo: "Oncologista"
};

// Exibindo as informações
console.log(estudanteTrabalhador);