var commonUtil={
  render:(selector,str)=>{
    var node = document.querySelector(selector);
    node.innerHTML += str;
  }
}
export default commonUtil;
