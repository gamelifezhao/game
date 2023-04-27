# Hooks 学习

### useMemo useCallback react.memo 学习

```
// 父组件
import styles from '../../universal.less';
import React,{useState,useCallback,useMemo} from 'react';
import { Button } from 'antd';
import Callback from './pages/callback';
export default () => {
  // react.memo 优化
  const [num, setNum] = useState(0);
  // useCallBack 优化
  const [num1, setNum1] = useState(0);
  const fn=useCallback(()=>{setNum(num1+1)},[num1])
  // useMemo 优化
  // const obj ={num:num,num1:num1}
  const obj = useMemo(()=>({num:1,num1:1}),[num1])
  return (
    <div  className={styles.background}>
      父组件
      <Button type="primary" onClick={()=>setNum(num+1)}>{num}</Button>
      <Callback fn={fn} obj={obj}/>
    </div>
  );
};
// 子组件
import React,{useEffect,memo} from 'react'
import { Button } from 'antd';
type Props = {
  num?: number,
  fn?:()=>void,
  obj?:{
    num:number,
    num1:number
  }
}
// memo 优化 避免父组件渲染时 子组件也渲染
//  function callback(props:Props) {
//   console.log('子组件')
//   return (
//     <div>
//       子组件
//     </div>
//   )
// }
// export default memo(callback)


// useCallBack 优化 useCallback() 起到了缓存的作用，即便父组件渲染了，useCallback() 包裹的函数也不会重新生成，会返回上一次的函数引用。
// 这个时候memo就不行了，因为memo只是对比上一次的props和这一次的props是否相等，如果相等就不渲染，不相等就渲染。但是这里传入了一个fn每次父组件重新渲染，fn都会重新生成，所以memo就不起作用了。
// const callback = (props:Props) => {
//   const {fn} = props
//   console.log('子组件')
//   return (
//     <div>
//       子组件
//     </div>
//   )
// }
// export default memo(callback)

// useMemo 优化
// 父组件渲染，const info = { name, age } 一行会重新生成一个新对象，导致传递给子组件的 info 属性值变化，进而导致子组件重新渲染。
//
const callback = (props:Props) => {
  console.log('子组件');

  return (
    <>
      子组件
    </>
  )
}
export default memo(callback)
```

总结：memo 基本每个 react 组件都要使用，useCallback 则是用来缓存函数的，需要缓存函数的原因是当父传子 props 为函数的时候，父组件每次重新渲染就会重新生成函数，这就造成了 props 的函数每次都会改变，所以子组件就会重新渲染，使用 Callback 会把第一次传入的函数缓存下来，依赖不变则不更新缓存，useMome 同理，当 props 的是一个对象时会重新生成对象,基本类型则不会

### useReducer 学习

useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为可以向子组件传递 dispatch 而不是回调函数 。

```

const reducer =(state:any,action:any)=>{
  switch (action.type) {
    case 'INIT':
      return state+1
    case 'FAILURE':
      return state-1
    default:
      throw new Error()
  }
}
// 这里useReducer第一个参数是函数，第二个是state的初始值
const [state, dispatch] = useReducer(reducer,num);
// 调用
<Button type="primary" onClick={() => dispatch({type:'FAILURE'})}>
  {state}
</Button>
```

### useRef 学习

1. useRef和Ref的区别
useRef是用来创建引用对象，而ref则是用来访问dom节点或将render方法中的react组件分配给引用对象，reactRef只是引用对象上的引用属性

### useImperativeHandle 学习

作用：用于Ref的透穿，一般作用于父调子方法
使用方法：父组件定义useRef，穿给子组件这个Ref，子组件通过useImperativeHandle定义方法，父组件通过Ref调用子组件的方法

```
useImperativeHandle(Ref,()=>{
    return {
      fnc:fnc
    }
  })
```

### 自定义hooks和Hoc基础复习

自定义hooks：主要用于逻辑的抽离，减少逻辑的耦合，每个hooks都是一个函数，函数名以use开头，并且所有的hooks都是一个闭包，是独立函数。

Hoc：主要用于UI的抽离，减少UI的耦合，hoc是装饰器设计模式
（在不改变原对象的基础上，通过对其进行包装拓展，使得原有对象可以动态具有更多功能，从而满足用户的更复杂需求）

Hoc使用场景：操作props，渲染劫持，抽离state，生命周期劫持，ref转发

操作props：在被包装组件接收 props 前，高阶组件可以先拦截到 props，对 props 执行增加、删除或修改的操作，然后将处理后的 props 再传递给被包装组件。

渲染劫持：高阶组件可以通过渲染劫持的方式，对被包装组件进行渲染劫持，从而实现对组件的渲染控制。

ref转发：高阶组件可以通过 ref 转发的方式，将被包装组件的 ref 传递给高阶组件，从而实现对被包装组件的 ref 控制。在4-26文件中我通过定义了父调子的方法，然后在textHoc文件中把这个组件的实例传给了4-26，然后通过操作实例的方法，去修改textHoc这个组件的东西，而不是通过更改props的方式去修改，当然这种方法很少用到。







