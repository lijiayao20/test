function dig(obj, target) {
    var x;
    var a=Object.getOwnPropertyNames(obj);
    for(x in a)
    {
        if(target==x){
          var  value=obj.x;
            console.log(value);
        }
    }
}

var data = {
    level1: {
      level2: {
        level3: 'some data'
      }
    }
  }

console.log(function dig(data, 'level1')); // { level3: 'some data' }
dig(data, 'level2');