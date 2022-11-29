import React from "react";
import { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    let handleOnChange = (event) => {
        // console.log("Value of text has been changed");
        setText(event.target.value);
    };
    let handleUpOnClick = () => {
        // console.log("UpperCase button has been clicked");
        let newText = text.toUpperCase();
        setText(newText);
    };
    let handleLoOnClick = () => {
        // console.log("LowerCase button has been clicked");
        let newText = text.toLowerCase();
        setText(newText);
    
    };
    let handleOnClear = () => {
        // console.log("ClearText button has been clicked");
        setText("");
    };
    let handleOnCopy = (event) => {
        // console.log("Copy button has been clicked");
        let newText = text;
        navigator.clipboard.writeText(newText);
    };
    let handleOnSpRemove = () => {
        // console.log("Remove Space button has been clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

    };
    return (
        <>
            <div className="container">
                {/* <form> */}
                <h1>{props.Heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" placeholder="Enter text here" value = {text} onChange={handleOnChange}></textarea>
                </div>
                <button
                    type="submit" className="btn btn-primary mx-1" onClick={handleUpOnClick}>
                    Convert to Upprcase
                </button>

                <button
                    type="submit" className="btn btn-primary mx-1" onClick={handleLoOnClick}>
                    Convert to Lowercase
                </button>
                
                <button
                    type="submit" className="btn btn-primary mx-1" onClick={handleOnClear}>
                    Clear Text
                </button>
                <button
                    type="submit" className="btn btn-primary mx-1" onClick={handleOnCopy}>
                    Copy to Clipboard
                </button>
                <button
                    type="submit" className="btn btn-primary mx-1" onClick={handleOnSpRemove}>
                    Remove Extra Space
                </button>
                {/* </form> */}
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>
                    {(text.length === 0)? "0" : text.split(" ").length} words and {text.length} characters
                </p>
                <p>{(text.length === 0)? "0" : text.split(" ").length * 0.4} minute reading</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}



