import { useMount, useUnMount, useFirstMount } from '@/pages/utils/customUse';
import { Button } from 'antd';
import { history } from 'umi';
import TextHoc from '@/components/TextHoc';
import React from 'react';
export default () => {
  const domRef = React.useRef<any>()
  const domRef1= React.useRef<any>()
  const domRef2= React.useRef<any>()
  const FatherTheChild = ()=>{
    domRef.current.fnc()
    domRef.current.ref.current.childNodes[0].style.background='red'
    // domRef.current.ref.current.removeChild(domRef.current.ref.current.childNodes[0])

  }
  const add = () => {
    console.log(123);
  };
  const ajax = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(123);
        console.log(123);
      }, 3000);
    });
  };
  useMount(add);
  useUnMount(add);
  const Text = () => <Button>Hoc</Button>;
  return (
    <div
      style={{
        background: ' #fff',
        width: '100%',
        height: '100%',
        padding: '10px',
      }}
    >
      <div>
        componentDidMount生命周期模拟
        <Button type="primary" onClick={() => add}>
          首次渲染
        </Button>
      </div>
      <div>
        componentWillUnmount生命周期模拟
        <Button type="primary" onClick={() => add}>
          组件卸载
        </Button>
      </div>
      <div>
        判断是否首次渲染
        <Button type="primary" onClick={() => useFirstMount()}>
          是否
        </Button>
      </div>
      <div>
        请求防抖
        <Button type="primary">防抖</Button>
      </div>
      <TextHoc url={`http:/123/123`} Ref={domRef}>
        <span>
          1<Button className='btn1'>Hoc</Button>
        </span>
        <span>
          2<Button>Hoc</Button>
        </span>
      </TextHoc>
      <Button type="primary" onClick={() => FatherTheChild()}>
        父调子函数
      </Button>
      <Button type="primary" onClick={() => history.goBack()}>
        返回
      </Button>
    </div>
  );
};
