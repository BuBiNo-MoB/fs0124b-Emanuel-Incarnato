var User = /** @class */ (function () {
    function User(name, lastName) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.name = name;
        this.lastName = lastName;
    }
    User.prototype.ricarica = function (totale) {
        this.credito += totale;
    };
    User.prototype.chiamata = function (minutiDurata) {
        if (this.credito - (minutiDurata * 0.20) < 0) {
            console.log("Credito insufficente - Ricarica");
            return;
        }
        this.credito -= (minutiDurata * 0.20);
        this.numeroChiamate += 1;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    Object.defineProperty(User.prototype, "chiama404", {
        get: function () {
            return this.credito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getNumeroChiamate", {
        get: function () {
            return this.numeroChiamate;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var me = new User("BubinO", "MoB");
me.ricarica(5);
me.chiamata(20);
me.chiamata(5);
console.log(me.chiama404);
console.log(me.getNumeroChiamate);
me.azzeraChiamate();
console.log(me.getNumeroChiamate);
me.chiamata(15);
me.ricarica(5);
me.chiamata(2);
console.log(me.chiama404);
