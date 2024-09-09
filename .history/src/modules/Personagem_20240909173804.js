export class Personagem {
    nome
    vida
    mana
    level
    descricao

    constructor(nome, vida, mana, level, tipo, descricao) {
        this.nome = nome;
        this.vida = 100;
        this.mana = 100;
        this.level = level;
        this.descricao = descricao;
    }

    obterInsignia() {
        if(this.level >= 5) {
            return `Implacável ${this.tipo} `
        }

        return `Iniciante ${this.tipo}`
    }
}
