# promise学习
- new一个promise
// promise 有三个状态  等待（pending） 、 已完成（fulfilled） 、 已拒绝（rejected）
```
  new promise((resolve, reject) => {
    resolve('成功') || reject('失败')
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
```
- promise.all
// promise.all接收一个promise数组，当所有的promise都完成时候才会返回结果，如果有一个失败就会返回失败的结果
```
  const p1 = new Promise((resolve, reject) => {
    resolve('成功')
  })
  const p2 = new Promise((resolve, reject) => {
    resolve('成功')
  })
  const p3 = new Promise((resolve, reject) => {
    resolve('成功')
  })
  Promise.all([p1,p2,p3]).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
```
- promiser.race
// promiser.race 会优先返回最先完成的promiser
```
 const p1 = new Promise((resolve, reject) => {
    resolve('成功')
  })
  const p2 = new Promise((resolve, reject) => {
    resolve('成功')
  })
  const p3 = new Promise((resolve, reject) => {
    resolve('成功')
  })
  Promise.race([p1,p2,p3]).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
```
- Promise.allSettled
// Promise.allSettled 会返回一个数组，数组中包含了每个promise的结果
```
  const p1 = new Promise((resolve, reject) => {
    resolve('成功')
  })
  const p2 = new Promise((resolve, reject) => {
    reject('失败')
  })
  const p3 = new Promise((resolve, reject) => {
    resolve('成功')
  })
  Promise.allSettled([p1,p2,p3]).then(res => {
    console.log(res) // ['成功','失败','成功']
  }).catch(err => {
    console.log(err)
  })
```
# try
```
 try{
   console.log(res);
   console.log(res); // 假设在try的代码块中这行代码报错，那他则不会继续执行72行代码，转而catch
   console.log(res);
   new Error("Things happen o_O");
 }catch{
  console.log('报错啦！')
 }
```
