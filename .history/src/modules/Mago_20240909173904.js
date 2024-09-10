import { Personagem } from './Personagem.js'

export class Mago  extends Personagem {

    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'

    constructor(nome, level, elementoMagico, levelMagico, inteligencia) {
        super(nome, level)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }
}