export class Personagem {
    nome
    vida
    mana
    level
    static tipo
    descricao

    obterInsignia() {
        if(this.level >= 5) {
            return `Implacável ${this.static tipo} `
        }

        return `Iniciante ${this.static tipo}`
    }
}
