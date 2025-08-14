import React, { useState } from 'react'

const About = () => {
    const[myStyle,setStyle] = useState( {
        color: 'black',
        backgraoundColor:'black',
        // border : '1px solid black' 
    });

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
    const[text,setText]= useState("Dark Mode");
   
  return (
    <>  
    <div className="container" >
      
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid"> 
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


        <div className='container' style={myStyle}> <h2>About Us</h2>


  <div style={myStyle} className="container">To convert the input string from lowercase values to 
    uppercase inside the input field using react we will be using the toUpperCase method.</div>
        <div style={myStyle} className="container">To convert the input string from lowercase values to uppercase inside the input field using react we will be using the toUpperCase method.</div>
        <div style={myStyle} className="container">To convert the input string from lowercase values to uppercase inside the input field using react we will be using the toUpperCase method.</div>
    </div>
    <button className="btn btn btn-dark mt-2" onClick={handleMode}>{text} </button>
        </div>

    </>
  )
}

export default About
