import { PersonagemView } from './components/personagem-view.js';
import { Mago } from './modules/Mago.js';


const magoJoao = new Mago('João', 3, 'Fogo', 7, 2);
const magoJulia = new Mago('Pedro', 10, 'Água', 5, 7);

const personagens = [magoJoao, magoJulia];
const personagemView = new PersonagemView(personagens);
personagemView.render();
