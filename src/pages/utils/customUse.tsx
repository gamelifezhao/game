import {useRef,useEffect,EffectCallback} from 'react';
export const useMount=(fn:EffectCallback)=>{
    useEffect(fn,[])
}
export const useUnMount=(fn:any):void=>{
    const fnRef=useRef<any>(fn);
    useEffect(()=>()=>fnRef.current(),[])
}
export const useFirstMount=()=>{
    const isFirstMountRef=useRef(true);
    if(isFirstMountRef.current){
        isFirstMountRef.current=false;
        return true;
    }
    return isFirstMountRef.current;
}
