// ---------------->Day 1 task 1<-------------------

import React from "react";
function Upper(props){
    
    return (
    <>
    <h2>{props.data.toUpperCase()}</h2>
    </>
    )
}
// filtering even number of tasks
function Filtered(props){
    const res=props.data.map((item)=>{
        if(item%2==0)
        {
         return <li>{item}</li>
        }
     })
     return( 
        <ul>{res}</ul>)
}
// userinput product of nums
function Product(props){
    
    const inputRef1=React.createRef();
    const inputRef2=React.createRef();
    const inputRef3=React.createRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        inputRef3.current.innerText=(parseInt(inputRef1.current?.value || 1)* parseInt(inputRef2.current?.value || 1))
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Product</h2>
        <input type="number" ref={inputRef1} />
        <input type="number"ref={inputRef2} />
        <button type="submit">click</button>
        <p ref={inputRef3}></p>
        </form>
    )
}
export {Upper};
export {Filtered};
export {Product};
