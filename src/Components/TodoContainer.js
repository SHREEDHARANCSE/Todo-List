import React from "react";
function TodoContainer({a,dclick}){
    return(
        <div className="container"> 
            <div className="todo">
                <p>{a}</p>
                <div className="actions">
                    <input type="checkbox" />
                    <button onClick={()=>dclick(a)}>Delete</button>
                </div>

            </div>
        </div>

    )
}
export default TodoContainer