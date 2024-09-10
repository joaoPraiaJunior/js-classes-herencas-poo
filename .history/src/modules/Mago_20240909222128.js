import { Personagem } from './Personagem.js'

export class Mago  extends Personagem {

    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'
    descricao ='O mago é implacável!'

    constructor(nome, level, descricao, elementoMagico, levelMagico, inteligencia) {
        super(nome, level, descricao)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    obterInsignia() {
        if(this.levelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia()
    }
}