
import React,{useState} from 'react'
//import {Link} from 'react-router-dom'
//import { useNavigate } from 'react-router-dom';
import { IndividualProduct } from './IndividualProduct';



const bus_taka = 500;
//const train_taka = IndividualProduct.train_taka;
const person = 4;
const day = 2;





export const Information = (props) => {
  const [category, setCategory]=useState('');
  const [person, setPerson]=useState(null);
  const [day, setDay]=useState(null);
  return (
    <div className='my-products'>
    <h1 className='text-center'>Information</h1>
    From: 
                <select className='form-control' required
                value={category} onChange={(e)=>setCategory(e.target.value)}>                                    
                    <option value="">Select a place</option>                   
                    <option>Dhaka</option>
                    <option>Chittagong</option>                    
                    <option>Comilla</option>
                    <option>Borishal</option>
                    <option>Mymensing</option>
                    <option>noakhali</option>   
               
                </select>
                <br></br>
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
    <text>taka pay for bus {person*props.bus_taka}</text>
    <br></br>
    {/* <text>taka pay for train {person*train_taka}</text> */}

    
    </div>
    
  )
}

export default Information;


/*

//https://ej2.syncfusion.com/react/documentation/rich-text-editor/table/

import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
    items: ['CreateTable']
  }

  public render() {
    return (
      <RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings}>
        <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
          Users can format their content using standard toolbar commands.</p>
        <p><b>Key features:</b></p>
        <ul>
          <li>
            <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
          </li>
          <li>
            <p>Capable of handling markdown editing.</p>
          </li>
          <li>
            <p>Contains a modular library to load the necessary functionality on demand.</p>
          </li>
          <li>
            <p>Provides a fully customizable toolbar.</p>
          </li>
          <li>
            <p>Provides HTML view to edit the source directly for developers.</p>
          </li>
          <li>
            <p>Supports third-party library integration.</p>
          </li>
          <li>
            <p>Allows preview of modified content before saving it.</p>
          </li>
          <li>
            <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
          </li>
          <li>
            <p>Contains undo/redo manager.</p>
          </li>
          <li>
            <p>Creates bulleted and numbered lists.</p>
          </li>
        </ul>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;

*/