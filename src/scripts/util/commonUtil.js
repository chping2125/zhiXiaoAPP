var commonUtil={
  render:(selector,str)=>{
    var node = document.querySelector(selector);
    node.innerHTML += str;
  }
}
export default commonUtil;
export const Vali ={
  username:(username)=>{
    console.log('用户名验证');
    return /^1(3|4|5|7|8)\d{9}$/.test(username);
  },
  password:(password)=>{
    console.log('密码验证');
    return /^[a-zA-Z]\w{5,17}$/.test(password);
  }
}
