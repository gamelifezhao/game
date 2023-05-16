import { useState, useEffect, memo } from 'react';
import style from './index.less';
// utils
const splitArray = (array, size) => {
  // 判断参数是否合法
  if (size < 1 || size > array.length) {
    // 抛出异常
    return [];
  }
  // 创建一个空的二维数组
  let result = [];
  // 遍历原始数组，每次跳过size个元素
  for (let i = 0; i < array.length; i += size) {
    // 截取从i开始，长度为size的一段元素，作为一个子数组
    let chunk = array.slice(i, i + size);
    // 把子数组添加到结果数组中
    result.push(chunk);
  }
  // 返回结果数组
  return result;
};
const One = (props) => {
  const { list, num } = props;
  const [newArr, setNewArr] = useState([]);
  useEffect(() => {
    const arr = splitArray(list, num);
    setNewArr(arr);
  }, [props]);
  // 判断左右
  const isLeft = (index) => {
    const is = index % 2;
    if (is) {
      return style.box1;
    } else {
      return style.box2;
    }
  };
  // 根据size判断宽度
  const isWidth = () => {
    const width = `${100 / num}%`;
    return width;
  };
  // 判断箭头方向
  const isArrow = (index, i, items) => {
    if (items == list[list.length - 1]) {
      return <div className={style.box4}>{items}</div>;
    }
    if (i == num - 1) {
      return (
        <div className={style.box6}>
          <div className={style.box4}>{items}</div>
          <div className={style.arrow}>⬇️</div>
        </div>
      );
    }
    if (index % 2) {
      return (
        <div className={style.box5}>
          <span className={style.arrow}>⬅️</span>
          <span className={style.box4}>{items}</span>
        </div>
      );
    } else {
      return (
        <div className={style.box5}>
          <span className={style.box4}>{items}</span>
          <span className={style.arrow}>➡️</span>
        </div>
      );
    }
  };
  return (
    <div className={style.box}>
      {newArr?.map((item, index) => {
        return (
          <div key={index} className={isLeft(index)}>
            {item.map((items, i) => {
              return (
                <div key={index} style={{ width: isWidth() }} className={style.box3}>
                  {isArrow(index, i, items)}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default memo(One);
