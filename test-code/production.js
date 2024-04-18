export class bagel {
    constructor(name) {
        this.name = name;
    }
}


export class basket {
    constructor() {
        this.contents = [];
    }

    addBagel(newBagel) {
        //contents.append(newBagel);
        return "Added to basket";
    }
};
