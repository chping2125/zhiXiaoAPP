export default{
  serAction:function(serKey,obj){
    var attr=[];
    for(var i=0;i<obj.length;i++){
      if(obj[i].contain.indexOf(serKey)>-1){
        attr.push(obj[i]);
      }
    }
    return attr;
  },
  refreshAction:function(dom,ishow,list1,list2,that,delY){
    setTimeout(function(){
      var myScroll=new IScroll(dom,{
        bounce:false,
        click:true,
        mouseWheel:true,
        probeType:3
      });

      ishow=false;
        console.log(ishow);
      console.log(1);
      myScroll.scrollBy(0,-30);
      setTimeout(function(){
        myScroll.refresh();
      },0);
      myScroll.on("scrollEnd",function(){
        if(this.y>=0){
            that.$http.get("/mock/lxn/more.json").then(
              (res)=>{
                 setTimeout(function () {
                  myScroll.scrollTo(0,-30);
                  list1=res.data;
                  list2=list1.concat(list2);
                }, 500);
                setTimeout(function(){
                  myScroll.refresh();
                },1000);
              }
            )
         }
         var maxY = this.maxScrollY - this.y;
         if(maxY>=0){
           console.log(0);
            that.$http.get("/mock/lxn/more.json").then(
              (res)=>{
                 setTimeout(function () {
                  list1=res.data;
                  list2=list2.concat(list1);
                    myScroll.scrollTo(0,myScroll.maxScrollY-delY);
                }, 500);
                setTimeout(function(){
                  myScroll.refresh();
                },1000);
              }
            )
         }
      })
    },500);
  }
}
