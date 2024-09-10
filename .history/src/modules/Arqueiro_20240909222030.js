import { Personagem } from './Personagem.js';

export class Arqueiro extends Personagem {
    static tipo = 'Arqueiro'
    destreza
    descricao = 'Você tem o meu arco!'

    constructor(nome, level, destreza, descricao) {
        super(nome, level, descricao)
        this.destreza = destreza
    }

    obterInsignia() {
        if(this.destreza >= 5) {
            return `Dominador de flechas`
        }
        return super.obterInsignia()
    }
}