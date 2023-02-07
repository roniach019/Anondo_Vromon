import { useNavigate } from 'react-router-dom';
import { IndividualProduct } from './IndividualProduct';

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";



const Information = () => {
  const [person, setPerson]=useState(0);
  const [day, setDay]=useState(0);
  const [data, setData] = useState();

  const location = useLocation();

  const url = location.state.sheet_link;
//                <h1 className='photoCard'><a style={{}} href={individualProduct.map_link}><img src={individualProduct.url} alt="product-img"/>  </a></h1>

  console.log(typeof location.state.sheet_link);

  const getData = async () => {
    try {
      const res = await fetch(
        // url
        // ".best/api/sheets/d85b0e01-a114-439f-b8bd-1a29a36a7b"
        // "https://sheet.best/api/sheets/12327e80-9493-4b36-8e59-ae4e4bc44c12"
      );  
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="accordion" id="accordionExample">
      person:
     <input type="number" className='form-control' required
     onChange={(e)=>setPerson(e.target.value)} value={person}></input>
     <br></br>
     Day   : 
     <input type="number" className='form-control' required
     onChange={(e)=>setDay(e.target.value)} value={day}></input>
     <br></br>
     <br></br>
     <br></br>
      {data?.map((item, i) => (
        <div className="accordion-item" key={i}>
          <h2 className="accordion-header" id={`heading${i}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${i}`}
              aria-expanded="true"
              aria-controls={`collapse${i}`}
            >
              {item.Place} <br></br>
              <p>Bus price   : <br></br> {item.Bus}   total: {item.Bus*person*2}  </p>    
              <p>Train price : <br></br> {item.Train}  total: {item.Train*person*2}</p>
            </button>
          </h2>
          <div
            id={`collapse${i}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${i}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <strong className="display-6">Bus and Train price </strong> ---{" "}
                </span>
              </div><br></br>
              <p>Bus price   : {item.Bus}   total: {item.Bus*person*2}  </p>    
              <p>Train price :{item.Train}  total: {item.Train*person*2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Information;











// import React,{useState} from 'react'
// //import {Link} from 'react-router-dom'
// //import { useNavigate } from 'react-router-dom';
// import { IndividualProduct } from './IndividualProduct';


// const train_taka = 700;
// const bus_taka = 500;
// //const train_taka = IndividualProduct.train_taka;
// const person = 4;
// const day = 2;






// export const Information = (props) => {
//   const [category, setCategory]=useState('');
//   const [person, setPerson]=useState(null);
//   const [day, setDay]=useState(null);
//   const [BusjourneyTaka, setbusJourneyTaka] = useState(0);
//   const bus_calculation = () => {
//     setbusJourneyTaka(bus_taka*person);
//   }
//   return (
//     <div className='my-products'>
//     <h1 className='text-center'>Information</h1>
//     From: 
//                 <select className='form-control' required
//                 value={category} onChange={(e)=>setCategory(e.target.value)}>                                    
//                     <option value="">Select a place</option>                   
//                     <option>Dhaka</option>
//                     <option>Chittagong</option>                    
//                     <option>Comilla</option>
//                     <option>Borishal</option>
//                     <option>Mymensing</option>
//                     <option>noakhali</option>   
               
//                 </select>
//                 <br></br>
//     person:
//     <input type="number" className='form-control' required
//     onChange={(e)=>setPerson(e.target.value)} value={person}></input>
//     <br></br>
//     Day   : 
//     <input type="number" className='form-control' required
//     onChange={(e)=>setDay(e.target.value)} value={day}></input>
//     <br></br>
//     <br></br>
//     <br></br>
//     <text>taka pay for bus {person*props.bus_taka}</text>
//     <br></br>
//     {/* <text>taka pay for train {person*train_taka}</text> */}

//     <h1>calculation</h1><br></br>
//     <button onClick={bus_calculation}>bus</button>
//     <h2>{BusjourneyTaka}</h2>
//     <button>train</button>
//     {/* <h2>{count}</h2> */}

    
//     </div>
    
//   )
// }

// export default Information;


// /*

// //https://ej2.syncfusion.com/react/documentation/rich-text-editor/table/

// import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
// import * as React from 'react';

// class App extends React.Component<{},{}> {
//   private toolbarSettings: object = {
//     items: ['CreateTable']
//   }

//   public render() {
//     return (
//       <RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings}>
//         <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
//           Users can format their content using standard toolbar commands.</p>
//         <p><b>Key features:</b></p>
//         <ul>
//           <li>
//             <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
//           </li>
//           <li>
//             <p>Capable of handling markdown editing.</p>
//           </li>
//           <li>
//             <p>Contains a modular library to load the necessary functionality on demand.</p>
//           </li>
//           <li>
//             <p>Provides a fully customizable toolbar.</p>
//           </li>
//           <li>
//             <p>Provides HTML view to edit the source directly for developers.</p>
//           </li>
//           <li>
//             <p>Supports third-party library integration.</p>
//           </li>
//           <li>
//             <p>Allows preview of modified content before saving it.</p>
//           </li>
//           <li>
//             <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
//           </li>
//           <li>
//             <p>Contains undo/redo manager.</p>
//           </li>
//           <li>
//             <p>Creates bulleted and numbered lists.</p>
//           </li>
//         </ul>
//         <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table]} />
//       </RichTextEditorComponent>
//     );
//   }
// }

// export default App;

// */

//import React,{useState} from 'react'
