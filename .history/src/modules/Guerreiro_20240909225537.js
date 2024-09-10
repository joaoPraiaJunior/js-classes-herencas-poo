import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {
    tipo = 'Guerreiro'
    descricao = 'O guerreiro é implacável!'

    constructor(nome, forca) {
        super(nome)
        this.forca = forca
    }

    obterInsignia() {
        if(this.forca >= 5 && this.level >= 7) {
            return `Guerreiro Furioso`
        }
        return super.obterInsignia()
    }
}