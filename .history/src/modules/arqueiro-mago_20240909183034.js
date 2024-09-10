import { Personagem } from "./Personagem.js";


export  class ArqueiroMago extends Personagem {
    static tipo = 'ArqueiroMago'
    ladoMago
    ladoArquirero

    constructor(nome, level, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome, level)
        this.ladoMago = new Mago(nome, level, elementoMagico, levelMagico, inteligencia)
        this.ladoArquirero = new Arqueiro(nome, level, destreza)
    }

    obterInsignia() {
        return `${this.ladoMago.obterInsignia()} e ${this.ladoArquirero.obterInsignia()}`
    }
}