function animate(obj, target, callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){  
       (target - obj.offsetLeft) / 10 > 0? move = Math.ceil((target - obj.offsetLeft) / 10) : move = Math.floor((target - obj.offsetLeft) / 10); //要寫在定時器裡面
       if(obj.offsetLeft == target){
          clearInterval(obj.timer);
          if(callback) 
             callback();
       }
       else //如果停止定時器就不會再算 所以不加else也可以
          obj.style.left = obj.offsetLeft + move + 'px';
    }, 100);
 }