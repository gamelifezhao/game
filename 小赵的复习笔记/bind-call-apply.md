# 改变函数上下文

- bind
  1. bind 会创建一个新函数，当这个函数被调用时，传入的第一个参数作为新的 this 对象，后续参数作为绑定函数的参数，新函数与被调函数(绑定函数的目标函数)具有相同的函数体。
  2. 传递的第一个参数做为调用它的函数的 this 指向（bind 可传递若干参数）。
  3. 若第一个参数传递基础数据类型，则调用他的函数的 this 指向该基础数据类型的包装类实例化对象。
  4. 若第一个参数为 null 或 undefined，则调用他的函数的 this 指向 window。
  5. bind 的第二个之后的参数为调用它的函数的参数列表。
  6. bind 方法会返回一个新的方法，并且该方法满足柯里化，仍可以传递参数，但这个方法的 this 不可被 call、apply、bind 改变。
  7. bind 方法返回的新方法，如果使用 new 实例化，那么原本通过 bind 绑定的 this 指向的对象会失效，this 将指向到新实例化的对象上，且可以使用原方法原型链上的属性或方法。
  ```
    function fooBind() {
      console.log(this.a);
    }
    const obj = {
      a: 1
    }
    const fooBindObj = fooBind.bind(obj);
  ```
- call
  1. call 会调用函数，第一个参数作为 this 对象，后续参数作为调用函数的参数，调用函数的 this 指向第一个参数。
  2. call 调用之后，无法通过 bind 修改 this 指向。
  3. call 调用之后，无法通过 new 关键字调用。
  4. call 调用之后，无法修改函数的原型对象。
