import React, { useState, useCallback, useMemo, useReducer, useRef, useEffect } from 'react';
import { Button } from 'antd';
import Callback from '../pages/callback';
import { history } from 'umi';
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INIT':
      return state + 1;
    case 'FAILURE':
      return state - 1;
    default:
      throw new Error();
  }
};
export default () => {
  // useRef
  const elementRef = useRef(null);
  // react.memo 优化
  const [num, setNum] = useState(0);
  // useCallBack 优化
  const [num1, setNum1] = useState(0);
  const fn = useCallback(() => {
    setNum(num1 + 1);
  }, [num1]);
  // useMemo 优化
  // const obj ={num:num,num1:num1}
  const obj = useMemo(() => ({ num: 1, num1: 1 }), [num1]);
  // useReducer 学习
  const [state, dispatch] = useReducer(reducer, num);
  return (
    <div
      style={{
        background: ' #fff',
        width: '100%',
        height: '100%',
        padding: '10px',
      }}
      ref={elementRef}
    >
      父组件
      <Button type="primary" onClick={() => history.push('/account/center')}>
        跳转...
      </Button>
      <Button type="primary" onClick={() => dispatch({ type: 'INIT' })}>
        {state}
      </Button>
      <Button type="primary" onClick={() => dispatch({ type: 'FAILURE' })}>
        {state}
      </Button>
      <Callback fn={fn} obj={obj} />
    </div>
  );
};
