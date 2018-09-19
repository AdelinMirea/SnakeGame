class Player{
    constructor(){
        this.positions = []
        this.head = document.createElement('div');
        this.head.style.width = '40px';
        this.head.style.height = '40px';
        this.head.style.backgroundColor = 'black';
        this.head.style.left = '130px';
        this.head.style.top = '130px';
        this.head.style.position = 'absolute';

    }

    get Elem(){
        return this.head;
    }

    move(where){
        //console.log(where);
        switch(where){
            case 'up': this.head.style.top = this.head.offsetTop - this.head.offsetHeight + 'px';
                    break;

            case 'down': this.head.style.top = this.head.offsetTop + this.head.offsetHeight + 'px';
                    break;

            case 'left': this.head.style.left = this.head.offsetLeft - this.head.offsetWidth + 'px';
                    break;

            case 'right': this.head.style.left = this.head.offsetLeft + this.head.offsetWidth + 'px';
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
}