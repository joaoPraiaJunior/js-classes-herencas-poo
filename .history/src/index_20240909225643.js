import { PersonagemView } from './components/personagem-view.js';
import { Arqueiro } from './modules/Arqueiro.js';
import { Mago } from './modules/Mago.js';
import { ArqueiroMago } from './modules/arqueiro-mago.js';


const magoJoao = new Mago('João', 3, 'Fogo', 7, 2);
const magoJulia = new Mago('Pedro', 10, 'Água', 5, 7);
const arqueiroCarlos = new Arqueiro('Carlos', 5, 7);
const arqueiroMagoLucas = new ArqueiroMago('Lucas', 5, 7, 'Ar', 3, 7);
const guerreiroPaulo = new Guerreiro('Paulo', 5, 7);

const personagens = [magoJoao, magoJulia, arqueiroCarlos, arqueiroMagoLucas];
const personagemView = new PersonagemView(personagens);
personagemView.render();
