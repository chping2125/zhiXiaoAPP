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
