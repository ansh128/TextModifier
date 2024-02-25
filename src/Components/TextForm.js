import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted into UPPERCASE", "success")
    }
    const handleLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted into lowercase", "success")
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Clear text", "success")
    }

    const handleSenCase = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Text converted into Sentence format", "success")
    }

    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to clipboard", "success")
    }

    const handleRemoveEtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{ color: props.style === 'dark' ? 'white' : 'black' }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control mx-1 my-1" style={{ backgroundColor: props.style === 'light' ? 'white' : '#585858', color: props.style === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpCase}>UPPER CASE</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLoCase}>lower case</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleSenCase}>Sentence case</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleRemoveEtraSpace}>Remove Extra Space</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>copy</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClear}>clear</button>
                </div>
            </div>
            <div className="container" style={{ color: props.style === 'dark' ? 'white' : 'black' }}>
                <h3>Text Summary</h3>
                <p><strong>{text.split(" ").filter((element)=>{return element.length!==0}).length}</strong> words and <strong>{text.length}</strong> characters</p>
            </div>
        </>
    )
}
