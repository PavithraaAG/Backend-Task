//-------->Day1 task2<-------------
// form validation
import React from 'react';
function FormValidation(){
    const input1=React.createRef();
    const input2=React.createRef();
    const input3=React.createRef();
    function handleSubmit(event){
        event.preventDefault();
        
        if(input1.current.value.length<5 || input2.current.value.length<1){
            alert("Please enter valid value");
        }
        else{
            input3.current.innerText=input2.current.value
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>FormValidation</h2>
            <input type="password" name="name" ref={input1}/>
            <input type="email" name="email" ref={input2}/>
            <button type="submit">Submit</button>
            <p ref={input3}></p>
        </form>
        

    )
}
export default FormValidation;