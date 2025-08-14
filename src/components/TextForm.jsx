import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TextForm(props) {
    const [text,setText] = useState("Enter Text here ");
    let num = 1;
     const handleUpClick=()=>{
        console.log("Upercase was clicked ");
        setText(text.toUpperCase())
     }
     const hancleLoClick=()=>{
      console.log("Clicked LowerText converter button ");
      setText(text.toLocaleLowerCase());
     }
     const onChangeHandle=(event)=>{
        setText(event.target.value);
        console.log("Onchange clicked ")
     }

     const clearText=()=>{
      setText(" ");
      console.log("Text hase Cleared : ")
     }

     const handleBold=()=>{
      setText(text);
     
      
     }

     const handleInverse=()=>{
      console.log("Inverse button Trigered")
      let newText ="";
      for(let i = text.length-1;i>=0;i--){
        newText = newText+text.charAt(i);
      }

      setText(newText);
     }
  return (
      <>
    <div className="container my-4">
  <h1 className="mb-3">{props.handling}</h1>

  <div className="mb-3">
    <textarea
      className="form-control"
      id="myBox"
      rows="8"
      value={text}
      onChange={onChangeHandle}
      placeholder="Enter your text here..."
    ></textarea>
  </div>

  <button
    className="btn btn-success"
    onClick={handleUpClick}
  >
    Convert to Uppercase
  </button>
    <button className="btn btn-primary mx-4" onClick={hancleLoClick}>Convert in LowerCase</button>
    <button className="btn btn-danger mx-4 mt-2" onClick={clearText}>Clear Text</button>
   
   <button className="btn success" onClick={handleInverse}> Inverse Text</button>
</div>

<div className="container">
  <h4>{text.length}  </h4>
  <h2>Prevew</h2>
  <p>{text}</p>
</div>


</>

  );
}
