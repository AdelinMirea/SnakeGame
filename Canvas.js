class Canvas{
    constructor(width, height){
        this.canvas = document.createElement('div');
        this.canvas.style.backgroundColor = 'bisque';
        height -= 70;
        width -=10;
        while (width % 40 != 0){
            width --;
        }
        width += 5;    
        while (height % 40 != 0){
            height --;
        }
        height += 5;

        this.canvas.style.height = height + 'px';
        this.canvas.style.width = width + 'px';
        
    }

    appendChild(elem){
        this.canvas.appendChild(elem);
    }

    get Elem(){
        return this.canvas;
    }

    get offsetWidth(){
        return this.canvas.offsetWidth - 5;
    }

    get offsetHeight(){
        return this.canvas.offsetHeight - 5;
    }

    get offsetLeft(){
        return this.canvas.offsetLeft;
    }

    get offsetTop(){
        return this.canvas.offsetTop;
    }

}

