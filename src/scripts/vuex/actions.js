export default {
  loginPrePath: ({dispatch,state},path)=>{
    console.log('actions loginPrePath:' +path);
    dispatch('LOGINPREPATH',path);
  },
  loginPrePathShift: ({dispatch,state})=>{
    console.log('delete....');
    dispatch('LOGINPREPATHSHIFT');
  }
}
export const changeIndexPage = ({dispatch,state},index)=>{
  console.log('indexPage:'+ index);
  dispatch('SETINDEXCURPAGE',index);
}
export const setUser =({dispatch,state},user)=>{
  console.log('user:' + user.username);
  dispatch('SETUSER',user);
}
