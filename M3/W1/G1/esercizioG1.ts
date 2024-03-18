interface iSmartphone {
    credito: number
    numeroChiamate: number
    ricarica(totale: number): void
    chiamata(minutiDurata: number): void
    get chiama404(): number
    get getNumeroChiamate(): number
    azzeraChiamate(): void
}

class User implements iSmartphone {
    name: string
    lastName: string
    credito: number = 0
    numeroChiamate: number = 0
    constructor(name: string, lastName: string) {
        this.name = name
        this.lastName = lastName
    }

    ricarica(totale: number): void {
        this.credito += totale
    }

    chiamata(minutiDurata: number): void {
        if (this.credito - (minutiDurata * 0.20) < 0) {
            console.log("Credito insufficente - Ricarica")
            return
        }
        this.credito -= (minutiDurata * 0.20)
        this.numeroChiamate += 1
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }

    get chiama404() {
        return this.credito
    }

    get getNumeroChiamate() {
        return this.numeroChiamate
    }
}

const me = new User("BubinO", "MoB")
me.ricarica(5)
me.chiamata(20)
me.chiamata(5)
console.log(me.chiama404)
console.log(me.getNumeroChiamate)
me.azzeraChiamate()
console.log(me.getNumeroChiamate)
me.chiamata(15)
me.ricarica(5)
me.chiamata(2)
console.log(me.chiama404)