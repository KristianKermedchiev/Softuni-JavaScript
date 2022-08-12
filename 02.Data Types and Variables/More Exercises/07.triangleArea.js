function triangleArea(a, b, c) {

    /*
    Use Heron’s formula to obtain the result.
    */

    var side1 = a;
    var side2 = b;
    var side3 = c;
    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    console.log(area);
}
triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);