class Canon {
    constructor(x, y, width, height, angle)
    {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.angle = angle;
    }
    
    display() {
        fill(90)
        push()
        translate(this.x, this.y)
        rotate(this.angle)
        rect(-10, -20, this.width, this.height)
        pop()
        arc(this.x, this.y +90, 140, 200, PI, TWO_PI);
        noFill()
    }
}