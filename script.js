class Personagem {  
    constructor(nome, vida, força, mana) {  
        this.nome = nome;  
        this._vida = vida;  
        this._força = força;  
        this._mana = mana;  
    }  

    // Métodos GET  
    get vida() {  
        return this._vida;  
    }  
    get força() {  
        return this._força;  
    }  
    get mana() {  
        return this._mana;  
    }  
  
    atacar(oponente) {  
        console.log(`${this.nome} ataca`);  
    }  
      
    receberDano(dano) {  
        this._vida -= dano;  
        console.log(`${this.nome} recebeu ${dano} de dano, Vida restante: ${this._vida}`);  
        if (this._vida <= 0) {  
            this.morrer();  
        }  
    }  

    morrer() {  
        console.log(`${this.nome} morreu`);  
    }  
}  

class Guerreiro extends Personagem {  
    constructor(vida, força, mana) {  
        super("Guerreiro", vida, força, mana);  
    }  

    atacar(oponente) {  
        const dano = this.força;   
        oponente.receberDano(dano * 0.1);   
        console.log(`${this.nome} ataca com sua espada, causando ${dano * 0.1} de dano`);  
    }  
}  

class Mago extends Personagem {  
    constructor(vida, força, mana) {  
        super("Mago", vida, força, mana);  
    }  

    atacar(oponente) {  
        const dano = this.força;   
        oponente.receberDano(dano * 0.1);   
        console.log(`${this.nome} lança uma bola de fogo, causando ${dano * 0.1} de dano`);  
    }  
}  

class Arqueiro extends Personagem {  
    constructor(vida, força, mana) {  
        super("Arqueiro", vida, força, mana);  
    }  

    atacar(oponente) {  
        const dano = this.força;   
        oponente.receberDano(dano * 0.1);   
        console.log(`${this.nome} dispara uma flecha, causando ${dano * 0.1} de dano`);  
    }  
}  

// Polimorfismo  
function atacar(personagem, oponente) {  
    personagem.atacar(oponente);  
}  
  
const guerrero = new Guerreiro(120, 70, 10);  
const mago = new Mago(80, 40, 30);  
const arqueiro = new Arqueiro(90, 60, 25);  
  
atacar(guerrero, mago); // Guerreiro ataca o Mago  
atacar(arqueiro, guerrero); // Arqueiro ataca o Guerreiro  
atacar(mago, arqueiro); // Mago ataca o Arqueiro  
