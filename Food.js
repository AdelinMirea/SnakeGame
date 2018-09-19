class Food{
    constructor(x, y){
        this.food = document.createElement('div');
        this.food.style.width = '40px';
        this.food.style.height = '40px';
        this.food.style.borderRadius = '40px';
        this.food.style.backgroundColor = 'green';
        this.food.style.position = 'absolute';
        this.food.style.left = x + 'px';
        this.food.style.top = y + 'px';
    }

    get Elem(){
        return this.food;  
    }
}