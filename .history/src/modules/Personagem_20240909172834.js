export class Personagem {
    nome
    vida
    mana
    level
    static tipo
    descricao

    constructor(nome, vida, mana, level, static tipo, descricao) {
        this.nome = nome;
        this.vida = vida;
        this.mana = mana;
        this.level = level;
        this.static tipo = static tipo;
        this.descricao = descricao;
    }

    obterInsignia() {
        if(this.level >= 5) {
            return `Implacável ${this.static tipo} `
        }

        return `Iniciante ${this.static tipo}`
    }
}
