import { PersonagemView } from './components/personagem-view.js';
import { Personagem } from './modules/Personagem.js';

const personagemPedro = new Personagem('Gandalf', 100, 100, 10, 'Mago', 'O mago mais poderoso da Terra Média');
console.log(personagemPedro.obterInsignia());
const personagemJoao = new Personagem('Aragorn', 100, 100, 3, 'Guerreiro', 'O guerreiro mais corajoso da Terra Média');
console.log(personagemJoao.obterInsignia());

const personagens = [personagemPedro, personagemJoao];
const personagemView = new PersonagemView(personagens);
personagemView.render();
