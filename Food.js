class Food{
    constructor(head, canvas){
        let x, y;
        
        let onSnake = true, trials = 0;
        while (onSnake && trials < canvas.offsetHeight/40 * canvas.offsetWidth/40){
            trials++;
            let Semaphore = true;
            x = Math.floor( (Math.random() * ((canvas.offsetWidth)/40))) * 40 + 10;
            y = Math.floor( (Math.random() * ((canvas.offsetHeight)/40))) * 40 + 10;
            for(let i = 0; i<head.Elem.length; i++){
                if(head.Elem[i].offsetTop == y && head.Elem[i].offsetLeft == x){
                    Semaphore = false;
                    break;
                }
            }    
            if(Semaphore == true){
                onSnake = false;
            }
        }
        
        
        if(typeof(food) == 'object'){
            food.setDisplay('none'); 
        } 
        if (trials <  canvas.offsetHeight/40 * canvas.offsetWidth/40){
            this.food = document.createElement('div');
            this.food.style.width = '40px';
            this.food.style.height = '40px';
            this.food.style.borderRadius = '40px';
            this.food.style.backgroundColor = 'green';
            this.food.style.position = 'absolute';
            this.food.style.left = x + 'px';
            this.food.style.top = y + 'px';
        }else{
            alert('Game Over!');
        }

    }

    get Elem(){
        return this.food;  
    }

    
    get offsetHeight(){
        return this.food.offsetHeight;
    }

    get offsetLeft(){
        return this.food.offsetLeft;
    }

    get offsetTop(){
        return this.food.offsetTop;
    }

    get offsetWidth(){
        return this.food.offsetWidth;
    }

    setDisplay(item){
        this.food.style.display = item;
    }

}