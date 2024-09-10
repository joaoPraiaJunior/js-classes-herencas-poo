import { Personagem } from "./Personagem.js";

export class Guerreiro extends Personagem {
    tipo = 'Guerreiro'
    descricao = 'O guerreiro é implacável!'
    forca

    constructor(nome, forca) {
        super(nome)
        this.forca = forca
    }

    obterInsignia() {
        if (this.forca >= 5 && this.level >= 7) {
            return `Guerreiro Furioso`
        }
        return super.obterInsignia()
    }
}