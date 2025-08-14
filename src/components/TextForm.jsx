import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here ");
  let num = 1;
  const handleUpClick = () => {
    console.log("Upercase was clicked ");
    setText(text.toUpperCase());
  };
  const hancleLoClick = () => {
    console.log("Clicked LowerText converter button ");
    setText(text.toLocaleLowerCase());
  };
  const onChangeHandle = (event) => {
    setText(event.target.value);
    console.log("Onchange clicked ");
  };

  const clearText = () => {
    setText(" ");
    console.log("Text hase Cleared : ");
  };

  const handleBold = () => {
    setText(text);
  };

  const handleInverse = () => {
    console.log("Inverse button Trigered");
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText = newText + text.charAt(i);
    }

    setText(newText);
  };

const[myStyle,setStyle] = useState(
{
  color:'black',
  backgraoundColor:'black',
})
  const handleMode=()=>{
       if(myStyle.color ==='black'){

            let newStyle = {color: 'white',
             backgroundColor:'black',
             border : '1px solid white',
             borderRadius:'5px',
              marginTop:'2px',
             marginBottom:'2px'
             }
             setText("light Mode");
             setStyle(newStyle);
        }else{
            setStyle (
                {color: 'black',
             backgroundColor:'white',
             border : '1px solid black',
             borderRadius:'5px',
             marginTop:'2px',
             marginBottom:'2px'
            }
            )
            setText('Dark Mode')
        }

  }
  return (
    <> 
    
      <div style={myStyle} className="container my-4">
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

        <button className="btn btn-success" onClick={handleUpClick}>
          Change in Uppercase
        </button>
        <button className="btn btn-primary mx-4" onClick={hancleLoClick}>
          Change in LowerCase
        </button>
        <button className="btn btn-secondary" onClick={handleInverse}>
          {" "}
          Inverse Text
        </button>
        <button className="btn btn-danger mx-4 mt-2" onClick={clearText}>
          Clear Text
        </button>
      </div>

      <div className="container">
        <h4>{text.length} </h4>
        <h2>Prevew</h2>
        <p>{text}</p>

        <button onClick={handleMode} className="btn btn-dark"><h5>Dark Mode</h5></button>
      </div>


    </>
  );
}
