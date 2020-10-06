class square {
    constructor(side){
        this.side = side;
    }

    perimeter(){
        return this.side * 4;
    }
    area(){
        return this.side * this.side;
    }
    diagonal(){
        return Math.sqrt(2*this.side*this.side)
    }
    describe(){
        return `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and a diagonal of ${this.diagonal()}`;
    }
}

const test = new square(2);
console.log(`${test.describe()}`)