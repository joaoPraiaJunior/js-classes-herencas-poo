import { Arqueiro } from "./Arqueiro.js";
import { Mago } from "./Mago.js";
import { Personagem } from "./Personagem.js";


export  class ArqueiroMago extends Personagem {
    static tipo = 'ArqueiroMago'
    ladoMago
    ladoArqueiro

    constructor(nome, level, descricao, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome, level, descricao)
        this.ladoMago = new Mago(nome, level, elementoMagico, levelMagico, inteligencia)
        this.ladoArqueiro = new Arqueiro(nome, level, destreza)
    }

    obterInsignia() {
        return `${this.ladoMago.obterInsignia()} e ${this.ladoArqueiro.obterInsignia()}`
    }
}