import React, { useState, useEffect } from 'react';
import styles from './universal.less';
import { history } from 'umi';
import { Button } from 'antd';
export default () => {
  const [number, setNumber] = useState<number>(0);
  const arr = [1,2,2,2,2,412,2123,54,23,11]
  arr.sort((a,b)=>a-b)
  const newArr2 = (arr:Array<number>)=>{
    let arrObj:any = []
    arr.map((item,index)=>{
      let obj:any = {value:null,max:1}
      for (let i = index+1; index < arr.length; index++) {
        obj.value = item
        if(item === arr[i]){
          obj.max++
          arr.splice(i,1)
        }
      }
      arrObj.push(obj)
    })
    return arrObj
  }
  console.log(newArr2(arr));
  function f1(){
    let count = 0;
    return function () {
        count ++;
        return count;
    }
  }
  let fn:any = f1()
  console.log(fn())
  fn = null
  // 截流
  
  return (
    <div className={styles.background}>
      <h1>下面为代码示例，详细请看center目录下的md文件</h1>
      <Button onClick={()=>f()}>点击</Button>
      <a onClick={()=>history.push('/hooks')}>基础hooks复习</a><br/>
      <a onClick={()=>history.push('/4-26')}>自定义hooks,hoc组件编写,以及react父调子函数复习</a>
    </div>
  );
};
