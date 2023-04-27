import React ,{useImperativeHandle,useRef,createRef}from 'react';
export default ({ children,url,Ref,...props }: any) => {
  const ref = createRef<any>();
  useImperativeHandle(Ref,()=>{
    return {
      fnc:fnc,
      ref:ref
    }
  })
  const fnc=()=>console.log(1234);
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        background: '#fff',
        border: '1px solid #000',
      }}
      ref= {ref}
    >
      {children.map((item: any,index:any) => (
        <div key={index}>{item}123</div>
      ))}
    </div>
  );
};
