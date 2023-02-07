import { useNavigate } from 'react-router-dom';
import { IndividualProduct } from './IndividualProduct';

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";



const Information = () => {
  const [person, setPerson]=useState(0);
  const [day, setDay]=useState(0);
  const [data, setData] = useState();

  const location = useLocation();

  const getData = async () => {
    try {
      const res = await fetch(location.state.sheet_link
        // "https://sheet.best/api/sheets/12327e80-9493-4b36-8e59-ae4e4bc44c12"
      );  
      const data = await res.json();
      console.log(data);
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{backgroundColor:'yellow'}}>
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
              {item.Place}  
            </button>
          </h2>
          <div
            id={`collapse${i}`}
            aria-labelledby={`heading${i}`}
            data-bs-parent="#accordionExample"
          >
            <div>
              <div>
                <span>
                  <strong className="display-6">{item.Heading} </strong> ---{" "}
                </span>
              </div><br></br>
              <p>Bus price   : {item.Bus}   total: {item.Bus*person*2}  </p>    
              <p>Train price :{item.Train}  total: {item.Train*person*2}</p>
            </div>
          </div>
        </div>
      ))}

    {/* hotel */}

    <h1>This is for hotel information</h1>
    <br></br>
      {data?.map((item, i) => (
        <div key={i}>
          <h2 id={`heading${i}`}>            
              <a href={item.link}>{item.hotel}  </a>
          </h2>
          
            <div >
              <div >
                <span>
                  <strong className="display-6">{item.heading2} </strong> 
                </span>
              </div><br></br>
              <p>rent price maximum : {item.maximum_rent}   total: {item.maximum_rent*person*day}</p>    
              <p>rent price minimum : {item.minimum_rent}   total: {item.minimum_rent*person*day}</p>
              
            </div>
          </div>
      ))}

    </div>
  );
};

export default Information;
