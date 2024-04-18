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

    removeBagel(remBagel) {
        let index = this.contents.indexOf(remBagel);
        this.contents.splice(index, 1);
        return "Removed from basket";
    }

    getContents() {
        return this.contents;
    }

    getCount() {
        return this.contents.length;
    }

    isBasketFull() {
        if (this.getCount() >= 5) { 
            return true;
        }
        return false;
    }
};
