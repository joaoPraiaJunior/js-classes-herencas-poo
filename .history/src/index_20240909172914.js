import { PersonagemView } from './components/personagem-view.js';
import { Personagem } from './modules/Personagem.js';

const personagemPedro = new Personagem('Gandalf', 10, 'Mago', 'O mago mais poderoso da Terra Média');
const personagemJoao = new Personagem('Aragorn', 100, 400, 3, 'Guerreiro', 'O guerreiro mais corajoso da Terra Média');


const personagens = [personagemPedro, personagemJoao];
const personagemView = new PersonagemView(personagens);
personagemView.render();
