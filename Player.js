class Player{
    constructor(){
        this.head = [];
        this.head[0] = document.createElement('div');

        this.head[0].style.width = '40px';
        this.head[0].style.height = '40px';
        this.head[0].style.backgroundColor = 'grey';
        this.head[0].style.left = '130px';
        this.head[0].style.top = '130px';
        this.head[0].style.position = 'absolute';
    
    }


    getPart(left, top){
        let part = document.createElement('div');
        part.style.width = '40px';
        part.style.height = '40px';
        part.style.backgroundColor = 'black';
        part.style.left = left + 'px';
        part.style.top = top + 'px';
        part.style.position = 'absolute';
        return part;
    }


    get Elem(){
        return this.head;
    }

    get length(){
        return this.head.length;
    }

    move(where){
        for(let i=this.head.length-1; i>=1; i--){
            //console.log(this.head[i].offsetLeft);
            /*
            this.head[i].style.left = this.positions[i-1][0] + 'px';
            this.head[i].style.top = this.positions[i-1][1] + 'px';
            this.positions[i] = this.positions[i-1];
            */
           this.head[i].style.left = this.head[i-1].style.left;
           this.head[i].style.top   = this.head[i-1].style.top;

        }
        switch(where){
            case 'up': this.head[0].style.top = this.head[0].offsetTop - this.head[0].offsetHeight + 'px';
                    break;

            case 'down': this.head[0].style.top = this.head[0].offsetTop + this.head[0].offsetHeight + 'px';
                    break;

            case 'left': this.head[0].style.left = this.head[0].offsetLeft - this.head[0].offsetWidth + 'px';
                    break;

            case 'right': this.head[0].style.left = this.head[0].offsetLeft + this.head[0].offsetWidth + 'px'; 
                    break;
        }
    }

    get offsetHeight(){
        return this.head.offsetHeight;
    }

    get offsetLeft(){
        return this.head.offsetLeft;
    }

    get offsetTop(){
        return this.head.offsetTop;
    }

    get offsetWidth(){
        return this.head.offsetWidth;
    }

    hitWall(canvas){
        if(this.head[0].offsetLeft < canvas.offsetLeft){
            return true;
        }else if(this.head[0].offsetLeft + this.head[0].offsetWidth > canvas.offsetWidth + 5){
            return true;
        }else if(this.head[0].offsetTop < canvas.offsetTop){
            return true;
        }else if(this.head[0].offsetTop + this.head[0].offsetHeight > canvas.offsetHeight + 5){
            return true;
        }
        return false;
    }

    hide(){
        /*
        for(let i = 0; i<this.head.length; i++){
            this.head[i].style.display = 'none';
        }*/
        this.head[0].style.display = 'none';
        
    }

    ate(food){
        if(this.head[0].offsetLeft < food.offsetLeft + food.offsetWidth && this.head[0].offsetLeft + this.head[0].offsetWidth > food.offsetLeft + this.head[0].offsetWidth/2 && this.head[0].offsetTop < food.offsetTop + this.head[0].offsetHeight/2 && this.head[0].offsetTop + this.head[0].offsetHeight >= food.offsetTop + food.offsetHeight ){
            return true;
        }
        return false;
    }

    getBigger(){
        let tail;
        tail = this.getPart(this.head[this.head.length-1].offsetLeft, this.head[this.head.length-1].offsetTop);
        this.head.push(tail);
    }

    hitTail(){
        for(let i = 1; i<this.head.length; i++){
            if(this.head[0].offsetLeft == this.head[i].offsetLeft && this.head[0].offsetTop == this.head[i].offsetTop){
                return true;
            }
        }
        return false;
    }

}