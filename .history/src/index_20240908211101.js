import Personagem from './modules/Personagem.js';

// const personagemPedrinho = {
//     nome: 'Pedrinho',
//     vida: 7,
//     mana: 12,
//     level: 5,
//     tipo: 'Mago',
// }

// const personagemJose = {
//     nome: 'Jose',
//     vida: 7,
//     mana: 6,
//     level: 3,
//     tipo: 'Arqueiro',
// }


const personagemPedrinho = new Personagem();

personagemPedrinho.nome = 'Pedrinho';
personagemPedrinho.vida = 7;
personagemPedrinho.mana = 12;
personagemPedrinho.level = 5;
personagemPedrinho.tipo = 'Mago';
personagemPedrinho.descricao = 'Um mago muito poderoso';

console.log(personagemPedrinho);
console.log(personagemPedrinho instanceof Personagem);
