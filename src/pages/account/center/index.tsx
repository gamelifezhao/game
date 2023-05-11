import styles from './universal.less';
import { history } from 'umi';
import { Button } from 'antd';
export default () => {
  let obj = {
    a:1,
    b:2
  }
  let obj1 = {}
  Object.keys(obj).forEach((item)=>{
    Object.defineProperty(obj1,item,{
      get(){
        return obj[item]
      },
      set(val){
        obj[item] = val
        if(item === 'a'){
          obj.b = val *2
        }
      }
    })
  })
  return (
    <div className={styles.background}>
      <h1>下面为代码示例，详细请看center目录下的md文件</h1>
      <a onClick={()=>history.push('/hooks')}>基础hooks复习</a><br/>
      <a onClick={()=>history.push('/4-26')}>自定义hooks,hoc组件编写,以及react父调子函数复习</a>
    </div>
  );
};
