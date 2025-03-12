import {useEffect,useRef} from 'react';


export const useInfiniteScroll=(callback)=>{
    const observerRef=useRef(null);


    useEffect(()=>{
        observerRef.current=new IntersectionObserver(([entry])=>{
if(entry.isIntersecting)
{
    callback();
}
        },{threshold:1.0});


        return ()=>observerRef.current?.disconnect();
    },[callback]);


    return observerRef;

}