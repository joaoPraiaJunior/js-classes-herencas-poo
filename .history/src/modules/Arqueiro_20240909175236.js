import { Personagem } from './Personagem.js';

export class Arqueiro extends Personagem {
    static tipo = 'Arqueiro'
    destreza

    constructor(nome, level, destreza) {
        super(nome, level)
        this.destreza = destreza
        this.levelArqueiro = levelArqueiro
    }

    obterInsignia() {
        if(this.destreza >= 5) {
            return `Dominador de flechas`
        }
        return super.obterInsignia()
    }
}