import { Arqueiro } from "./Arqueiro.js";
import { Mago } from "./Mago.js";
import { Personagem } from "./Personagem.js";


export  class ArqueiroMago extends Personagem {
    static tipo = 'ArqueiroMago'
    ladoMago
    ladoArqueiro
    static descricao ='Detentor de lancas e flechas mágicas!'

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia)
        this.ladoArqueiro = new Arqueiro(nome, destreza)
    }

    obterInsignia() {
        return `${this.ladoMago.obterInsignia()} e ${this.ladoArqueiro.obterInsignia()}`
    }
}