export default{
  serAction:function(serKey,obj){
    var attr=[];
    for(var i=0;i<obj.length;i++){
      // console.log(serKey);
      // console.log(obj[i].contain);
      if(obj[i].contain.indexOf(serKey)>-1){
        attr.push(obj[i]);
        console.log(obj[i].contain);
      }
    }
    return attr;
  }
}
