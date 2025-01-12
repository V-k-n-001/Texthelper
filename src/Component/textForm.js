import React,{useState}  from  'react';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!","success");
  }
  const handleLoClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!","success");
  }
  const handleClearClick = ()=>{
    let newText=('');
    setText(newText)
    props.showAlert("Text Cleard!","success");
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard!","success");
  }
  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success");
  }

  const handleOnChange = (event)=>{
  
    setText(event.target.value)
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13464e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
        <button disabled ={text.length=== 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button  disabled ={text.length=== 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button  disabled ={text.length=== 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled ={text.length=== 0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button  disabled ={text.length=== 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length >0?text:"Nothing to Preview."}</p>

      </div>
    </>
  );
}

