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
        oponente.receberDano(dano * 0.2);   
        console.log(`${this.nome} ataca com sua espada, causando ${dano * 0.2} de dano`);  
    }  
}  

class Mago extends Personagem {  
    constructor(vida, força, mana) {  
        super("Mago", vida, força, mana);  
    }  

    atacar(oponente) {  
        const dano = this.força;   
        oponente.receberDano(dano * 0.3);   
        console.log(`${this.nome} lança uma bola de fogo, causando ${dano * 0.3} de dano`);  
    }  
}  

class Arqueiro extends Personagem {  
    constructor(vida, força, mana) {  
        super("Arqueiro", vida, força, mana);  
    }  

    atacar(oponente) {  
        const dano = this.força;   
        oponente.receberDano(dano * 0.25);   
        console.log(`${this.nome} dispara uma flecha, causando ${dano * 0.25} de dano`);  
    }  
}  

// Array para armazenar personagens  
const personagens = [];  

// Função para adicionar personagens ao array  
function adicionarPersonagem(personagem) {  
    personagens.push(personagem);  
}  

// Função para atacar  
function atacarTodos(oponente) {  
    personagens.forEach(personagem => {  
        if (personagem !== oponente) {  // Evita que um personagem ataque a si mesmo  
            personagem.atacar(oponente);  
        }  
    });  
}  

// Instanciando personagens  
const guerrero = new Guerreiro(120, 70, 10);  
const mago = new Mago(80, 40, 30);  
const arqueiro = new Arqueiro(90, 60, 25);  

// Adicionando personagens ao array  
adicionarPersonagem(guerrero);  
adicionarPersonagem(mago);  
adicionarPersonagem(arqueiro);  

// Exemplo de ataque onde o Mago é o alvo  
console.log("Iniciando a rodada de ataques no Mago:");  
atacarTodos(mago);  
