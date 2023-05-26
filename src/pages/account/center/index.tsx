import styles from './universal.less';
import { history } from 'umi';
export default () => {
  return (
    <div className={styles.background}>
      <h1>下面为代码示例，详细请看center目录下的md文件123</h1>
      <a onClick={() => history.push('/hooks')}>基础hooks复习</a>
      <br />
      <a onClick={() => history.push('/4-26')}>自定义hooks,hoc组件编写,以及react父调子函数复习</a>
    </div>
  );
};
