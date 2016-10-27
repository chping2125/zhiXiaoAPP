export default{
  serAction:function(serKey,obj){
    var attr=[];
    for(var i=0;i<obj.length;i++){
      if(obj[i].contain.indexOf(serKey)>-1){
        attr.push(obj[i]);
      }
    }
    return attr;
  }
}
