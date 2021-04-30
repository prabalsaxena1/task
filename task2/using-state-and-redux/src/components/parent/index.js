import React, { useState } from 'react';
import Child from "../child";
import "./style.css"
import { useSelector } from 'react-redux';

const Parent = () => {
    const [text, setText] = useState("")

    const textChangeHandler = (e) => {
        setText(e.target.value)
    }
    const curText = useSelector(state => state.changeText.text)

    return (
        <div className="parentDiv">
            <h1>Parent Component</h1>
            <p>Entered Text(using state): {text}</p>
            <p>Entered Text(using redux-store): {curText}</p>
            <Child textChangeHandler={textChangeHandler} />
        </div>
    );
}

export default Parent;
