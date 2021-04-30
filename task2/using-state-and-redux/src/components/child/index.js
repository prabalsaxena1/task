import React from 'react';
import "./style.css"
import { useDispatch } from "react-redux";
import { changeTextAction } from "../../actions"
const Child = (props) => {
    const dispatch=useDispatch()
    return (
        <div className="childDiv">
            <h1>Child Component</h1>
            <input type="text" placeholder="Enter your text here" onChange={(e) => {
                props.textChangeHandler(e)
                dispatch(changeTextAction(e.target.value))
            }} />
        </div>
    );
}

export default Child;
