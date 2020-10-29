import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";


function App() {
  const [countries, setCountries] = useState([]);
  
 const [error, setError] = useState('');


  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')

        .then(res => {
          console.log(res.data)
            setCountries(res.data);
         
        })
        .catch(err => {
            setError(err.message);
           
        })
        
        
},[]);
function handleChange(e){
  console.log(e.target.value)
  setCountries(countries.filter((country)=>{
    if(country.name.toLowerCase().includes(e.target.value)){
      return country.name;
    }
  }))
 
  }
 const countryList =  countries.map((country,index)=>
       <li key={index}>{country.name}</li>
    )


return(
<div>
 <input type="text" placeholder="search country name here" onChange={handleChange}/>
  <ul>
    {countryList}
    </ul>
 
  </div>)
}


  

export default App;
