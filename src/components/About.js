

export default function About(props) {
  
  // const [myStyle,setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black"
  // })
  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor:  props.mode === 'dark'?'rgb(36 74 104':'white',
    

  }
// const [btnText, setBtnText] = useState("Enable Dark Mode")
//  const  toggleStyle = () =>
//   {
//     if(myStyle.color == "white")
//     {
//       setMyStyle({
//         color: "black",
//     backgroundColor: "white"
//       }) 
//       setBtnText('Enable Dark Mode')
      
//     }
//     else
//     {
//       setMyStyle({
//         color: "white",
//     backgroundColor: "black"
//       })
//       setBtnText('Enable Light Mode')
//     }
//   }

  return (
    <div>
      <div className='container rounded'   style={myStyle}>
        <h1 className="my-3 " style={{color:props.mode ==='dark'?'white':"#042743"}}>About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
               <strong>  Analyze Your Text</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
               TextUtils provides a quick and efficient way to analyze your text—whether it's word count, character count, or more.
              </div>
            </div>
          </div>

          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
               <strong>  Free to Use</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body">
                TextUtils is a free tool that instantly provides character and word count statistics for any given text. It's ideal for writing content that must adhere to specific word or character limits.
              </div>
            </div>
          </div>

          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
               <strong> Browser Compatible</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body">
               This word counter works in all major web browsers, including Chrome, Firefox, Internet Explorer,
                Safari, and Opera. It's perfect for counting characters in Facebook posts, blogs, books,
                 Excel documents, PDFs, essays, and more.
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
