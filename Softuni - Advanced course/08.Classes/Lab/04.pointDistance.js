class Point {
    static distance(first, second){
        let dx = second.x - first.x;
        let dy = second.y - first.y;
        
        dx **= 2;
        dy **= 2;

        return Math.sqrt(dx + dy);
    }

    constructor (x, y){
        this.x = x;
        this.y = y;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));