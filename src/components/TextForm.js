import React, {useState} from "react"

  


export default function TextForm(props) {
  const HandleClear = ()=>
  {
    let del = '';
    setText(del);
     props.showAlert("Clear text", "success");
  }
  const handelCopy = ()=>
  {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
     props.showAlert("Copy Text", "success");
  }
  const handleUpClick = () =>
  { 
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase", "success");
  }
  const handleLoClick = () =>
  { 
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert("Text converted to LowerCase", "success");
  }
  const handReClick = () =>
  { 
     let newText = text.split('').reverse().join('');
    setText(newText);
     props.showAlert("Reverse the text", "success");
  }
  const handleOnChange = (event) =>
  {
    setText(event.target.value)
  }
  const [text,setText]  = useState(' ')
  return (
    <>
    <div className="container "style={{color: props.Mode ==="dark"?"white":"#032744"}}>
      <h1>  {props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.Mode ==="dark"?"grey":"white ",color: props.Mode ==="dark"?"white":"#032744"}} id="myBox" rows="6"></textarea>
      <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to UpperCase</button>
     < button  className='btn btn-primary ' onClick={handleLoClick}>Convert to LowerCase</button>
     < button  className='btn btn-primary mx-2 ' onClick={handReClick}>Convert to Reverse</button>
     < button  className='btn btn-primary mx-2 ' onClick={handelCopy}>Text Copy</button>
     < button  className='btn btn-primary mx-2 ' onClick={HandleClear}>Clear</button>


     </div>
      </div>
     <div className="container my-3" style={{color: props.Mode ==="dark"?"white":"#032744"}}>
       <h1>Your text Summary</h1>
       <p>{text.split(" ").length } words and {text.length} characters</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
     </div>
     </>
  )
}
