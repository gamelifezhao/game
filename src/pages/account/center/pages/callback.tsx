import React,{useEffect,memo} from 'react'
import { Button } from 'antd';
type Props = {
  num?: number,
  fn?:()=>void,
  obj?:{
    num:number,
    num1:number
  },
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



