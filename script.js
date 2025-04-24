   class Personagem {
        constructor(vida, força, mana){
            this.nome = Personagem;
            this.vida = vida;
            this.força = força;
            this.mana = mana;
        }
        
        // Métodos GET e SET
        get vida() {
            return this._vida;
        }
        set vida(vida) {
            this._vida = vida;
        }
        get força() {
            return this._força;
        }
        set força(força) {
            this._força = força;
        }
        get mana() {
            return this._mana;
        }
        set mana(mana) {
            this._mana = mana;
        }
       
        atacar() {
            this.atacar(atacando);
        }
        defender() {
            this.defender(defendendo);
        }
        curar() {
            this.curar(curando);
        }
        morrer() {
            this.morrer(morrendo);
        }
        levelUp() {
            this.levelUp(levelando);
        }
         usarMagia() {
            this.usarMagia(usando);
        }
    }


    class Guerreiro extends Personagem {
        constructor(vida, força, mana){
            super(vida, força, mana);
            this.nome = Guerreiro;
        }

        // Métodos GET e SET
        get vida() {
            return this._vida;
        }
        set vida(vida) {
            this._vida = vida;
        }
        get força() {
            return this._força;
        }
        set força(força) {
            this._força = força;
        }
        get mana() {
            return this._mana;
        }
        set mana(mana) {
            this._mana = mana;
        }

        atacar() {
            this.atacar(atacando);
        }
        defender() {
            this.defender(defendendo);
        }
        curar() {
            this.curar(curando);
        }
        morrer() {
            this.morrer(morrendo);
        }
        levelUp() {
            this.levelUp(levelando);
        }
         usarMagia() {
            this.usarMagia(usando);
        }
    }


    class Mago extends Personagem {
        constructor(vida, força, mana){
            super(vida, força, mana);
            this.nome = Mago;
        }

        // Métodos GET e SET
        get vida() {
            return this._vida;
        }
        set vida(vida) {
            this._vida = vida;
        }
        get força() {
            return this._força;
        }
        set força(força) {
            this._força = força;
        }
        get mana() {
            return this._mana;
        }
        set mana(mana) {
            this._mana = mana;
        }

        atacar() {
            this.atacar(atacando);
        }
        defender() {
            this.defender(defendendo);
        }
        curar() {
            this.curar(curando);
        }
        morrer() {
            this.morrer(morrendo);
        }
        levelUp() {
            this.levelUp(levelando);
        }
         usarMagia() {
            this.usarMagia(usando);
        }
    }


    class Arqueiro extends Personagem {
        constructor(vida, força, mana){
            super(vida, força, mana);
            this.nome = Arqueiro;
        }
        
        // Métodos GET e SET
        get vida() {
            return this._vida;
        }
        set vida(vida) {
            this._vida = vida;
        }
        get força() {
            return this._força;
        }
        set força(força) {
            this._força = força;
        }
        get mana() {
            return this._mana;
        }
        set mana(mana) {
            this._mana = mana;
        }

        atacar() {
            this.atacar(atacando);
        }
        defender() {
            this.defender(defendendo);
        }
        curar() {
            this.curar(curando);
        }
        morrer() {
            this.morrer(morrendo);
        }
        levelUp() {
            this.levelUp(levelando);
        }
         usarMagia() {
            this.usarMagia(usando);
        }
    }

    {
    Polimorfismo:
    function atacar(personagem) {
        personagem.atacar();
    }

    const Personagem = new Personagem(100, 50, 20);
    const Guerreiro = new Guerreiro(120, 70, 10);
    const Mago = new Mago(80, 40, 30);
    const Arqueiro = new Arqueiro(90, 60, 25);
}
