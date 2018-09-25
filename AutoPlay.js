class AutoPlay{
    constructor(){
        this.where = 'none';
    }
    
    direction(player, food){
        if(player.offsetLeft >= food.offsetLeft + food.offsetWidth){
            this.where = 'left';
        }else if(player.offsetLeft + player.offsetWidth <= food.offsetLeft){
            this.where = 'right';
        }else if(player.offsetTop <= food.offsetTop){
            this.where = 'down';
        }else if(player.offsetTop >= food.offsetTop + food.offsetHeight){
            this.where = 'up';
        }else{
            where = 'none';
        }
        return this.where;
    }
}