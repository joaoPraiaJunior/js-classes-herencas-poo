import { PersonagemView } from './components/personagem-view.js';
import { Mago } from './modules/Mago.js';
import { Personagem } from './modules/Personagem.js';

const personagemPedro = new Personagem('Gandalf', 100, 200, 10, 'Mago', 'O mago mais poderoso da Terra Média');
const personagemJoao = new Personagem('Aragorn', 100, 400, 3, 'Guerreiro', 'O guerreiro mais corajoso da Terra Média');


const personagens = [personagemPedro, personagemJoao];
const personagemView = new PersonagemView(personagens);
personagemView.render();

console.log(new Mago('Fogo', 7, 9));
