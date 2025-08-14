
import './App.css'
import About from './components/About'
import TextForm from './components/TextForm'
function App() {
  function HandleClicked(){
    alert("you have clicked the button : ")
  }

  function handleMouse(){
    alert("Mouse is on the Para ")
  }

  function textChange(e){
    console.log("Typed :"+ e.target.value)
  }

  function formSubmit(){
    alert("form Submitted : ")
  }
  return (
  <div className="container my-3">
    {/* <p onMouseOver={handleMouse}>I am a Para Please reade CareFully</p>
    <button onClick={HandleClicked}>Click me </button>

    <input type="text" onChange={textChange}/>

    <form onSubmit={formSubmit} >
      <input type="text" placeholder='Type something' />
      <button>SubMit</button>
    </form> */}



    {/* <TextForm handling="Enter the text to analyse"/> */}
      <About />
  </div>
  )
}

export default App
