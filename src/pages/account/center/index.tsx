import { useState } from 'react';
import One from '../../../components/One';
import Two from '../../../components/Two';
import { Button } from 'antd';
export default () => {
  const list = [
    '学习',
    '工作',
    '生活',
    '娱乐',
    '其他',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ];
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {/* <One list={list} num={4}/> */}
      <Button type="primary" onClick={() => setIsShow(!isShow)}>
        Button
      </Button>
      {isShow ? <One list={list} num={4} /> : <Two />}
      <Two />
    </>
  );
};
