import { Personagem } from './modules/Personagem.js';

// const personagemPedrinho = {
//     nome: 'Pedrinho',
//     vida: 7,
//     mana: 12,
//     level: 5,
//     static tipo: 'Mago',
// }

// const personagemJose = {
//     nome: 'Jose',
//     vida: 7,
//     mana: 6,
//     level: 3,
//     static tipo: 'Arqueiro',
// }


const personagemPedrinho = new Personagem();

personagemPedrinho.nome = 'Pedrinho';
personagemPedrinho.vida = 7;
personagemPedrinho.mana = 12;
personagemPedrinho.level = 5;
personagemPedrinho.static tipo = 'Mago';
personagemPedrinho.descricao = 'Um mago muito poderoso';

console.log(personagemPedrinho);
console.log(personagemPedrinho instanceof Personagem);

const personagemJose = new Personagem();
personagemJose.nome = 'Jose';
personagemJose.vida = 7;
personagemJose.mana = 6;
personagemJose.level = 3;
personagemJose.static tipo = 'Arqueiro';

console.log(`Insiginia do ${personagemPedrinho.nome}: ${personagemPedrinho.obterInsignia()}`);
console.log(`Insiginia do ${personagemJose.nome}: ${personagemJose.obterInsignia()}`);
