function distanceBetweenPoints(x1, y1, x2, y2) {
    
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let distance = Math.sqrt((a * a) + (b * b));

    console.log(distance);

}
distanceBetweenPoints(2, 4, 5, 0); 
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985); 