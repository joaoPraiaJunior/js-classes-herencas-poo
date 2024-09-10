import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {
    tipo = 'Guerreiro'
    descricao = 'O guerreiro é implacável!'

    constructor(nome, forca) {
        super(nome)
        this.forca = forca
    }

    obterInsignia() {
        if(this.forca >= 5) {
            return `Mestre da espada`
        }
        return super.obterInsignia()
    }
}