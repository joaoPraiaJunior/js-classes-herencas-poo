export class Personagem {
    nome
    vida
    mana
    level
    descricao

    constructor(nome, vida, mana, level, static tipo, descricao) {
        this.nome = nome;
        this.level = level;
        this.vida = 100;
        this.mana = 100;
        this.descricao = descricao;
    }

    obterInsignia() {
        if(this.level >= 5) {
            return `Implacável ${this.static tipo} `
        }

        return `Iniciante ${this.static tipo}`
    }
}
