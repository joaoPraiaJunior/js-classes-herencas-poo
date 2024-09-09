export class Personagem {
    nome
    vida
    mana
    level
    descricao

    constructor(nome,level, vida, mana, tipo, descricao) {
        this.nome = nome;
        this.level = level;
        this.vida = 100;
        this.mana = 100;
        this.descricao = descricao;
    }

    obterInsignia() {
        if(this.level >= 5) {
            return `Implacável ${this.tipo} `
        }

        return `Iniciante ${this.tipo}`
    }
}
