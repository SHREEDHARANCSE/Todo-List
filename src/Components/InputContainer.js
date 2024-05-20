import React from "react";
function InputContainer({wtodo,inpval,hclick}){
    return(
        <div className="input-container">
            <input onChange={wtodo} type="text" value={inpval}/>
            <button onClick={hclick}>+</button>

        </div>

    )
}
export default InputContainer