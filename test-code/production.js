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
        this.contents.push(newBagel);
        return "Added to basket";
    }

    getContents() {
        return this.contents;
    }
};
