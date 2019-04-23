
import { List, Ttt } from './lib';

// document.getElementById('demo').innerHTML = `${hello}, ${world}!`;
window.onload = (function(){
  const data = [
    {index : 0, title : '첫번째'},
    {index : 1, title : '두번째'},
    {index : 2, title : '세번째'}
  ]
  let pp = new List('lsit',data)
  let uu = new Ttt('lsit',data,'?????')
  uu.output()
  document.getElementById('list').innerHTML = pp.printItems()
})()
