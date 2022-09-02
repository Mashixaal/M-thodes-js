class Fly {
    constructor(time) {
        this.time = time;
    }

    flying() {
        return "je vole";
    }
}

class Plane extends Fly {
    constructor(society, color, price, desc, time) {
        super(time);
        this.society = society;
        this.color = color;
        this.price = price;
        this.desc = desc;
    };
    
    results() {
        console.log(`${super.flying()} avec l'avion de gorkem`);
    }
};

let gorkemPlane = new Plane("Acs", "white", 200000, "ff");
console.log(gorkemPlane);
console.log(gorkemPlane.results());
console.log(new Date());